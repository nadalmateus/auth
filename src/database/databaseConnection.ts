import { createConnection } from 'typeorm'

createConnection().then(() => console.log('🎉[DEV] Connected to Database'))
