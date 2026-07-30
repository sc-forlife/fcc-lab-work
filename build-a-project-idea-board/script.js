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

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(classProjectIdeaInstance) {
    this.idea.push(classProjectIdeaInstance);
  }

  unpin(classProjectIdeaInstance) {
    this.idea = this.idea.filter((idea) => idea !== classProjectIdeaInstance);
  }

  count() {
    return this.idea.length;
  }
  formatToString() {
    return ```
    ${this.title} has ${this.count()} idea(s)
    ${this.items.map((projectIdea) => {
      return `${projectIdea.title} (${projectIdea.status}) - ${projectIdea.description}`;
    })}
    ```;
  }
}
