const { log } = require("winston");
const { ProblemRepository } = require("../repositories/index");
const sanitizeMarkdownContent = require("../utils/markdownSanitizer.util");
const logger = require("../config/logger.config");

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

      logger.info(
        `ProblemService.createProblem : Problem created successfully ${problem._id}`
      );

      return problem;
    } catch (error) {
      log.error(
        `ProblemService.createProblem : Error while creating problem : ${error.message}`
      );
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await this.problemRepository.getAllProblems();

      logger.info(
        `ProblemService.getAllProblems : Retrieved all problems: ${problems.length} found`
      );

      return problems;
    } catch (error) {
      log.error(
        `ProblemService.getAllProblems : Error while retrieving all problem : ${error.message}`
      );
      throw error;
    }
  }

  async getProblem(problemId) {
    try {
      const problem = await this.problemRepository.getProblem(problemId);

      logger.info(
        `ProblemService.getProblem : Retrieved problem with ID: ${problemId}`
      );
      return problem;
    } catch (error) {
      log.error(
        `ProblemService.getProblem : Error while retrieving a problem : ${error.message}`
      );
      throw error;
    }
  }

  async deleteProblem(problemId) {
    try {
      const deletedProblem = await this.problemRepository.deleteProblem(
        problemId
      );

      logger.info(
        `ProblemService.deleteProblem : Deleted problem with ID: ${problemId}`
      );

      return deletedProblem;
    } catch (error) {
      log.error(
        `ProblemService.deleteProblem : Error while deleting a problem : ${error.message}`
      );
      throw error;
    }
  }

  async updateProblem(problemId, data) {
    try {
      if (data?.description) {
        data.description = sanitizeMarkdownContent(data.description);
      }

      const updatedProblem = await this.problemRepository.updateProblem(
        problemId,
        data
      );

      logger.info(
        `ProblemService.updateProblem : Updated problem with ID: ${problemId}`
      );

      return updatedProblem;
    } catch (error) {
      log.error(
        `ProblemService.updateProblem : Error while updating a problem : ${error.message}`
      );
      throw error;
    }
  }
}

module.exports = ProblemService;
