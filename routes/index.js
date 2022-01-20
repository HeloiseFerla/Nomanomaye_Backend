const userRouter = require('./user');
const itemRouter = require('./item');
const tutoRouter = require('./tuto');
// const articleRouter = require('./article');

const setupRoutes = (app) => {
  app.use('/users', userRouter);
  app.use('/items', itemRouter);
  app.use('/tutos', tutoRouter);
  // app.use('/article', articleRouter);
};

module.exports = {
  setupRoutes,
};
