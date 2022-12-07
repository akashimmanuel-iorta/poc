import { UserModel } from "./../../models/User";
import { compare, hash, hashSync } from "bcrypt";
import { sign } from "jsonwebtoken";

class AuthService {
  public userModel = UserModel;
  constructor() {}
  public async register(userData: any) {
    try {
      const isUserExists = await this.userModel.find({ email: userData.email });

      if (isUserExists.length === 0) {
        const hashedPassword = await hash(userData?.password ?? "123456", 10);
        const user = await this.userModel.create({
          ...userData,
          hash: hashedPassword,
        });

        const tokenData = this.createToken(user);
        const cookie = this.createCookie(tokenData);

        return { user, cookie };
      }
      throw new Error("User already exists");
    } catch (error) {
      throw error;
    }
  }

  public async login(userData: any) {
    const { email, hash } = userData;

    const findUser = await this.userModel.findOne({
      where: { email },
    });

    if (!findUser) throw new Error(`This email ${email} was not found`);

    const isPasswordMatching: boolean = await compare(hash, findUser?.hash);
    if (!isPasswordMatching) throw new Error("Password is not matching");

    const tokenData = this.createToken(findUser);
    const cookie = this.createCookie(tokenData);

    return { cookie, findUser };
  }

  public async forgetPassword(userData: any) {
    const { email, oldHash, newHash } = userData;

    const findUser = await this.userModel.findOne({
      where: { email },
    });

    if (!findUser) throw new Error(`This email ${email} was not found`);

    const isPasswordMatching: boolean = await compare(oldHash, findUser?.hash);
    if (!isPasswordMatching) throw new Error("Password is not matching");

    const hashedPassword = await hash(newHash ?? "123456", 10);

    const user = await this.userModel.findOneAndUpdate(
      {
        email: userData.email,
      },
      { hash: hashedPassword }
    );

    console.log(user);

    return user;
  }

  public createToken(user: any): any {
    const dataStoredInToken = { id: user.id };
    const secretKey = "12345";
    const expiresIn: number = 60 * 60;
    const isAuthenticated = true;

    return {
      expiresIn,
      token: sign(dataStoredInToken, secretKey, { expiresIn }),
      isAuthenticated,
    };
  }

  public createCookie(tokenData: any): string[] {
    return [
      `Authorization=${tokenData.token}; Max-Age=${tokenData.expiresIn}; Path=/; Secure=false; SameSite=None;`,
      `isAuthenticated=${tokenData.isAuthenticated}; Path=/; Secure=false; SameSite=None;`,
    ];
  }
}

export default AuthService;
