function pingCheckController(req, res) {
  return res.json({ message: "Problem controller is set up" });
}

function getProblem(req, res) {}

function getProblems(req, res) {}

function addProblem(req, res) {}

function deleteProblem(req, res) {}

function updateProblem(req, res) {}

module.exports = {
  getProblem,
  getProblems,
  addProblem,
  deleteProblem,
  updateProblem,
  pingCheckController,
};
