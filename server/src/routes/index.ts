import { Router } from "express";
import IndexController from "../controllers";

interface Routes {
  path: string;
  router: Router;
}

class IndexRoute implements Routes {
  public path: string;
  public router = Router();
  public indexController = new IndexController();
  constructor() {
    this.path = "/";
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(this.path, this.indexController.index);
  }
}

export default IndexRoute;
