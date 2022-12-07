import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { UserModel } from "../models/User";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const Authorization =
      req.cookies["Authorization"] ||
      (req.header("Authorization")
        ? req?.header("Authorization")?.split("Bearer ")[1]
        : null);
    console.log(Authorization);
    if (Authorization) {
      const secretKey: string = "12345";
      const verificationResponse: any = await verify(Authorization, secretKey);
      const userId = verificationResponse?.id;
      console.log(Authorization);

      const users = UserModel;
      const findUser = await users.findOne({ where: { id: userId } });
      if (findUser) {
        res.setHeader("Set-Cookie", ["isAuthenticated=true"]);
        next();
      } else {
        res.setHeader("Set-Cookie", [
          "Authorization=; Max-age=0;",
          "isAuthenticated=false",
        ]);
        next(new Error("Wrong authentication token"));
      }
    } else {
      res.setHeader("Set-Cookie", [
        "Authorization=; Max-age=0;",
        "isAuthenticated=false",
      ]);
      next(new Error("Authentication token missing"));
    }
  } catch (error) {
    res.setHeader("Set-Cookie", [
      "Authorization=; Max-age=0;",
      "isAuthenticated=false",
    ]);
    next(new Error("Wrong authentication token"));
  }
};

export default authMiddleware;
