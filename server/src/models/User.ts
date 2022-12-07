import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  hash: string;
  role: string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  hash: { type: String, required: true },
  role: { type: String, required: true },
});

export const UserModel = model<IUser>("User", userSchema);
