const express = require('express');
const cors = require('cors');
const { setupRoutes } = require('./routes');
const { backPort } = require('./conf');

const app = express();

app.use(cors());

// recognize the incoming Request Object as a JSON Object
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'Welcome' });
});

setupRoutes(app);

app.listen(backPort, () => {
  console.log(`API root available at: http://localhost:${backPort}/`);
});
