const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const jsonp = require('koa-jsonp');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');

const index = require('./routes/index');
const users = require('./routes/users');
const todo = require('./routes/todo');
const article = require('./routes/article');
const swiper = require('./routes/swiper');
const temple = require('./routes/temple');
const mypage = require('./routes/mypage');
const temp = require('./routes/temp');

// middlewares
app.use(convert(bodyparser));
app.use(convert(json()));
app.use(convert(jsonp()));
app.use(convert(logger()));
app.use(convert(require('koa-static')(__dirname + '/public')));

app.use(views(__dirname + '/views', {
  extension: 'pug'
}));

// app.use(views(__dirname + '/views-ejs', {
//  extension: 'ejs'
// }));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

router.use('/', index.routes(), index.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());
router.use('/todo', todo.routes(), todo.allowedMethods());
router.use('/article', article.routes(), article.allowedMethods());
router.use('/swiper', swiper.routes(), swiper.allowedMethods());
router.use('/temple', temple.routes(), temple.allowedMethods());
router.use('/mypage', mypage.routes(), mypage.allowedMethods());
router.use('/temp', temp.routes(), temp.allowedMethods());

app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx) {
  console.log(err)
  log.error('server error', err, ctx);
});

module.exports = app;