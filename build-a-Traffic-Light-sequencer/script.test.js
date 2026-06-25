import { describe, it, expect, vi } from "vitest";
import { runSequence } from "./script";

describe("runSequence", () => {
  it("Return no phases found if config.phases is empty", () => {
    const logSpy = vi.spyOn(console, "log");
    const data = runSequence({
      fault: false,
      phases: [],
    });
    expect(logSpy).toHaveBeenCalledWith("No phases found");
    expect(data).toBe(undefined);
  });
  it("log Faulted phase if config.fault is true", () => {
    const logSpy = vi.spyOn(console, "log");
    runSequence({
      fault: true,
      phases: [
        { color: "red", duration: 3 },
        { color: "yellow", duration: -2 },
        { color: "green", duration: 6 },
      ],
    });
    expect(logSpy).toHaveBeenCalledWith("Faulted phase!");
  });
  it("Log Invalid phase detected if duration <= 0", () => {
    const logSpy = vi.spyOn(console, "log");
    runSequence(
      {
        fault: false,
        phases: [
          { color: "red", duration: 3 },
          { color: "yellow", duration: -2 },
          { color: "green", duration: 6 },
        ],
      },
      1,
    );
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy).toHaveBeenNthCalledWith(1, "Switching to red for 3 s");
    expect(logSpy).toHaveBeenNthCalledWith(2, "Invalid phase detected");
    expect(logSpy).toHaveBeenNthCalledWith(3, "Switching to green for 6 s");
  });
  it("Log Switching to color for durration s , for complete object", () => {
    const logSpy = vi.spyOn(console, "log");
    runSequence(
      {
        fault: false,
        phases: [
          { color: "red", duration: 3 },
          { color: "yellow", duration: 4 },
          { color: "green", duration: 6 },
        ],
      },
      2,
    );
    expect(logSpy).toHaveBeenCalledTimes(6);
    expect(logSpy).toHaveBeenNthCalledWith(1, "Switching to red for 3 s");
    expect(logSpy).toHaveBeenNthCalledWith(2, "Switching to yellow for 4 s");
    expect(logSpy).toHaveBeenNthCalledWith(3, "Switching to green for 6 s");
    expect(logSpy).toHaveBeenNthCalledWith(4, "Switching to red for 3 s");
    expect(logSpy).toHaveBeenNthCalledWith(5, "Switching to yellow for 4 s");
    expect(logSpy).toHaveBeenNthCalledWith(6, "Switching to green for 6 s");
  });
});
