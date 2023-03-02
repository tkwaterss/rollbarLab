const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express();

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: 'e5a284acf6e249a7a5521219056e7650',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

app.use(express.json())
app.use(cors());
app.use(express.static('public'))


rollbar.log('site is live')

app.get('/', (req,res) => {
    tacos()
    rollbar.log('site visited')
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

rollbar.log('hello World')

app.listen(4000, console.log("App running on 4000"))