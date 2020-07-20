import { Router } from 'express';
import ProductController from "../controller/productController/productController";
import ProductRepository from '../repositories/ProductRepository';
import CreateProductService from '../services/CreateProductService';

const productRouter = Router();
const productController = new ProductController();
// const productRepository = new ProductRepository();

productRouter.get('/', (request, response) => {
  const result  = productController.index();
  response.send(result);
});

productRouter.post('/', (request, response) => {
  try {
    response.status(201).json('');
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

export default productRouter;
