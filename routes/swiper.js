var router = require('koa-router')();

router.all('/', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习'
  }
  await ctx.render('swiper/page1', {});
})

module.exports = router;