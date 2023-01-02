import express from 'express'
import cors from 'cors'
import path from 'path'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, 'build')))
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'build/index.html'))
)

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

app.listen(5009, () => {
  console.log('Serve at http://localhost:5009')
})
