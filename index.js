const express = require('express'); //get access to express library
const app = express();
const PORT = process.env.PORT || 5000; //specific for Cloud9

//route handler
app.get('/', (req, res) => {
    res.send({ bye: 'Buddy'});
});


//when works on Cloud9, your port is process.env.PORT
app.listen(PORT, function() {
    console.log("APP is running on port " + process.env.PORT);
});