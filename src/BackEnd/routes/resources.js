const { PrismaClient } = require('@prisma/client');
const resourcesRouter = require('express').Router();


const { resources } = new PrismaClient();

resourcesRouter.get('/resources', async (req, res) => {
  await resources
    .findMany({
      include: {
        favorite: true,
        Category: true,
      }
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving resources from database ")
    })
})

module.exports = resourcesRouter;
