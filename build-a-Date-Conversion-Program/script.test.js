import { describe, it, expect } from "vitest";
import { formatDateMMDDYYYY } from "./script";
import { formatDateLong } from "./script";

describe("formatDateMMDDYYY", () => {
  it("Get the date in the format (MM/DD/YYYY)", () => {
    const date = new Date();
    const dateFormat = formatDateMMDDYYYY(date);
    expect(dateFormat).toBe(
      `Formatted Date (MM/DD/YYYY): ${date.getMonth() + 1}/${date.getDay()}/${date.getFullYear()}`,
    );
  });
  it("Get the date in the format (Month Day, Year): September 27, 2024", () => {
    const date = new Date();
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const dateFormat = formatDateLong(date);
    expect(dateFormat).toBe(
      `Formatted Date (Month Day, Year): ${date.toLocaleDateString("en-US", options)}`,
    );
  });
});
