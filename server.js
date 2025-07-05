// server.js
import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('data/cities.json');
const middlewares = jsonServer.defaults();

server.use((req, res, next) => {
  setTimeout(() => next(), 580);
});

server.use(middlewares);
server.use(router);

server.listen(9000, () => {
  console.log('✅ JSON Server running with ESM on http://localhost:9000');
});
