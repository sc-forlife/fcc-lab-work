import { describe, it, expect } from "vitest";
import { ProjectIdea } from "./script.js";
import { projectStatus } from "./script.js";
import { ProjectIdeaBoard } from "./script.js";

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

  it("call formatToString method when class instance is empty", () => {
    const newInstance = new ProjectIdeaBoard("Empty Board");
    expect(newInstance.formatToString()).toEqual("Empty Board has 0 idea(s)\n");
  });

  it("call formatToString in occupied PorjectIdeaBoard", () => {
    const newInstance = new ProjectIdea(
      "Smart Home System",
      "An integrated system to control lighting, temperature, and security devices remotely.",
    );
    const newInstanceBoard = new ProjectIdeaBoard("Tech Projects Board");
    newInstanceBoard.pin(newInstance);
    expect(newInstanceBoard.formatToString()).toEqual(
      "Tech Projects Board has 1 idea(s)\nSmart Home System (Pending Execution) - An integrated system to control lighting, temperature, and security devices remotely.\n",
    );
  });
});
