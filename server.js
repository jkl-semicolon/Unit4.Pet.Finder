import pets from './data.js';

const express = require('express');
const app = express();
const PORT = 8000;

app.listen(PORT, () => console.log('Listening on port ' + PORT + ', over.'));