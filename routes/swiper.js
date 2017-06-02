var router = require('koa-router')();

var {navbar} = require('../config/base');

router.all('/', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
  }
  await ctx.render('swiper/page1', {});
})

module.exports = router;