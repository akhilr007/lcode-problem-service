const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/notImplemented.error");
const { ProblemRepository } = require("../repositories");
const { ProblemService } = require("../services");

const problemService = new ProblemService(new ProblemRepository());

function pingCheckController(req, res) {
  return res.json({ message: "Problem controller is set up" });
}

async function getProblem(req, res, next) {
  try {
    const response = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully retrieved problem",
      data: response,
      error: {},
    });
  } catch (error) {
    next(error);
  }
}

async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully retrieved all the problems",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully create a new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteProblem(req, res, next) {
  try {
    const response = await problemService.deleteProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully deleted a problem",
      data: response,
      error: {},
    });
  } catch (error) {
    next(error);
  }
}

async function updateProblem(req, res, next) {
  try {
    const response = await problemService.updateProblem(
      req.params.id,
      req.body
    );
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully updated a problem",
      data: response,
      error: {},
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProblem,
  getProblems,
  addProblem,
  deleteProblem,
  updateProblem,
  pingCheckController,
};
