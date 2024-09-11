import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/DB.js'
import morgan from 'morgan'
import userRouter from './routes/userroute.js'
import cors from 'cors'
import categoryRouter from './routes/categoryroute.js'
import productRouter from './routes/productroute.js'

const app = express()
dotenv.config()
connectDB()
app.use(cors())
//middleware
app.use(express.json())
app.use(morgan('dev'))

//route auth
app.use('/api/auth', userRouter)

// category route
app.use('/api/category', categoryRouter)
// category route
app.use('/api/product', productRouter)


const port = process.env.PORT || 8080

app.listen(port, () => console.log(`server running port ${port}`))