import logger from './middleware/pino';
import app from './app';

app.listen(process.env.port, () => {
  logger.info('‍Running Server: 3000');
});