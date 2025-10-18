const app = require('./app');

const server = app.listen(3001, '127.0.0.1', () => {
    console.log('Server is running on http://127.0.0.1:3001');
});
