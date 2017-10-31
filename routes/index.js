var router = require('koa-router')();
var p = require('../mysql');

router.get('/', async function(ctx, next) {
  ctx.state = {
    title: 'dashborad',
  };

  await ctx.render('dashborad/sky', {});
})

router.get('haha', async function(ctx, next) {
	var rows = await p.query('SELECT * FROM test_1');
	ctx.state = {
		title: 'test',
		data: rows,
	};

	await ctx.render('index', {});
})

router.get('mytest', async function(ctx, next) {
  ctx.state = {
    title: '我的测试页面'
  };

  await ctx.render('mytest', {})
})
router.get('mytest1', async function(ctx, next) {
  ctx.state = {
    title: '我的测试页面'
  };

  await ctx.render('mytest1', {})
})

router.get('study', async function(ctx, next) {
  ctx.state = {
    title: '系统规划与管理师资料'
  };

  await ctx.render('study/main', {})
})

router.get('study/:id', async function(ctx, next) {
  let {id} = ctx.params;
  if(!id) {
    ctx.body = '404';
    return
  }
  ctx.state = {
    title: `学习资料-${id}`
  }
  await ctx.render(`study/${id}`, {});
})

module.exports = router;