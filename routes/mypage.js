var router = require('koa-router')();

router.all('/page1', async function(ctx, next) {
  ctx.state = {
    title: 'page1',
  }
  await ctx.render('mypage/page1', {});
});

module.exports = router;