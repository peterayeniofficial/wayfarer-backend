import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 9001
app.use(bodyParser.urlencoded({ extended: false }))


// Serve when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to Wayfarer Service'
}))

app.listen(port, () => {
    console.log(`Service started on PORT ${port}`)
})

export default app