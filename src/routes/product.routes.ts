import { Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import CreateProductService from '../services/CreateProductService';

const productRouter = Router();
const productRepository = new ProductRepository();

productRouter.get('/', (request, response) => {
  // response.json(productRepository.findAll());
  response.send('OLá');
});

productRouter.post('/', (request, response) => {
  try {
    response.status(201).json('');
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

export default productRouter;
