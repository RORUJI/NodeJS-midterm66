let express = require('express')
let bodyParser =require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/que1/:number', function (req, res){
    let number = req.params.number
    for (let i = 1; i <= number; i++) {
        res.send('number: ' + i)
    }
    //res.send('number: ' + number)

})

app.get('/que2/:number', function (req, res){
    let number = req.params.number
    for (let i = 1; i <= number; i++) {
        res.send('number: ' + i)
    }
    //res.send('number: ' + number)

})

let port = 8081

app.listen(port, function() {
    console.log('server running on ' + port)
})