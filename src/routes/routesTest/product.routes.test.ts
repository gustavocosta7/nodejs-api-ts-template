const request = require('supertest');
import app from '../../app'


describe('Ola', () => {
    it('chamar normalmente', async () => {
        request(app)
            .get('/product/')
            .expect(402, 'olá');
    });
})
