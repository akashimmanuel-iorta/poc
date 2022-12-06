import { Request, Response, Router } from "express";
import ProductController from "../../controllers/product";

interface Routes {
  path: string;
  router: Router;
}

class ProductRoute implements Routes {
  public path: string;
  public router = Router();
  public productController = new ProductController();

  constructor() {
    this.path = "/product";
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.productController.getProducts);
    this.router.get(`${this.path}/:id`, this.productController.getProductsById);
    this.router.post(this.path, this.productController.createProduct);
    this.router.patch(`${this.path}/:id`, this.productController.updateProduct);
    this.router.delete(
      `${this.path}/:id`,
      this.productController.deleteProduct
    );
  }
}

export default ProductRoute;
