const express = require ('express');
const path = require('path');
const app = express();



//Getting our PECHES routes

const routes = require('./server/routes/routes');

app.use(express.static(path.join(__dirname, 'dist/ang-node')));
app.use('/routes', routes);

//Catch all other routes request and reurn ot to the index

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/ang-node/index.html'))
});

const forceSSL = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
         ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
  }
  // Instruct the app
  // to use the forceSSL
  // middleware
  app.use(forceSSL());




const port = process.env.PORT || 8080;



app.listen(port, (req, res) => {
    console.log('RUNNING on port' + " " + port);
});