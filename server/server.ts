import express, { Request, Response } from 'express';
import HttpStatusCodes from 'http-status-codes';

import connectDB from '../config/database';
import Entry, { IEntry } from './models/Entry';

const app: express.Application = express();

// Connect to MongoDB
connectDB();

app.post('/api/v1/entries', async (req: Request, res: Response) => {
  try {
    let entry: IEntry = new Entry({
      temperature: 23,
      humidity: 33,
      elevation: 335,
      gas: 145,
      created: new Date()
    });

    await entry.save();

    res.json(entry);
  } catch (err) {
    console.error(err.message);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send('Server Error');
  }
});

app.listen(3000, function () {
  console.log('App is running on port 3000');
});
