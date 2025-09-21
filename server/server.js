import express from 'express'
import cors from 'cors'
import 'dotenv/config.js'
import connctDB from './configs/mongodb.js'
import { clerkWebhooks } from './middlewares/webhooks.js'

const app = express()

//connect to database
await connctDB()

//middlewere
app.use(cors())

//Routes
app.get('/', (req, res)=> res.send("API Working"))

app.post('/clerk', express.json(), clerkWebhooks)

//port
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})