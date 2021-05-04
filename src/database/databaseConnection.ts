import { createConnection } from 'typeorm'

createConnection().then(() => console.log('[ON] Connected to Database'))
