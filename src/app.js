import productRouter from './routes/products.router.js'
import Express from 'express'
const app = Express()

app.use(Express.json())

app.use('/', productRouter)


app.listen(8080, () => {console.log("listening at port 8080")})