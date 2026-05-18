import { describe, it, expect } from "vitest";
import { validateForm } from "./script";

describe("validateForm", () => {
  it("Return an object with element name and boolean Value", () => {
    const form = validateForm();
    expect(form).toMatchObject({ fullName: expect().any(Boolean) });
  });
});
