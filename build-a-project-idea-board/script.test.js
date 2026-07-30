import { describe, it, expect } from "vitest";
import { ProjectIdea } from "./script.js";
import { projectStatus } from "./script.js";

describe("Project", () => {
  it("Create instance and return correct structure", () => {
    const newInstance = new ProjectIdea(
      "Smart Window Locks",
      "An automation project allowing users to lock, unlock windows automatically based on weather conditions.",
    );

    expect(newInstance).toEqual({
      title: "Smart Window Locks",
      description:
        "An automation project allowing users to lock, unlock windows automatically based on weather conditions.",
      status: { description: "Pending Execution" },
    });
  });
  it("Update status with method \'updateProjectStatus\'", () => {
    const newInstance = new ProjectIdea(
      "Fitness Tracker App",
      "An app that tracks user workouts, diet, and sleep patterns.",
    );

    newInstance.updateProjectStatus(projectStatus.SUCCESS);

    expect(newInstance.status).toEqual({
      description: "Executed Successfully",
    });
  });
});
