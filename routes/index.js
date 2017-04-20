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

module.exports = router;