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

router.all('/width', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 16,
  }

  await ctx.render('swiper/basic/width', {});
})

router.all('/height', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 17,
  }

  await ctx.render('swiper/basic/height', {});
})

router.all('/roundlengths', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 18,
  }

  await ctx.render('swiper/basic/RoundLengths', {});
})

router.all('/breakpoints', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 19,
  }

  await ctx.render('swiper/basic/breakpoints', {});
})

router.all('/autoheight', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 20,
  }

  await ctx.render('swiper/basic/autoHeight', {});
})

router.all('/nested', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 2,
    menu_s: 21,
  }

  await ctx.render('swiper/basic/nested', {});
})

router.all('/watchslidesprogress', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 3,
    menu_s: 1,
  }

  await ctx.render('swiper/progress/watchSlidesProgress', {});
})

router.all('/watchslidesvisibility', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 3,
    menu_s: 2,
  }

  await ctx.render('swiper/progress/watchSlidesVisibility', {});
})

router.all('/freemode', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 4,
    menu_s: 1,
  }

  await ctx.render('swiper/freemode/freeMode', {});
})

router.all('/freemodemomentum', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 4,
    menu_s: 2,
  }

  await ctx.render('swiper/freemode/freeModeMomentum', {});
})

router.all('/freemodemomentumratio', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 4,
    menu_s: 3,
  }

  await ctx.render('swiper/freemode/freeModeMomentumRatio', {});
})

router.all('/freemodemomentumvelocityratio', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 4,
    menu_s: 4,
  }

  await ctx.render('swiper/freemode/freeModeMomentumVelocityRatio', {});
})

router.all('/freemodemomentumbounce', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 4,
    menu_s: 5,
  }

  await ctx.render('swiper/freemode/freeModeMomentumBounce', {});
})

router.all('/freemodemomentumbounceratio', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 4,
    menu_s: 6,
  }

  await ctx.render('swiper/freemode/freeModeMomentumBounceRatio', {});
})

router.all('/freemodesticky', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 4,
    menu_s: 7,
  }

  await ctx.render('swiper/freemode/freeModeSticky', {});
})

router.all('/centeredslides', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 5,
    menu_s: 1,
  }

  await ctx.render('swiper/slidesgrid/centeredSlides', {});
})

router.all('/slidesperview', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 5,
    menu_s: 2,
  }

  await ctx.render('swiper/slidesgrid/slidesPerView')
})

router.all('/slidespergroup', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 5,
    menu_s: 3,
  }

  await ctx.render('swiper/slidesgrid/slidesPerGroup')
})

router.all('/spacebetween', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 5,
    menu_s: 4,
  }

  await ctx.render('swiper/slidesgrid/spaceBetween')
})

router.all('/slidespercolumn', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 5,
    menu_s: 5,
  }

  await ctx.render('swiper/slidesgrid/slidesPerColumn')
})

router.all('/slidespercolumnfill', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 5,
    menu_s: 6,
  }

  await ctx.render('swiper/slidesgrid/slidesPerColumnFill')
})

router.all('/slidesoffsetbefore', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 5,
    menu_s: 7,
  }

  await ctx.render('swiper/slidesgrid/slidesOffsetBefore')
})

router.all('/slidesoffsetafter', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 5,
    menu_s: 8,
  }

  await ctx.render('swiper/slidesgrid/slidesOffsetAfter')
})

router.all('/effect', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 6,
    menu_s: 1,
  }

  await ctx.render('swiper/effects/effect')
})

router.all('/fade', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 6,
    menu_s: 2,
  }

  await ctx.render('swiper/effects/fade')
})

router.all('/cube', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 6,
    menu_s: 3,
  }

  await ctx.render('swiper/effects/cube')
})

router.all('/coverflow', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 6,
    menu_s: 4,
  }

  await ctx.render('swiper/effects/coverflow')
})

router.all('/flip', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 6,
    menu_s: 5,
  }

  await ctx.render('swiper/effects/flip')
})

router.all('/preventclicks', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 7,
    menu_s: 1,
  }

  await ctx.render('swiper/clicks/preventClicks')
})

router.all('/preventclickspropagation', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 7,
    menu_s: 2,
  }

  await ctx.render('swiper/clicks/preventClicksPropagation')
})

router.all('/slidetoclickedslide', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 7,
    menu_s: 3,
  }

  await ctx.render('swiper/clicks/slideToClickedSlide')
})

router.all('/touchratio', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 1,
  }

  await ctx.render('swiper/touches/touchRatio')
})

router.all('/simulatetouch', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 2,
  }

  await ctx.render('swiper/touches/simulateTouch')
})

router.all('/onlyexternal', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 3,
  }

  await ctx.render('swiper/touches/onlyExternal')
})

router.all('/followfinger', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 4,
  }

  await ctx.render('swiper/touches/followFinger')
})

router.all('/shortswipes', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 5,
  }

  await ctx.render('swiper/touches/shortSwipes')
})

router.all('/longswipesratio', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 6,
  }

  await ctx.render('swiper/touches/longSwipesRatio')
})

router.all('/threshold', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 7,
  }

  await ctx.render('swiper/touches/threshold')
})

router.all('/touchangle', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 8,
  }

  await ctx.render('swiper/touches/touchAngle')
})

router.all('/longswipes', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 9,
  }

  await ctx.render('swiper/touches/longSwipes')
})

router.all('/longswipesms', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 10,
  }

  await ctx.render('swiper/touches/longSwipesMs')
})

router.all('/touchmovestoppropagation', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 11,
  }

  await ctx.render('swiper/touches/touchMoveStopPropagation')
})

router.all('/resistance', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 12,
  }

  await ctx.render('swiper/touches/resistance')
})

router.all('/resistanceratio', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 13,
  }

  await ctx.render('swiper/touches/resistanceRatio')
})

router.all('/iosedgeswipedetection', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 14,
  }

  await ctx.render('swiper/touches/iOSEdgeSwipeDetection')
})

router.all('/iosedgeswipethreshold', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 15,
  }

  await ctx.render('swiper/touches/iOSEdgeSwipeThreshold')
})

router.all('/passivelisteners', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 16,
  }

  await ctx.render('swiper/touches/passiveListeners')
})

router.all('/touchReleaseonedges', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 8,
    menu_s: 17,
  }

  await ctx.render('swiper/touches/touchReleaseOnEdges')
})

router.all('/noswiping', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 9,
    menu_s: 1,
  }

  await ctx.render('swiper/swiping/noSwiping')
})

router.all('/noswipingclass', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 9,
    menu_s: 2,
  }

  await ctx.render('swiper/swiping/noSwipingClass')
})

router.all('/allowswipetonext', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 9,
    menu_s: 3,
  }

  await ctx.render('swiper/swiping/allowSwipeToNext')
})

router.all('/allowswipetoprev', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 9,
    menu_s: 4,
  }

  await ctx.render('swiper/swiping/allowSwipeToPrev')
})

router.all('/swipehandler', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 9,
    menu_s: 5,
  }

  await ctx.render('swiper/swiping/swipeHandler')
})

router.all('/pagination', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 10,
    menu_s: 1,
  }

  await ctx.render('swiper/pagination/pagination')
})

router.all('/paginationtype', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 10,
    menu_s: 2,
  }

  await ctx.render('swiper/pagination/paginationType')
})

router.all('/paginationclickable', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 10,
    menu_s: 3,
  }

  await ctx.render('swiper/pagination/paginationClickable')
})

router.all('/paginationhide', async function(ctx, next) {
  ctx.state = {
    title: 'swiper 学习',
    navbar_cur: 1,
    navbar: navbar,
    menu: menu,
    menu_f: 10,
    menu_s: 4,
  }

  await ctx.render('swiper/pagination/paginationHide')
})

module.exports = router;