"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var product_exports = {};
__export(product_exports, {
  default: () => product_default
});
module.exports = __toCommonJS(product_exports);
var import_express = require("express");
var import_product = __toESM(require("../../controllers/product"));
class ProductRoute {
  constructor() {
    this.router = (0, import_express.Router)();
    this.productController = new import_product.default();
    this.path = "/product";
    this.initializeRoutes();
  }
  initializeRoutes() {
    this.router.get(this.path, this.productController.getProducts);
    this.router.get(`${this.path}/:id`, this.productController.getProductsById);
    this.router.post(this.path, this.productController.createProduct);
    this.router.patch(`${this.path}/:id`, this.productController.updateProduct);
    this.router.delete(
      `${this.path}/:id`,
      this.productController.deleteProduct
    );
  }
}
var product_default = ProductRoute;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
