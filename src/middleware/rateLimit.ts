const rateLimit = require('express-rate-limit')


const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 2,
    message: 'Muitas tentativas para esse ip',
});

export default limiter;