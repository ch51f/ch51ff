var router = require('koa-router')();
var p = require('../mysql');

router.get('/', async function(ctx, next) {
  ctx.state = {
    title: 'koa2 title 123'
  };

  await ctx.render('index', {});
})

router.get('haha', async function(ctx, next) {
	var rows = await p.query('SELECT * FROM test_1');
	ctx.state = {
		title: 'test',
		data: rows,
	};

	await ctx.render('index', {});
})

module.exports = router;