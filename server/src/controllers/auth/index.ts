import { NextFunction, Request, Response } from "express";
import AuthService from "../../services/auth";

const authService = new AuthService();
class AuthController {
  public async register(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user: u } = req.body;
      const user = await authService.register(u);
      res.setHeader("Set-Cookie", `${user?.cookie}`);
      res.status(200).json({ user: user });
    } catch (error) {
      next(error);
    }
  }
  public async login(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { user: u } = req.body;
      const user = await authService.login(u);
      res.setHeader("Set-Cookie", `${user?.cookie}`);
      res.status(200).json({ user: user });
    } catch (error) {
      next(error);
    }
  }

  public async forgetPassword(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const user = await authService.forgetPassword(req.body);
      res.status(200).json({ user });
    } catch (error) {
      next(error);
    }
  }

  public async checked(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      res.status(200).json({ user: "ok" });
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;
