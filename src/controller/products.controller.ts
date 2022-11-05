import { Request, Response } from 'express';
import ProductsService from '../services/products.services';

export default class ProductsController {
  public productService = new ProductsService();

  async createProduct(req: Request, res: Response) {
    const product = req.body;

    const productCreated = await this.productService.create(product);
    console.log(productCreated);
    res.status(201).json(productCreated);
  }

  async getProduct(_req: Request, res: Response) {
    const products = await this.productService.get();
    res.status(200).json(products);
  }
}