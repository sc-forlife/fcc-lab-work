export const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" },
};

export class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

export class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(classProjectIdeaInstance) {
    this.ideas.push(classProjectIdeaInstance);
  }

  unpin(classProjectIdeaInstance) {
    this.ideas = this.ideas.filter((idea) => idea !== classProjectIdeaInstance);
  }

  count() {
    return this.ideas.length;
  }
  formatToString() {
    if (!this.ideas.length) {
      return `Empty Board has 0 idea(s)\n`;
    }

    return `${this.title} has ${this.count()} idea(s)\n${this.ideas.map(
      (projectIdea) => {
        return `${projectIdea.title} (${projectIdea.status.description}) - ${projectIdea.description}\n`;
      },
    )}`;
  }
}
