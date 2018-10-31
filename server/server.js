var express = require('express');
var cookieSession = require('cookie-session')
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var corsPrefetch = require('cors-prefetch-middleware');
const app = express();
app.use(cookieSession({
  name: 'sessionBlog',
  keys: 'pradeep-new-app',
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


const PORT = 4209;
const cors = require('cors');
const ServerPortRouter = require('./routes/ServerPortRouter');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/serverport', ServerPortRouter);
app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});
