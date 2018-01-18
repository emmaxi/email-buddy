const passport = require('passport');

module.exports = (app) => {
    //route handler
    app.get(
        '/auth/google', 
        passport.authenticate('google', {  //'google' string means use the GoogleStategy
            scope: ['profile', 'email']  // scope means the info we asked from google
        })
    );
    
    
    app.get('/emma', function (req,res) {
        res.send('For test purpose');
    });
   
    app.get('/auth/google/callback', passport.authenticate('google'));
};
