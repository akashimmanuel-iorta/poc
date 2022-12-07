import { Request, Response } from "express";
import ProductService from "../../services/product";
import fs from "fs";

const smpData = [
  {
    name: "hinata hyuga",
    image: "https://cdn.myanimelist.net/images/characters/16/55680.jpg",
    description:
      "Hinata Hyuga is a fictional character in the anime and manga Naruto, created by Masashi Kishimoto. Hinata is a kunoichi and the former heiress of the Hyūga clan from the fictional village of Konohagakure",
    power: "Kekkai genkai: Byakugan",
  },
  {
    image:
      "https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png",
    name: "Naruto uzumaki",
    description:
      "Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure",
    power: "Kekkai genkai: Lava Release, Boil Release, Magnet Release",
  },
  {
    image: "https://4kwallpapers.com/images/walls/thumbs_3t/6484.jpg",
    name: "Kakashi Hatake",
    description:
      "Kakashi Hatake [The Copy Ninja] is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. In the story, Kakashi is the teacher of Team 7, consisting of the series' primary characters, Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno",
    power: "Kekkai genkai: Mangekyō Sharingan, Sharingan",
  },
  {
    image:
      "http://m.gettywallpapers.com/wp-content/uploads/2022/07/Jiraiya-Wallpaper.jpg",
    name: "Jiraiya",
    description:
      "Jiraiya is a fictional character in the Naruto manga and anime series created by Masashi Kishimoto. Introduced in the series' first part, he was a student of Third Hokage Hiruzen Sarutobi",
    power: "Kekkai genkai: Mangekyō Sharingan, Sharingan",
  },
];

class ProductController {
  public Product = new ProductService();
  public createProduct = async (req: Request, res: Response) => {
    try {
      const product = await this.Product.createProduct(req.body);
      res.status(200).send(product);
    } catch (error) {
      console.log(error);

      res.status(500).send("Failed to create product");
    }
  };

  public getProducts = async (req: Request, res: Response) => {
    try {
      const product = await this.Product.getProducts();
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send("Failed to get product");
    }
  };

  public getProductsById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const product = await this.Product.getProductById(id);
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send("Failed to get product");
    }
  };

  public deleteProduct = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const product = await this.Product.deleteProduct(id);
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send("Failed to delete product");
    }
  };

  public updateProduct = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const product = await this.Product.updateProduct(id, req.body);
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send("Failed to update product");
    }
  };

  public createProductWithFormData = async (req: Request, res: Response) => {
    try {
      console.log(req.file, req.body.name);
      const binaryData = fs.readFileSync(req.file?.path ?? "");
      const base64String = new Buffer(binaryData).toString("base64");
      const d = {
        avatar: base64String,
        ...req.body,
      };
      const product = await this.Product.createProduct(d);
      res.status(200).send(product);
    } catch (error) {
      res.status(500).send("Failed to create product");
    }
  };
}

export default ProductController;
