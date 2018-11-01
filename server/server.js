/*
 * @PageName	:: server.js
 * @Author 		:: Pradeep Kumar
 * @Description	:: Server Page with all routing of each module
 * @Created Date	:: 10 OCT 2018
 */
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
const CategoryRouter = require('./routes/CategoryRouter');
const SubCategoryRouter = require('./routes/SubCategoryRouter');
const TagRouter = require('./routes/TagRouter');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/**************All Router List Here****************************/

app.use('/serverport', ServerPortRouter);
app.use('/category', CategoryRouter);
app.use('/subcategory', SubCategoryRouter);
app.use('/tag', TagRouter);

/**************All Router List Here****************************/



app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});
