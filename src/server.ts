import express from 'express'
import routes from './routes'
import 'reflect-metadata'
import './database/databaseConnection'
import helmet from 'helmet'

const app = express()
app.use(express.json())
app.use(helmet())

app.use(routes)

app.listen(3333, () => console.log('🎉[DEV] Server Up on http://localhost:3333/'))
