import { IUser } from '../interfaces/IUser';
import mongoose from 'mongoose';

const Userconf = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true,
      index: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<IUser & mongoose.Document>('userconf', Userconf);
