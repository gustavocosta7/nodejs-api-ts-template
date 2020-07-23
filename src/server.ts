import logger from './middleware/pino';
import app from './app';

app.listen(process.env.PORT || 3000, () => {
  logger.info('‍Running Server');
});