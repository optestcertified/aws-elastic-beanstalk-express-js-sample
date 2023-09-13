const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Oh Lord my God, MY Cloud Job is here!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
