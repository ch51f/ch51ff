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

router.all('/init', async function(ctx, next) {
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

router.all('/initialslide', async function(ctx, next) {
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

router.all('/direction', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 2,
  }

  await ctx.render('swiper/basic/direction', {});
})

router.all('/speed', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 3,
  }

  await ctx.render('swiper/basic/speed', {});
})

router.all('/autoplay', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 4,
  }

  await ctx.render('swiper/basic/autoplay', {});
})

router.all('/a_d_o_i', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 5,
  }

  await ctx.render('swiper/basic/autoplayDisableOnInteraction', {});
})

router.all('/a_s_o_l', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 6,
  }

  await ctx.render('swiper/basic/autoplaystoponlast', {});
})

router.all('/grabcursor', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 7,
  }

  await ctx.render('swiper/basic/grabCursor', {});
})

router.all('/parallax', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 8,
  }

  await ctx.render('swiper/basic/parallax', {});
})

router.all('/hashnav', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 9,
  }

  await ctx.render('swiper/basic/hashnav', {});
})

router.all('/h_w_s', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 10,
  }

  await ctx.render('swiper/basic/hashnavWatchState', {});
})


router.all('/demo_h_w_s', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
  }

  await ctx.render('swiper/basic/demo_hws', {});
})

router.all('/history', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 11,
  }

  await ctx.render('swiper/basic/history', {});
})

router.all('/replacestate', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 12,
  }

  await ctx.render('swiper/basic/replaceState', {});
})

router.all('/setwrappersize', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 13,
  }

  await ctx.render('swiper/basic/setWrapperSize', {});
})

router.all('/virtualtranslate', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 14,
  }

  await ctx.render('swiper/basic/virtualTranslate', {});
})

router.all('/a11y', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 15,
  }

  await ctx.render('swiper/basic/a11y', {});
})

module.exports = router;