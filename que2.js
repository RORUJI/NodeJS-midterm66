let express = require('express')
const app = express()

app.get('/que2', function (req, res){
    
})

let port = 8081

app.listen(port, function() {
    console.log('server running on ' + port)
})