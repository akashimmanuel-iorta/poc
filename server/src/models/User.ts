import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  hash: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  hash: { type: String, required: true },
});

export const User = model<IUser>("User", userSchema);
