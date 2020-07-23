import logger from './middleware/pino';
import app from './app';

app.listen(3000, () => {
  logger.info('‍Running Server: 3000');
});