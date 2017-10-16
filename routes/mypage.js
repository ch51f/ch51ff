var router = require('koa-router')();

router.all('/page/:id', async function(ctx, next) {
  let {id} = ctx.params;
  if(id) {
    ctx.body = '404';
  }
  ctx.state = {
    title: `page${id}`
  }
  await ctx.render(`mypage/page${id}`, {});
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