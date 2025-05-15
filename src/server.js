require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const Contact = require('./services/contacts');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('../swaggerConfig');

const port = 3000
db();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(express.json());
app.use("/api", [Contact])

app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || port));
});