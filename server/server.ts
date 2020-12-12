import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import HttpStatusCodes from 'http-status-codes';

import connectDB from '../config/database';
import Entry, { IEntry } from './models/Entry';

const app: express.Application = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// Connect to MongoDB
connectDB();

app.post('/api/v1/entries', async (req: Request, res: Response) => {
  try {
    const entry: IEntry = await Entry.create(req.body);
    entry.save();
    res.json(entry);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send('Server Error');
  }
});

app.listen(3000, function () {
  console.log('App is running on port 3000');
});
