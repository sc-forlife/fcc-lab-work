import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { dedupeTracks } from "./script";
import { enforceArtistQuota } from "./script";
import { buildSchedule } from "./script";
import { flattenPlaylists } from "./script";

describe("dedupeTracks function", () => {
  it("Does the function remove duplicate ", () => {
    const playlist = dedupeTracks([
      { trackId: "trk101", mark: "Here" },
      { trackId: "trk101" },
      { trackId: "trk102" },
    ]);

    expect(playlist).toEqual([
      { trackId: "trk101", mark: "Here" },
      { trackId: "trk102" },
    ]);
  });
  it("Does the function remove multiple duplicates ", () => {
    const playlist = dedupeTracks([
      { trackId: "trk101", mark: "Here" },
      { trackId: "trk101" },
      { trackId: "trk101" },
      { trackId: "trk102" },
    ]);

    expect(playlist).toEqual([
      { trackId: "trk101", mark: "Here" },
      { trackId: "trk102" },
    ]);
  });
});

describe("enforceArtistQuota", () => {
  it("Returned playlist match artist limit", () => {
    const playlist = enforceArtistQuota(
      [
        { artist: "Salem Chirau", mark: "Here" },
        { artist: "Salem Chirau", mark: "Here" },
        { artist: "Salem Chirau" },
        { artist: "Talent Chirau" },
      ],
      2,
    );

    expect(playlist).toEqual([
      { artist: "Salem Chirau", mark: "Here" },
      { artist: "Salem Chirau", mark: "Here" },
      { artist: "Talent Chirau" },
    ]);
  });
  it("Returned empty playlist with 0 artist limit", () => {
    const playlist = enforceArtistQuota(
      [{ artist: "Salem Chirau", mark: "Here" }, { artist: "Talent Chirau" }],
      0,
    );

    expect(playlist).toEqual([]);
  });
});

describe("buildSchedule", () => {
  it("Return a object with slot , trackId with corresponding value", () => {
    const playlist = buildSchedule(
      [{ trackId: "trk100" }, { trackId: "trk101" }, { trackId: "trk102" }],
      2,
    );

    expect(playlist).toEqual([
      { slot: 1, trackId: "trk100" },
      { slot: 2, trackId: "trk101" },
      { slot: 3, trackId: "trk102" },
    ]);
  });
});

describe("flattenPlaylists", () => {
  it("Return empty array when playlist is not array", () => {
    const playlist = flattenPlaylists({ name: "Salem" });

    expect(playlist).toEqual([]);
  });
});
