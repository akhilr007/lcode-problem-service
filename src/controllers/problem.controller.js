const NotImplementedError = require("../errors/notImplemented.error");

function pingCheckController(req, res) {
  return res.json({ message: "Problem controller is set up" });
}

function getProblem(req, res) {
  throw new NotImplementedError("getProblem");
}

function getProblems(req, res) {
  throw new NotImplementedError("getProblems");
}

function addProblem(req, res) {
  throw new NotImplementedError("addProblem");
}

function deleteProblem(req, res) {
  throw new NotImplementedError("deleteProblem");
}

function updateProblem(req, res) {
  throw new NotImplementedError("updateProblem");
}

module.exports = {
  getProblem,
  getProblems,
  addProblem,
  deleteProblem,
  updateProblem,
  pingCheckController,
};
