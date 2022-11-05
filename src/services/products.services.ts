import { IProduct } from '../interfaces/IProduct';
import ProductsModel from '../models/products.model';

export default class ProductService {
  public product = new ProductsModel();

  public create(productData: IProduct): Promise<IProduct> {
    return this.product.createProduct(productData);
  }

  public get(): Promise<IProduct[]> {
    const product = this.product.getProducts();
    return product;
  }
}