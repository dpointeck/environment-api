import mongoose, { Schema, Document, Model, model } from 'mongoose';

export interface IEntry extends Document {
  temperature: number;
  humidity: number;
  gas: number;
  elevation: number;
  created: Date;
}

const entrySchema: Schema = new Schema({
  temperature: { type: Number },
  humidity: { type: Number },
  gas: { type: Number },
  created: { type: Date, default: Date.now }
});

const Profile: Model<IEntry> = model('Entry', entrySchema);
export default Profile;
