const projectStatus = {
  PENDING: "Pending Execution",
  SUCCESS: "Executed Successfully",
  FAILURE: "Execution Failed",
};

class ProjectIdea {
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
    
    
    ```;
  }
}
