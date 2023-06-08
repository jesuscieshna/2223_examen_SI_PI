import express from 'express'
import { getItems, createItem, getItemById, getItemBySearch } from '../controllers/movies.js'

const router = express.Router() // Manejador de la rutas

// declarar ruta de canciones
router.get('/movies', getItems)
router.get('/movies/search', getItemBySearch)
router.get('/movies/:id', getItemById)

router.post('/movies', createItem)


export default router