const { StatusCodes } = require("http-status-codes");

function pingCheckController(req, res) {
  return res.json({ message: "Problem controller is set up" });
}

function getProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not Implemented" });
}

function getProblems(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not Implemented" });
}

function addProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not Implemented" });
}

function deleteProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not Implemented" });
}

function updateProblem(req, res) {
  return res
    .status(StatusCodes.NOT_IMPLEMENTED)
    .json({ message: "Not Implemented" });
}

module.exports = {
  getProblem,
  getProblems,
  addProblem,
  deleteProblem,
  updateProblem,
  pingCheckController,
};
