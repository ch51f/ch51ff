var router = require('koa-router')();

router.all('/', async function(ctx, next) {
  ctx.state = {
    title: '模板文件'
  }
  await ctx.render('temple/page1', {});
});

module.exports = router;