const express = require('express');
const port = 8000;
const  app = express();
const Caesar = require('caesar-salad').Caesar;

app.get('/encode/:name', (req, res) => {
    const myCode = Caesar.Cipher('c').crypt(req.params.name);
    return res.send(`<h1>${myCode}</h1>`);
})

app.get('/decode/:name', (req, res) => {
    const myCode = Caesar.Decipher('c').crypt(req.params.name);
    return res.send(`<h1>${myCode}</h1>`)
})



app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
})