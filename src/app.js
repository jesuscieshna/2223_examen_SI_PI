import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbConnect } from './config/mongodb.js'
import { recipeRoute, movieRoute } from './routes/index.js'


// Cargamos las variables de entorno
dotenv.config()

// Creamos la aplicación express
const app = express()

// configuramos cors
app.use(cors())
// configuramos express para que entienda las peticiones con formato JSON 
app.use(express.json())

// configuramos las routes

// Rutas de recetas
app.use('/api', recipeRoute)
app.use('/api', movieRoute)


const PORT = process.env.PORT || 3000

const initExpressServer = () => {
    console.log(`Express server initialized listening on ${PORT}`)
}

try {
    await dbConnect()
    console.log('MongoDB connected')

} catch (error) {
    console.log(`Error connecting to MongoDB: ${error} `)
}

app.listen(PORT, initExpressServer)
