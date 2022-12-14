import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { AppEnv } from "../src/config/env";
import IndexRoute from "./routes";
import ProductRoute from "./routes/product";
import AuthRoute from "./routes/auth";
import multer from "multer";
export const upload = multer({ dest: "uploads/" });

const { MONGODB_URL } = AppEnv;

class App {
  public app: express.Application;
  public PORT: number = 5000;

  constructor(routes: any) {
    this.app = express();
    this.app.use(express.json({ limit: "10mb" }));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(cookieParser());
    this.initDB();
    this.initRoutes(routes);
    this.listen();
  }

  private async initDB() {
    try {
      mongoose.set("strictQuery", true);
      mongoose.connect(MONGODB_URL).then(() => {
        console.log("DB Connected");
      });
    } catch (error) {
      mongoose.connection.on("error", (err) => {
        console.log(`DB Connection Error: ${err.message}`);
      });
    }
  }

  private async listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Running on port ${this.PORT}`);
    });
  }

  private async initRoutes(routes: any) {
    routes.forEach((route: any) => {
      this.app.use("/", route.router);
    });
  }
}

new App([new IndexRoute(), new ProductRoute(), new AuthRoute()]);
