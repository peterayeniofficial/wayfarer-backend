import chai from 'chai'
import chatHttp from 'chai-http'
import 'chai/register-should'
import app from '../index'

chai.use(chatHttp)
const { expect } = chai

describe('Testing a random route:', () => {
    it('It should return a welcome message', (done) => {
        chai.request(app)
            .get('/')
            .set('Accept', 'application/json')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.message).to.equal('Welcome to Wayfarer Service')
                done()
            })

    })
})