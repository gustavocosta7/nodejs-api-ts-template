import express from 'express';
import routes from './routes/index';
import limiter from './middleware/rateLimit';
import logger from './middleware/pino';
const pinoHttp = require("pino-http")({logger});

const app = express();

app.use(limiter);
app.use(pinoHttp);

app.use(express.json());
app.use(routes);

export default app;
