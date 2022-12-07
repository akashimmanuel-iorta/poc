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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var product_exports = {};
__export(product_exports, {
  default: () => product_default
});
module.exports = __toCommonJS(product_exports);
var import_product = __toESM(require("../../services/product"));
class ProductController {
  constructor() {
    this.Product = new import_product.default();
    this.createProduct = (req, res) => __async(this, null, function* () {
      try {
        const product = yield this.Product.createProduct(req.body);
        res.status(200).send(product);
      } catch (error) {
        res.status(500).send("Failed to create product");
      }
    });
    this.getProducts = (req, res) => __async(this, null, function* () {
      try {
        const product = yield this.Product.getProducts();
        res.status(200).send(product);
      } catch (error) {
        res.status(500).send("Failed to get product");
      }
    });
    this.getProductsById = (req, res) => __async(this, null, function* () {
      try {
        const { id } = req.params;
        const product = yield this.Product.getProductById(id);
        res.status(200).send(product);
      } catch (error) {
        res.status(500).send("Failed to get product");
      }
    });
    this.deleteProduct = (req, res) => __async(this, null, function* () {
      try {
        const { id } = req.params;
        const product = yield this.Product.deleteProduct(id);
        res.status(200).send(product);
      } catch (error) {
        res.status(500).send("Failed to delete product");
      }
    });
    this.updateProduct = (req, res) => __async(this, null, function* () {
      try {
        const { id } = req.params;
        const product = yield this.Product.updateProduct(id, req.body);
        res.status(200).send(product);
      } catch (error) {
        res.status(500).send("Failed to update product");
      }
    });
  }
}
var product_default = ProductController;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
