const NotImplementedError = require("../errors/notImplemented.error");

function pingCheckController(req, res) {
  return res.json({ message: "Problem controller is set up" });
}

function getProblem(req, res) {
  try {
    throw new NotImplementedError("getProblem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res) {
  try {
    throw new NotImplementedError("getProblems");
  } catch (error) {
    next(error);
  }
}

function addProblem(req, res) {
  try {
    throw new NotImplementedError("addProblem");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res) {
  try {
    throw new NotImplementedError("deleteProblem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res) {
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
