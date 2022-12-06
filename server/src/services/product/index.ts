import { ProductModel } from "../../models/Product";

class ProductService {
  public product = ProductModel;

  public getProducts() {
    return this.product.find();
  }

  public getProductById(id: string) {
    return this.product.find({ _id: id });
  }

  public createProduct(data: any) {
    return this.product.create(data);
  }

  public updateProduct(id: string, data: any) {
    return this.product.updateOne({ _id: id }, data);
  }

  public deleteProduct(id: string) {
    return this.product.deleteOne({ _id: id });
  }
}

export default ProductService;
