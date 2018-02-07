const express = require('express'); //get access to express library
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys.js');
require('./models/User'); // should be execute before passport.js, otherwise, get error Schema hasn't been registered for model "users".
require('./models/Survey');
require('./services/passport'); //passport config


//connect mongoose to our mongoDB instance
mongoose.connect(keys.mongoURI);


const app = express();

//middlewares
app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,  //milliseconds
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// router must run after session part, otherwise, get 'passport.initialize() middleware not in use' error
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);


if (process.env.NODE_ENV === 'production') {
    //Express will serve up production assets, like our main.js or main.css file
    app.use(express.static('client/build'));

    //Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    // console.log(process.env.IP);
    // console.log(process.env.PORT);
    console.log("server has started on: " + PORT);
});


// app.listen(8081, process.env.IP, function() {
//     // console.log(process.env.IP);
//     // console.log(process.env.PORT);
//     console.log("server has started");
// });

