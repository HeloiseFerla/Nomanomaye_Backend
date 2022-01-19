const userRouter = require('./user');

const setupRoutes = (app) => {
  app.use('/user', userRouter);
};

module.exports = {
  setupRoutes,
};
