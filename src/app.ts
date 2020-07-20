import express from 'express';
import routes from './routes/index';
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 1,
  message: 'Muitas tentativas meu camarada!',
});

const app = express();

app.use(limiter);
app.use(express.json());
app.use(routes);

export default app;
