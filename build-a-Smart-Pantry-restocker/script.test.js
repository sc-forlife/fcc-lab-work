import { describe, it, expect } from "vitest";
import { parseShipment } from "./script";
import { planRestock } from "./script";

describe("parseShipment", () => {
  it("Return { sku, name, qty, expires, zone } from shipment strings", () => {
    const data = parseShipment(["A10|Tomatoes|5|2027-01-01|fridge"]);
    expect(data).toMatchObject([
      {
        sku: "A10",
        name: "Tomatoes",
        qty: 5,
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
});
