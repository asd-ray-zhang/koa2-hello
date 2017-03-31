const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logUtil = require('./utils/LogUtil');

const routeUtil = require('./utils/RouteUtil');

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

//route
routeUtil.initRoute().then((routes) => {
  app.use(routes);
})

module.exports = app;
