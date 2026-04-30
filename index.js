// index.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Servidor rodando');
});

server.listen(3000, () => {
  console.log('Server rodando na porta 3000');
});