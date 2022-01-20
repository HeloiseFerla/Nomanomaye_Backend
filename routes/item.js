const itemRouter = require('express').Router();
const { db } = require('../conf');

itemRouter.get('/', async (req, res) => {
  try {
    const sql = 'SELECT * FROM Item ';
    const [items] = await db.query(sql);
    res.status(200).json(items);
  } catch (err) {
    res.status(400).send(err);
  }
});

itemRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [item] = await db.query('SELECT * FROM Item where id = ?', [id]);
    res.status(200).json(item);
  } catch (err) {
    res.status(400).send(err);
  }
});

itemRouter.get('/:id/articles', async (req, res) => {
  try {
    const { id } = req.params;
    const [articles] = await db.query(
      'SELECT Article.name, Article.price, Article.link FROM Articles JOIN Article ON Articles.articleId = Article.id WHERE Articles.itemId = ?',
      [id]
    );
    res.status(200).json(articles);
  } catch (err) {
    res.status(400).send(err);
  }
});

itemRouter.get('/:id/pictures', async (req, res) => {
  try {
    const { id } = req.params;
    const [pictures] = await db.query(
      ' SELECT * FROM Picture WHERE itemId = ?',
      [id]
    );
    res.status(200).json(pictures);
  } catch (err) {
    res.status(400).send(err);
  }
});

itemRouter.get('/:id/tips', async (req, res) => {
  try {
    const { id } = req.params;
    const [tips] = await db.query(' SELECT * FROM Tip WHERE itemId = ?', [id]);
    res.status(200).json(tips);
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = itemRouter;
