const express = require('express'); //get access to express library
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        }, 
        (accessToken, refreshToken, profile, done) => {
            console.log('accessToken: ' + accessToken);
            console.log('refreshToken: ' + refreshToken);
            console.log('profile: ' + profile);
        }
    )
);

//route handler
app.get(
    '/auth/google', 
    passport.authenticate('google', {  //'google' string means use the GoogleStategy
        scope: ['profile', 'email']  // scope means the info we asked from google
    })
);

app.get('/auth/google/callback', passport.authenticate('google'));




const PORT = process.env.PORT || 5000; //specific for Cloud9
//when works on Cloud9, your port is process.env.PORT
app.listen(PORT, function() {
    console.log("APP is running on port " + process.env.PORT);
});