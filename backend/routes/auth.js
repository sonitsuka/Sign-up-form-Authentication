// -- express.js router -- //

const router = require('express').Router()
const passport = require('passport')
const CLIENT_URL = 'http://localhost:3000'

// url, if the auth failed 
router.get('/login/failed', (req, res) => {
    // adress fail
    res.status(401).json({
        success: false,
        message:'login failed',
    })
})

// when the auth succesessed 
router.get('/login/success', (req, res) => {
    if (res.user){
    // 200 = successful 
        res.status(200).json({
            success: true,
            message:'successful',
            user: req.user,
            cookies: req.cookies,
        })
    }
})
// successful login used by useEffect 

// log out, redirect in react App  
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect(CLIENT_URL)
})

// get(also post input method) Client request 
router.get('/google', 
passport.authenticate('google', { 
    scope: ['profile']
}))

// callback function 
router.get('/google/callback', 
passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed'
}))

