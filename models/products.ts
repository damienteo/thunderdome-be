import mongoose from "mongoose";

import { IProduct } from "../interfaces/product";

interface ProductDoc extends mongoose.Document<IProduct> {}

interface ProductModelInterface extends mongoose.Model<ProductDoc> {
  build(attr: IProduct): ProductDoc;
}

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    tokenId: {
      type: Number,
    },
    owner: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

productSchema.statics.build = (attr: IProduct) => new Product(attr);

const Product = mongoose.model<any, ProductModelInterface>(
  "Product",
  productSchema
);

export { Product };
