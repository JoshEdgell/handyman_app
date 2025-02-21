const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
// const router = express.Router(); //still needed?

const PORT = 3000;

// Middleware
app.use(express.static('public'));
//Next line may not be necessary
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(routes)

const mongoUri = 'mongodb://localhost:27017/reactstoredb'
mongoose.connect(mongoUri, { });

mongoose.connection.once('open', ()=>{
    console.log("Database open")
});

const port = 3000;

app.listen(port, ()=>{
    console.log("Database server running on port " + port);
})



process.on('SIGINT', () => {
    console.log('Server is shutting down...');
    process.exit();
  });
