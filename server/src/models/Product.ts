import { Schema, model } from "mongoose";

interface IProduct {
  name: string;
  avatar: string;
  description: string;
  power: string;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  avatar: { type: String, required: true },
  description: { type: String, required: true },
  power: { type: String, required: true },
});

export const ProductModel = model<IProduct>("Product", productSchema);
