const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const routes = require('./router.js')
const cors = require('cors');


const app = express();

// *********************************
// Middleware
// *********************************
app.use(morgan('dev'));
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({extende: true}));



app.use(express.static('./client/dist'));

app.use('/api/pokemon', routes);

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port 3000');
});
