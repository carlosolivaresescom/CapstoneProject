const express = require('express')
const cors = require('cors')

const path = require('path');

const { json, urlencoded } = express
const app = express()

const host = process.env.IP  || '0.0.0.0'
const port = process.env.PORT || 3000

app.use(json())
app.use(urlencoded({ extended: false }))

const corsOptions = { origin: '*', optionsSuccessStatus: 200 }
app.use(cors(corsOptions))


app.use('/home',(req,res) => { res.sendFile(path.join(__dirname+'/src/html/index.html')); })
app.use('/', (req, res) => { res.send(`Force fail`);})

app.listen(port,host, () => { console.log(`Server listening on port ${port} in the host ${host}`); })
