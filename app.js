const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logUtil = require('./utils/logUtil');
var router = require('koa-router')({ prefix: '/api' });

//router here.
const index = require('./routes/index');
const users = require('./routes/users');
const api = require('./routes/api');
//const user = require('./routes/api/user_router');

// error handler
onerror(app);

// middlewares
app.use(bodyparser);
app.use(json());
//app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'html'
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  try {
    await next();
    const ms = new Date() - start;
    logUtil.logResponse(ctx, ms);
  } catch(error){
    ms = new Date() - start;
    //记录异常日志
    logUtil.logError(ctx, error, ms);
  }
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(users.routes(), users.allowedMethods());
//router.use('/api', api.routes(), api.allowedMethods());
//router.use('/api', api.routes(), api.allowedMethods());
router.use(api.routes(), api.allowedMethods());
app.use(router.routes());
module.exports = app;
