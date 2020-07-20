import express from 'express';
import routes from './routes/index';
import limiter from './middleware/rateLimit'

const app = express();

app.use(limiter);
app.use(express.json());
app.use(routes);

export default app;
