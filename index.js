const express = require('express'); //get access to express library
require('./services/passport'); //passport config

//authRoutes is a function since in authRoutes.js it uses module.exports and exports an arrow function
    // const authRoutes = require('./routes/authRoutes');  
    // const app = express();
    // authRoutes(app);
// the above can be refact to the below
const app = express();
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000; //specific for Cloud9
//when works on Cloud9, your port is process.env.PORT
app.listen(PORT, function() {
    console.log("APP is running on port " + process.env.PORT);
});
