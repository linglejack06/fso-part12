const express = require("express");
const redis = require("../redis");

const statsRouter = express.Router();

statsRouter.get("/", async (req, res, next) => {
  const addedTodos = await redis.getAsync("added_todos");
  if (!addedTodos) {
    return res.json({
      addedTodos: 0,
    });
  }
  return res.json({
    addedTodos,
  });
});

module.exports = statsRouter;
