const homeRouter = require('express').Router();



homeRouter.get('/home', async (req, res) => {
  await
    res.status(200).send("🎉 Welcome to My BackEnd !");
})

module.exports = homeRouter;
