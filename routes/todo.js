var router = require('koa-router')();
var p = require('../mysql');

router.all('/', async function(ctx, next) {
	console.dir(p)
	var todos = await p.query('SELECT * FROM todo');
	ctx.body = JSON.stringify(todos);
})

router.all('/add', async function(ctx, next) {

	try {
		var res = await p.query('INSERT INTO `todo` (todo) VALUES ("new todo")')
		ctx.body = JSON.stringify({
			result: true,
			msg: '添加todo成功'
		});
	} catch(e) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '添加todo时报错'
		})
	}
})

module.exports = router;