import express from 'express';

const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello Environment API');
});

app.listen(3000, function () {
  console.log('App is running on port 3000');
});
