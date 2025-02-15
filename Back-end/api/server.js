import express, { json } from 'express'
import cors from 'cors'
import { db } from './connect.js'
import path from 'path'

const __dirname = path.resolve()


const app = express()
const PORT = 3000

app.use(cors())

app.get('/api/', (req, res) => {
  res.send("Só vamos trabalhar com '/api/artists' e '/api/songs'")
})
app.get('/api/artists', async (req, res) => {
  res.send(await db.collection('artists').find({}).toArray())
})
app.get('/api/songs', async (req, res) => {
  res.send(await db.collection('songs').find({}).toArray())
})

app.use(express.static(path.join(__dirname, '../Front-end/dist')))

app.get('*', async (req, res) => {
  res.sendFile(path.join(__dirname,'../Front-end/dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`)
})
