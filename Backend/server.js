const app = require('./app');
const port = 3002;
const host = '127.0.0.1';

const server = app.listen(port, host, () => {
  console.log(`✅ Node server is listening on http://${host}:${port}`);
});
