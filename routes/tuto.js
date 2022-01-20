const tutoRouter = require('express').Router();
const { db } = require('../conf');

tutoRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [tuto] = await db.query(
      'SELECT Tuto.video FROM Tuto  WHERE Tuto.id = ?',
      [id]
    );
    res.status(200).json(tuto);
  } catch (err) {
    res.status(400).send(err);
  }
});

tutoRouter.get('/:id/steps', async (req, res) => {
  try {
    const { id } = req.params;
    const [steps] = await db.query(
      'SELECT  Step.description, Step.numero FROM Tuto JOIN Step ON Tuto.id = Step.tutoId WHERE Tuto.id = ?',
      [id]
    );
    res.status(200).json(steps);
  } catch (err) {
    res.status(400).send(err);
  }
});
module.exports = tutoRouter;
