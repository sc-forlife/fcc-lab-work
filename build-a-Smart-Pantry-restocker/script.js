import { data } from "react-router-dom";

const rawData = [
  "A10|Tomatoes|5|2027-01-01", // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry", // zone: "pantry"
];

const pantry = [];

export function parseShipment(rawData) {
  const duplicateSKU = [];
  let data = rawData.map((string) => {
    const splitString = string.split("|");
    const shipmentObj = {};

    if (duplicateSKU.includes(splitString[0])) {
      return { sku: "duplicate" };
    } else {
      duplicateSKU.push(splitString[0]);
    }

    shipmentObj["sku"] = splitString[0];
    shipmentObj["name"] = splitString[1];
    shipmentObj["qty"] = Number(splitString[2]);
    shipmentObj["expires"] = splitString[3];
    shipmentObj["zone"] = splitString[4] || "general";
    return shipmentObj;
  });
  data = data.filter((item) => item.sku !== "duplicate");
  return data;
}

function inPantry(pantry, sku) {
  return pantry.some((items) => items.sku === sku);
}

export function planRestock(pantry, shipment) {
  const shimentData = shipment.map((item) => {
    let type = "";
    if (item.qty <= 0) {
      type = "discard";
    } else if (inPantry(pantry, item.sku)) {
      type = "restock";
    } else if (inPantry(pantry, item.sku) === false) {
      type = "donate";
    }
    return { type: type, item: item };
  });
  return shimentData;
}

export function groupByZone(actions) {
  const groupZone = {};
  actions.forEach((element) => {
    if (groupZone[element.item.zone]) {
      groupZone[element.item.zone].push(element);
    } else {
      groupZone[element.item.zone] = [element];
    }
  });
  return groupZone;
}

export function clonePantry(pantry) {
  const newArr = [];
  for (const item of pantry) {
    newArr.push({ ...item });
  }
  return [...newArr];
}

const processedShipment = parseShipment(rawData);

const actions = planRestock(pantry, processedShipment);

console.log(groupByZone(actions));
