import { Request, Response, Router } from "express";
import AuthController from "../../controllers/auth";
import authMiddleware from "../../middleware/auth";

interface Routes {
  path: string;
  router: Router;
}

class AuthRoute implements Routes {
  public path: string;
  public router = Router();
  public AuthController = new AuthController();

  constructor() {
    this.path = "/auth";
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/register`, this.AuthController.register);
    this.router.post(`${this.path}/login`, this.AuthController.login);
    this.router.post(
      `${this.path}/checked`,
      authMiddleware,
      this.AuthController.checked
    );
    this.router.post(`${this.path}/forgetPassword`, this.AuthController.forgetPassword);
  }
}

export default AuthRoute;
