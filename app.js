const path = require('path');
const express = require('express');
const peopleRouter = require('./routers/people'); 
const bodyParser = require('body-parser');
const app = express();

// 
app.use(bodyParser.urlencoded({ extended: false }));
//set view
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', 'views'); 

app.use(express.static(path.join(__dirname, 'public')));

app.use(peopleRouter);

app.listen(3000, () => {
      console.log('Server run!');
});
