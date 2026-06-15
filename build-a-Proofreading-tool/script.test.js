import { describe, it, expect } from "vitest";
import { isPalindrome } from "./script";

describe("isPalindrome", () => {
  it("Return true if Palindrome and false if not , case-insensitive", () => {
    expect(isPalindrome("LeVEL")).toBeTruthy();
    expect(isPalindrome("racecar")).toBeTruthy();
    expect(isPalindrome("hello")).toBeFalsy();
    expect(isPalindrome("Salem")).toBeFalsy();
    expect(isPalindrome("madam")).toBeTruthy();
    expect(isPalindrome("noon")).toBeTruthy();
    expect(isPalindrome("civic")).toBeTruthy();
  });
});
