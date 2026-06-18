import { describe, it, expect } from "vitest";
import { isPalindrome } from "./script";
import { findPalindromeBreaks } from "./script";
import { findRepeatedPhrases } from "./script";

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

describe("findPalindromeBreaks", () => {
  it("return array of indices from palindromes", () => {
    const palindromeList = findPalindromeBreaks([
      "level",
      "salem",
      "racecar",
      "hello",
    ]);
    expect(palindromeList).toMatchObject([1, 3]);
  });
  it("Return empty arrays if input empty", () => {
    const palindromeListEmpty = findPalindromeBreaks([]);
    expect(palindromeListEmpty).toMatchObject([]);
  });
});

describe("findRepeatedPhrases", () => {
  it("Return array of start of indices of repeating phrases", () => {
    const indices = findRepeatedPhrases(
      ["the", "cat", "sat", "the", "cat", "ran"],
      2,
    );
    expect(indices).toMatchObject([0, 3]);

    const words = findRepeatedPhrases(["a", "b", "a", "b", "a", "b"], 2);
    expect(words).toMatchObject([0, 1, 2, 3, 4]);
  });
  it("No repeated phrases", () => {
    const words = findRepeatedPhrases(["red", "blue", "green", "yellow"], 2);
    expect(words).toMatchObject([]);
  });
  it("Overlapping phrases", () => {
    const words = findRepeatedPhrases(["a", "a", "a", "a"], 2);
    expect(words).toMatchObject([0, 1, 2]);
  });
  it("Phrase length greater or equal to words length return []", () => {
    const words = findRepeatedPhrases(["one", "two", "three"], 3);
    expect(words).toMatchObject([]);
  });
});
