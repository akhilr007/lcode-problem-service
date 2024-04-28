const { ProblemRepository } = require("../repositories/index");
const sanitizeMarkdownContent = require("../utils/markdownSanitizer.util");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      // 1. sanitize the markdown for description
      problemData.description = sanitizeMarkdownContent(
        problemData.description
      );

      const problem = await this.problemRepository.createProblem(problemData);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await this.problemRepository.getAllProblems();
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(problemId) {
    try {
      const problem = await this.problemRepository.getProblem(problemId);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(problemId) {
    try {
      const deletedProblem = await this.problemRepository.deleteProblem(
        problemId
      );
      return deletedProblem;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProblemService;
