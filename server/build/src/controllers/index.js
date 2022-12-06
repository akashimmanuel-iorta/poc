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
var controllers_exports = {};
__export(controllers_exports, {
  default: () => controllers_default
});
module.exports = __toCommonJS(controllers_exports);
class IndexController {
  constructor() {
    this.index = (req, res) => {
      try {
        res.status(200).send("Server Running Successfully");
      } catch (error) {
        res.status(500).send("Server Failed to run the server");
      }
    };
  }
}
var controllers_default = IndexController;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
