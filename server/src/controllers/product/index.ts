import { Request, Response } from "express";
import ProductService from "../../services/product";

class ProductController {
  public Product = new ProductService();

  public createProduct = async (req: Request, res: Response) => {
    try {
      const product = await this.Product.createProduct(req.body);
      res.status(200).send(product);
    } catch (error) {
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
}

export default ProductController;
