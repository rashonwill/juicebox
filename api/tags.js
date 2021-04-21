const express = require('express');
const tagsRouter = express.Router();

tagsRouter.use((req, res, next) => {
  console.log("A request is being made to /tags");

  next();
});

tagsRouter.get('/', (req, res) => {
  res.send({
    tags: []
  });
});


const { getAllTags } = require('../db');

tagsRouter.get('/', async (req, res) => {
  const tags = await getAllTags();

  res.send({
    tags
  });
});








module.exports = tagsRouter;