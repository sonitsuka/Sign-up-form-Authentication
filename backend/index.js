const cookieSession = require('cookie-session')
const express = require('express')
const cors = require('cors')

const passportSetup = require('./passport')
const passport = require('passport')
const authRoute = require('./routes/auth')
const app = express()

// Set Cookie 
app.use(cookieSession(
    {
    name:'session',
    key:['key1'],
    maxAge: 24 * 60 * 60*100
    }
))

// Set Passport.js for authentification
app.use(passport.initialize())
app.use(passport.session())

// Set configration 
app.use(cors({
    // local 3000 for react server. 5000 for node
    origin:'http://localhost:3000',
    methods:'GET, POST, PUT, DELETE',
    Credential: TURE
}))

app.use('/auth', authRoute)

// run the server 
app.listen('5000', ()=> {
    console.log('Server stareted on ... ')
})