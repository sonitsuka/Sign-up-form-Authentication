const passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const AppleStrategy = require('passport-apple');

const GOOGLE_CLIENT_ID = '927582489446-e3ji1gcbm5id8n0rafjfiqurrtkp4rfl.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

FACEBOOK_APP_ID = ''
FACEBOOK_APP_SECRET = ''

APPLE_ID = ''
APPLE_SECRET = ''

// GOOGLE 
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
    function (accessToken, refreshToken, profile, done) {
        done(null, profile);
        }
  }
));

// Facebook 
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:5000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

// Apple 
passport.use(new AppleStrategy({
    clientID: "",
    teamID: "",
    callbackURL: "",
    keyID: "",
    privateKeyLocation: ""
}, function(accessToken, refreshToken, idToken, profile, cb) {
    // Here, check if the idToken exists in your database!
    cb(null, idToken);
}));

// passport.js serialize
passport.serializeUser((user, done) =>{
    done (null, user)
})

passport.deserializeUser((obj, done) =>{
    done (null, obj)
})