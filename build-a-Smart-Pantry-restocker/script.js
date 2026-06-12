import { data } from "react-router-dom";

const rawData = [
  "A10|Tomatoes|5|2027-01-01", // no zone field
  "B21|Bananas|10|2027-01-01|fridge", // zone: "fridge"
  "C32|Eggs|3|2027-01-01|pantry", // zone: "pantry"
];

export function parseShipment(rawData) {
  const data = rawData.map((string) => {
    const splitString = string.split("|");
    const shipmentObj = {};
    shipmentObj["sku"] = splitString[0];
    shipmentObj["name"] = splitString[1];
    shipmentObj["qty"] = Number(splitString[2]);
    shipmentObj["expires"] = splitString[3];
    shipmentObj["zone"] = splitString[4] || "general";
    return shipmentObj;
  });

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
