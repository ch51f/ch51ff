var router = require('koa-router')();

router.all('/:id', async function(ctx, next) {
  console.log(ctx.params)
  let {id} = ctx.params;
  if(!id) {
    ctx.body = '404';
    return
  }
  ctx.state = {
    title: `${id}`
  }
  await ctx.render(`temp/${id}/page`, {});
})

module.exports = router;
