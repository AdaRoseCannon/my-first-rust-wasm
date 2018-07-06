const express = require('express');
const app = express();
const path = require('path');

app.get('/wasm.wasm', (req,res) => {
    res.setHeader('Content-Type', 'application/wasm')
    res.sendFile(path.join(__dirname, './js_hello_world_bg.wasm'));
});

app.use(express.static('./static'));

app.listen(8080);