import mongoose, { Schema, Document, Model, model } from 'mongoose';

export interface IEntry extends Document {
  temperature: number;
  pressure: number;
  humidity: number;
  gas: number;
  altitude: number;
  loctationId: string;
  created: Date;
}

const entrySchema: Schema = new Schema({
  temperature: { type: Number },
  pressure: { type: Number },
  humidity: { type: Number },
  gas: { type: Number },
  altitude: { type: Number },
  locationId: { type: String },
  created: { type: Date, default: Date.now }
});

const Profile: Model<IEntry> = model('Entry', entrySchema);
export default Profile;
