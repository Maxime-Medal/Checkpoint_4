const homeRouter = require('./home');
const resourcesRouter = require('./resources');

const setupRoutes = (app) => {
  app.use('/', resourcesRouter)
  app.use('/', homeRouter)
}



module.exports = { setupRoutes };