const path = require('path');
const express = require('express');
const peopleRouter = require('./routers/people'); 
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// 
app.use(bodyParser.urlencoded({ extended: false }));
//set view
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', 'views'); 

app.use(express.static(path.join(__dirname, 'public')));

app.use(peopleRouter);

app.listen(PORT, () => {
      console.log('Server run!');
});
