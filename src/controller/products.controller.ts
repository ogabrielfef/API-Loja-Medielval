import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  public productService = new ProductsService();

  async createProduct(req: Request, res: Response) {
    const product = req.body;

    const productCreated = await this.productService.create(product);
    console.log(productCreated);
    res.status(201).json(productCreated);
  }
}