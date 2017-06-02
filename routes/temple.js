var router = require('koa-router')();

var {navbar} = require('../config/base');

router.all('/', async function(ctx, next) {
  ctx.state = {
    title: '模板文件',
    navbar_cur: 3,
    navbar: navbar,
  }
  await ctx.render('temple/page1', {});
});

module.exports = router;