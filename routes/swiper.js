var router = require('koa-router')();

var {navbar} = require('../config/base');
var {menu} = require('../config/swiper');

router.all('/', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
  }

  await ctx.render('swiper/index', {});
})

router.all('/page1', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 1,
    menu_s: 1,
  }

  await ctx.render('swiper/init/init', {});
})

router.all('/page2', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 1,
  }

  await ctx.render('swiper/basic/initialslide', {});
})

module.exports = router;