import { config } from "dotenv";

config({path:".env"});

export class AppEnv {
    static MONGODB_URL: string = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/dum2";
}