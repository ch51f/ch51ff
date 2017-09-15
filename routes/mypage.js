var router = require('koa-router')();

router.all('/page1', async function(ctx, next) {
  ctx.state = {
    title: 'page1',
  }
  await ctx.render('mypage/page1', {});
});

router.all('/canvas', async function(ctx, next) {
  ctx.state = {
    title: 'canvas'
  }
  await ctx.render('mypage/canvas', {});
})

module.exports = router;