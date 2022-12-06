import { Schema, model } from "mongoose";

interface IProduct {
  name: string;
  amount: number;
  avatar: string;
  type: string;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
  avatar: { type: String, required: true },
  type: { type: String, required: true },
});

export const ProductModel = model<IProduct>("Product", productSchema);
