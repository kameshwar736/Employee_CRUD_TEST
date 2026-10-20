import express from 'express'
import dotenv from  'dotenv'
import cors from 'cors'
import { db } from './config/database.js'
import routes from './AppRoutes/empData.js'


dotenv.config()


const app = express()

app.use(cors())

app.use(express.json())

const PORT = process.env.PORT || 3000

db()

app.use('/apiCheck',()=>{
    console.log("API WORKING ");
    
})

app.use('/emp',routes)





app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})

