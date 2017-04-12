var router = require('koa-router')();
var p = require('../mysql');

router.all('/', async function(ctx, next) {
	var todos = await p.query('SELECT * FROM todo WHERE delete_flag = 0');
	// ctx.headerSent = "Access-Control-Allow-Origin";
	ctx.type = 'json';
	ctx.body = {data: todos}
})

router.all('/add', async function(ctx, next) {
	if(!ctx.query.todo) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '参数错误',
			data: [],
		})
	}
	try {
		var res = await p.query('INSERT INTO `todo` (todo) VALUES ("' + ctx.query.todo + '")')
		ctx.body = JSON.stringify({
			result: true,
			data: res,
			msg: '添加todo成功'
		});
	} catch(e) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '添加todo时报错',
			data: [],
		})
	}
})

router.all('/done', async function(ctx, next) {
	if(!ctx.query.id) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '参数错误',
			data: [],
		})
	}
	try {
		var res = await p.query('UPDATE todo SET status = 1 where id = ' + ctx.query.id + ';')
		ctx.body = JSON.stringify({
			result: true,
			data: res,
			msg: '更新todo状态成功'
		});
	} catch(e) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '更新todo状态失败',
			data: [],
		})
	}
})

router.all('/undone', async function(ctx, next) {
	if(!ctx.query.id) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '参数错误',
			data: [],
		})
	}
	try {
		var res = await p.query('UPDATE todo SET status = 0 where id = ' + ctx.query.id + ';')
		ctx.body = JSON.stringify({
			result: true,
			data: res,
			msg: '更新todo状态成功'
		});
	} catch(e) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '更新todo状态失败',
			data: [],
		})
	}
})

router.all('/delete', async function(ctx, next) {
	if(!ctx.query.id) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '参数错误',
			data: [],
		})
	}
	try {
		var res = await p.query('UPDATE todo SET delete_flag = 1 where id = ' + ctx.query.id + ';')
		ctx.body = JSON.stringify({
			result: true,
			data: res,
			msg: '删除todo状态成功'
		});
	} catch(e) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '删除todo状态失败',
			data: [],
		})
	}
})

module.exports = router;