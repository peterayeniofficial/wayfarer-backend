import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import logger from 'morgan'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT || 9001

app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors('*'))


// Serve when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to Wayfarer Service'
}))

app.listen(port, () => {
    console.log(`Service started on PORT ${port}`)
})

export default app