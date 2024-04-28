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
      return problem;
    } catch (error) {
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      throw error;
    }
  }

  async getProblem(problemId) {
    try {
      const problem = await Problem.findById(problemId);
      if (!problem) {
        throw new NotFoundError("problem", problemId);
      }
      return problem;
    } catch (error) {
      throw error;
    }
  }

  async deleteProblem(problemId) {
    try {
      const deletedProblem = await Problem.findByIdAndDelete(problemId);
      if (!deletedProblem) {
        throw new NotFoundError("problem", problemId);
      }
      return deletedProblem;
    } catch (error) {
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
      return updatedProblem;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProblemRepository;
