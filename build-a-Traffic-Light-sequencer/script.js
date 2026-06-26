const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 },
  ],
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 },
  ],
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 },
  ],
};

const config4 = {
  fault: false,
  phases: [],
};

export function runSequence(config, cycle) {
  if (config?.phases.length <= 0) {
    console.log("No phases found");
    return;
  } else if (config?.fault === true) {
    console.log("Faulted phase!");
    return;
  }

  for (let i = 0; i < cycle; i++) {
    for (const phase of config.phases) {
      if (phase?.duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }
}

export function generateTimeline() {
  return [];
}
