var router = require('koa-router')();

router.all('/page1', async function(ctx, next) {
  ctx.state = {
    title: 'page1',
  }
  await ctx.render('mypage/page1', {});
});

router.all('/page2', async function(ctx, next) {
  ctx.state = {
    title: 'page2'
  }
  await ctx.render('mypage/page2', {});
})

router.all('/page3', async function(ctx, next) {
  ctx.state = {
    title: 'page3'
  }
  await ctx.render('mypage/page3', {});
})

router.all('/page4', async function(ctx, next) {
  ctx.state = {
    title: 'page4'
  }
  await ctx.render('mypage/page4', {});
})


router.all('/canvas', async function(ctx, next) {
  ctx.state = {
    title: 'canvas'
  }
  await ctx.render('mypage/canvas', {});
})

router.all('/canvas1', async function(ctx, next) {
  ctx.state = {
    title: 'canvas'
  }
  await ctx.render('mypage/canvas1', {});
})

router.all('/canvas2', async function(ctx, next) {
  ctx.state = {
    title: 'canvas'
  }
  await ctx.render('mypage/canvas2', {});
})


module.exports = router;