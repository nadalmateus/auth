import express from 'express'
import helmet from 'helmet'
import 'reflect-metadata'
import './database/databaseConnection'
import routes from './routes'

const app = express()
app.use(express.json())
app.use(helmet())

app.use(routes)

app.listen(3333, () => console.log('[ON] Server Up on http://localhost:3333/'))
