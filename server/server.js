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

app.get('/image', (req, res) => {
    try{
        // critical()
        rollbar.log('fetching new image')
        let images = ['./images/sincerely-media-3KEFp35FVB0-unsplash.jpg', './images/katya-ross-4Vg6ez9jaec-unsplash.jpg', './images/engin-akyurt-cIdVZMnyVv4-unsplash.jpg', './images/jan-antonin-kolar-uYmF6ncEgLY-unsplash.jpg']
        let randomImage = images[Math.floor(Math.random() * 4)]
        res.status(200).send(randomImage);
    } catch (err) {
        console.log(err);
        rollbar.critical(err)
    }
})

app.get('/stuff', (req,res) => {
    try {
        rollbar.log('new heading button clicked')
        let headings = ['THE BEST PAGE', 'NEVER BEEN A PAGE AS GOOD AS THIS', "LAST PAGE YOU'LL EVER NEED", 'THIS IS A PAGE THAT YOU LIKE!']
        let randomHeading = headings[Math.floor(Math.random() * 4)]
        console.log(randomHeading)
        res.status(200).send(randomHeading)
    } catch (err) {
        console.log(err)
        rollbar.error(err)
    }
})

rollbar.log('hello World')

app.listen(4000, console.log("App running on 4000"))