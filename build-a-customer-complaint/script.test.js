import { validateForm } from "./script";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("validateForm", () => {
  it("Return Objects True of False of checked Elements", () => {
    const form = validateForm();
    expect(form).toMatchObject({ fullName: expect.any(Boolean) });
  });
});
