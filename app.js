const express = require('express');
const http = require('http');
const path = require('path');

var app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './build', 'index.html'));
  });
}

app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || 5000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));