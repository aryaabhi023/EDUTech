import { SolvedProblem } from "../models/solvedProblem.model.js";

export const addSolvedProblem = async (req, res) => {
  try {
    const { problemId } = req.body;
    const { id } = req.user;
    if (!problemId || !id) {
      return res.status(400).json("Please provide problemId and userId");
    }
    const solvedProblem = new SolvedProblem({
      problemId,
      userId: id,
    });
    await solvedProblem.save();
    res.status(201).json({
      message: "Problem added to list of soved problems successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
