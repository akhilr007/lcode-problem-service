const NotImplementedError = require("../errors/notImplemented.error");

function pingCheckController(req, res) {
  return res.json({ message: "Problem controller is set up" });
}

function getProblem(req, res, next) {
  try {
    throw new NotImplementedError("getProblem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res, next) {
  try {
    throw new NotImplementedError("getProblems");
  } catch (error) {
    next(error);
  }
}

function addProblem(req, res, next) {
  try {
    throw new NotImplementedError("addProblem");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res, next) {
  try {
    throw new NotImplementedError("deleteProblem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res, next) {
  try {
    throw new NotImplementedError("updateProblem");
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
