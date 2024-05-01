const logger = require("../config/logger.config");
const NotFoundError = require("../errors/notFound.error");
const { Problem } = require("../models/index");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      logger.info(
        `ProblemRepository.createProblem : Problem created successfully: ${problem._id}`
      );
      return problem;
    } catch (error) {
      logger.error(
        `ProblemRepository.createProblem : Error while creating problem: ${error.message}`
      );
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      logger.info(
        `ProblemRepository.getAllProblems : Retrieved all problems: ${problems.length} found`
      );
      return problems;
    } catch (error) {
      logger.error(
        `ProblemRepository.getAllProblems : Error while retrieving all problems: ${error.message}`
      );
      throw error;
    }
  }

  async getProblem(problemId) {
    try {
      const problem = await Problem.findById(problemId);
      if (!problem) {
        throw new NotFoundError("problem", problemId);
      }
      logger.info(
        `ProblemRepository.getProblem : Retrieved problem with ID: ${problemId}`
      );
      return problem;
    } catch (error) {
      logger.error(
        `ProblemRepository.getProblem : Error while retrieving problem with ID ${problemId}: ${error.message}`
      );
      throw error;
    }
  }

  async deleteProblem(problemId) {
    try {
      const deletedProblem = await Problem.findByIdAndDelete(problemId);
      if (!deletedProblem) {
        throw new NotFoundError("problem", problemId);
      }
      logger.info(
        `ProblemRepository.deleteProblem : Deleted problem with ID: ${problemId}`
      );
      return deletedProblem;
    } catch (error) {
      logger.error(
        `ProblemRepository.deleteProblem : Error while deleting problem with ID ${problemId}: ${error.message}`
      );
      throw error;
    }
  }

  async updateProblem(problemId, data) {
    try {
      const updatedProblem = await Problem.findByIdAndUpdate(problemId, data, {
        new: true,
      });
      if (!updatedProblem) {
        throw new NotFoundError("problem", problemId);
      }
      logger.info(
        `ProblemRepository.updateProblem : Updated problem with ID: ${problemId}`
      );
      return updatedProblem;
    } catch (error) {
      logger.error(
        `ProblemRepository.updateProblem : Error while updating problem with ID ${problemId}: ${error.message}`
      );
      throw error;
    }
  }
}

module.exports = ProblemRepository;
