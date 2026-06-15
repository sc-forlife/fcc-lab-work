import { describe, it, expect } from "vitest";
import { parseShipment } from "./script";
import { planRestock } from "./script";
import { groupByZone } from "./script";
import { clonePantry } from "./script";

describe("parseShipment", () => {
  it("Return { sku, name, qty, expires, zone } from shipment strings", () => {
    const data = parseShipment([
      "A10|Tomatoes|5|2027-01-01|fridge",
      "A15|Onions|3|2027-01-01|fridge",
      "A15|Onions|1|2027-01-01|fridge",
    ]);
    expect(data).toMatchObject([
      {
        sku: "A10",
        name: "Tomatoes",
        qty: 5,
        expires: "2027-01-01",
        zone: "fridge",
      },
      {
        sku: "A15",
        name: "Onions",
        qty: 3,
        expires: "2027-01-01",
        zone: "fridge",
      },
    ]);
  });

  it("Return { sku, name, qty, expires,'general'} from shipment strings", () => {
    const data = parseShipment(["A10|Tomatoes|5|2027-01-01"]);
    expect(data).toMatchObject([
      {
        sku: "A10",
        name: "Tomatoes",
        qty: 5,
        expires: "2027-01-01",
        zone: "general",
      },
    ]);
  });
});

describe("planRestock", () => {
  it("shipment has qty 0 or less", () => {
    const data = planRestock(
      [
        {
          sku: "C32",
          name: "Eggs",
          qty: 0,
          expires: "2027-01-01",
          zone: "pantry",
        },
      ],
      [
        {
          sku: "C32",
          name: "Eggs",
          qty: 0,
          expires: "2027-01-01",
          zone: "pantry",
        },
      ],
    );
    expect(data).toMatchObject([
      {
        type: "discard",
        item: {
          sku: "C32",
          name: "Eggs",
          qty: 0,
          expires: "2027-01-01",
          zone: "pantry",
        },
      },
    ]);
  });
  it("Pantry has duplicate sku from ship", () => {
    const data = planRestock(
      [
        {
          sku: "C32",
          name: "Eggs",
          qty: 0,
          expires: "2027-01-01",
          zone: "pantry",
        },
      ],
      [
        {
          sku: "C32",
          name: "Potatoes",
          qty: 5,
          expires: "2027-04-02",
          zone: "pantry",
        },
      ],
    );
    expect(data).toMatchObject([
      {
        type: "restock",
        item: {
          sku: "C32",
          name: "Potatoes",
          qty: 5,
          expires: "2027-04-02",
          zone: "pantry",
        },
      },
    ]);
  });
  it("Shipment sku does not exist in pantry", () => {
    const data = planRestock(
      [
        {
          sku: "C32",
          name: "Eggs",
          qty: "3",
          expires: "2027-01-01",
          zone: "pantry",
        },
      ],
      [
        {
          sku: "B45",
          name: "Lettuce",
          qty: 5,
          expires: "2027-06-09",
          zone: "pantry",
        },
      ],
    );
    expect(data).toMatchObject([
      {
        type: "donate",
        item: {
          sku: "B45",
          name: "Lettuce",
          qty: 5,
          expires: "2027-06-09",
          zone: "pantry",
        },
      },
    ]);
  });

  describe("groupByZone", () => {
    it("Returns action grouped", () => {
      const data = groupByZone([
        { type: "One", item: { zone: "One" } },
        { type: "One", item: { zone: "One" } },
        { type: "One", item: { zone: "Two" } },
        { type: "One", item: { zone: "general" } },
      ]);

      expect(data).toMatchObject({
        One: [
          { type: "One", item: { zone: "One" } },
          { type: "One", item: { zone: "One" } },
        ],
        Two: [{ type: "One", item: { zone: "Two" } }],
        general: [{ type: "One", item: { zone: "general" } }],
      });
    });
  });

  describe("clonePantry", () => {
    it("Returns deep copy", () => {
      const data = clonePantry([{ item: "Items" }]);

      expect(data).toMatchObject([{ item: "Items" }]);
    });
  });
});
