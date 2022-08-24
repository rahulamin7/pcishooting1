const express = require('express')
const app = express()
const port = 3003;
require('dotenv').config();
const router = require('./routes/routes');
var middleware = require('./middlewares/middleware').single;
app.use(require('./middlewares/middleware').global);

app.use('/uploads', express.static('uploads'))
app.use('/',router);

app.get('*',middleware.nopagefound);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})