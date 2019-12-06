const express = require('express')
const path = require('path')
const socketio = require('socket.io')

const app = express()
const port = process.env.PORT || 5000

const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(path.join(__dirname, '../public')))
app.set('views', path.join(__dirname, '../templates/views'))
app.set('view engine', 'hbs')

app.get('/',(req,res)=>{
    res.redirect('/login')
})

app.get('/login', (req, res) => {
    res.render('login')
    
})

app.get('/home', (req, res) => {
    res.render('home')
    
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})