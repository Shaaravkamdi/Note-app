import express from 'express'
import cors from 'cors'
import connectTOMongoDB from './db/db.js'

import authRouter from './routes/auth.js'
import noteRouter from './routes/note.js'


const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
app.use('/api/auth', authRouter)
app.use('/api/note', noteRouter)


app.listen(5000, () => {
    connectTOMongoDB()
    console.log("server is running")
})