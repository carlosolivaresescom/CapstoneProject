const express = require('express')
const cors = require('cors')

const { json, urlencoded } = express
const app = express()

const host = '0.0.0.0'
const port = 3000

app.use(json())
app.use(urlencoded({ extended: false }))

const corsOptions = { origin: '*', optionsSuccessStatus: 200 }
app.use(cors(corsOptions))

app.use('/', (req, res) => { res.send(`Success`);})

app.listen(port,host, () => { console.log(`Server listening on port ${port} in the host ${host}`); })
