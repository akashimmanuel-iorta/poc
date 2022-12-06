import { Request, Response } from "express";

class IndexController {
  public index = (req: Request, res: Response) => {
    try {
        res.status(200).send("Server Running Successfully")
    } catch (error) {
        res.status(500).send("Server Failed to run the server")
    }
  };
}

export default IndexController;
