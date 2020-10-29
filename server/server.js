const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('pizza'));
app.use('/api', apiRouter);

app.listen(3000, () => console.log(`

    Server be runnin' on port 3000!

`));