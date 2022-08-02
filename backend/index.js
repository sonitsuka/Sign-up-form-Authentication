const cookieSession = require('cookie-session')
const express = require('express')
const passport = require('passport')
const app = express()

// Set Cookie 
app.use(cookieSession(
    {name:'session',
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
    origin:'hettp://localhost:3000',
    methods:'GET, POST, PUT, DELETE',
    Credential: TURE
}))

// run the server 
app.listen('5000', ()=> {
    console.log('Server is running')
})