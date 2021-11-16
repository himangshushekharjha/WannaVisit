const express = require('express');
const config = require('./config/config')
const cors = require('cors');

const app  = express();
//Middlewares
app.use(express.json());
app.use(cors());

app.use('/api/',require('./routes/index'));

app.listen(config.port, () => {
    console.log(`server started on port ${config.port} (${config.env})`);
  });