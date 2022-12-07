"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var product_exports = {};
__export(product_exports, {
  default: () => product_default
});
module.exports = __toCommonJS(product_exports);
var import_Product = require("../../models/Product");
class ProductService {
  constructor() {
    this.product = import_Product.ProductModel;
  }
  getProducts() {
    return this.product.find();
  }
  getProductById(id) {
    return this.product.find({ _id: id });
  }
  createProduct(data) {
    return this.product.create(data);
  }
  updateProduct(id, data) {
    return this.product.updateOne({ _id: id }, data);
  }
  deleteProduct(id) {
    return this.product.deleteOne({ _id: id });
  }
}
var product_default = ProductService;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
