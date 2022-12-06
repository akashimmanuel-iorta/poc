"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var import_express = __toESM(require("express"));
var import_mongoose = __toESM(require("mongoose"));
var import_env = require("../src/config/env");
var import_routes = __toESM(require("./routes"));
var import_product = __toESM(require("./routes/product"));
const { MONGODB_URL } = import_env.AppEnv;
class App {
  constructor(routes) {
    this.PORT = 5e3;
    this.app = (0, import_express.default)();
    this.app.use(import_express.default.json());
    this.app.use(import_express.default.urlencoded({ extended: true }));
    this.initDB();
    this.initRoutes(routes);
    this.listen();
  }
  initDB() {
    return __async(this, null, function* () {
      try {
        import_mongoose.default.set("strictQuery", true);
        import_mongoose.default.connect(MONGODB_URL).then(() => {
          console.log("DB Connected");
        });
      } catch (error) {
        import_mongoose.default.connection.on("error", (err) => {
          console.log(`DB Connection Error: ${err.message}`);
        });
      }
    });
  }
  listen() {
    return __async(this, null, function* () {
      this.app.listen(this.PORT, () => {
        console.log(`Running on port ${this.PORT}`);
      });
    });
  }
  initRoutes(routes) {
    return __async(this, null, function* () {
      routes.forEach((route) => {
        this.app.use("/", route.router);
      });
    });
  }
}
new App([new import_routes.default(), new import_product.default()]);
