const passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = '927582489446-e3ji1gcbm5id8n0rafjfiqurrtkp4rfl.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

passport.serializeUser((user, done) =>{
    done (null, user)
})

passport.serializeUser((user, done) =>{
    done (null, user)
})