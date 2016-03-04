import 'babel-polyfill'
import express from 'express'
import path from 'path'
import fallback from 'express-history-api-fallback'

const root = path.join(__dirname, '../dist')
const app = express()

app.use(express.static(root))

app.use(fallback('index.html', { root }))

export default app
