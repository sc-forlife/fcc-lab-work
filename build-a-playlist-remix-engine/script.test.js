import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { dedupeTracks } from "./script";

describe("", () => {
  it("Does the function remove duplicate ", () => {
    const playlist = dedupeTracks([
      { trackId: "trk101" },
      { trackId: "trk101" },
      { trackId: "trk102" },
    ]);

    expect(playlist).toEqual([{ trackId: "trk101" }, { trackId: "trk102" }]);
  });
  it("Does the function remove multiple duplicates ", () => {
    const playlist = dedupeTracks([
      { trackId: "trk101" },
      { trackId: "trk101" },
      { trackId: "trk101" },
      { trackId: "trk102" },
    ]);

    expect(playlist).toEqual([{ trackId: "trk101" }, { trackId: "trk102" }]);
  });
});
