const express = require('express'); //get access to express library
const mongoose = require('mongoose');

const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys.js');
require('./models/User'); // should be execute before passport.js, otherwise, get error Schema hasn't been registered for model "users".
require('./services/passport'); //passport config


//connect mongoose to our mongoDB instance
mongoose.connect(keys.mongoURI);



//authRoutes is a function since in authRoutes.js it uses module.exports and exports an arrow function
    // const authRoutes = require('./routes/authRoutes');  
    // const app = express();
    // authRoutes(app);
// the above can be refact to the below
const app = express();
require('./routes/authRoutes')(app);

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,  //milliseconds
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 5000; //specific for Cloud9
//when works on Cloud9, your port is process.env.PORT
app.listen(PORT, function() {
    console.log("APP is running on port " + process.env.PORT);
});
