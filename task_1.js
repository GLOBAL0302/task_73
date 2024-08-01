const express = require('express');
const port = 8000;
const  app = express();


app.get('/:name', (req, res) => {
    return res.send(`<h1>${req.params.name}</h1>`)
})

app.listen(port, () => {
    console.log(`Server started on port http://localhost:${port}`);
})