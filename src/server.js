const app = require("./app");
const http = require('http').createServer(app);

http.listen(3131, () => {
    console.log('App rodando!');
});