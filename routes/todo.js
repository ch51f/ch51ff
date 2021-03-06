var router = require('koa-router')();
var p = require('../mysql');

router.all('/', async function(ctx, next) {
	var todos = await p.query('SELECT * FROM todo WHERE delete_flag = 0');
	// ctx.headerSent = "Access-Control-Allow-Origin";
	// ctx.type = 'json';
	// ctx.body = {data: todos}
	ctx.state = {
		title: '待办列表',
		todos: todos,
	}
	await ctx.render('todo/index', {});
})

router.all('/add', async function(ctx, next) {
	let params = ctx.method == 'POST' ? ctx.request.body : ctx.query;
 	
 	if(!params.todo) {
 		ctx.body = JSON.stringify({
 			result: false, 
 			msg: '参数错误', 
 			data: [], 
 		}) 
 		return false;
 	}

	try {
		var res = await p.query('INSERT INTO `todo` (todo) VALUES ("' + params.todo + '")')
		ctx.body = JSON.stringify({
			result: true,
			data: res,
			msg: '添加todo成功'
		});
	} catch(e) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '添加todo时报错',
			data: e,
		})
	}
})

router.all('/done', async function(ctx, next) {
	let params = ctx.method == 'POST' ? ctx.request.body : ctx.query;
 	
 	if(!params.id) {
 		ctx.body = JSON.stringify({
 			result: false, 
 			msg: '参数错误', 
 			data: [], 
 		}) 
 		return false;
 	}

	try {
		var res = await p.query('UPDATE todo SET status = 1 where id = ' + params.id + ';')
		ctx.body = JSON.stringify({
			result: true,
			data: res,
			msg: '更新todo状态成功'
		});
	} catch(e) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '更新todo状态失败',
			data: e,
		})
	}
})

router.all('/undone', async function(ctx, next) {
	let params = ctx.method == 'POST' ? ctx.request.body : ctx.query;
 	
 	if(!params.id) {
 		ctx.body = JSON.stringify({
 			result: false, 
 			msg: '参数错误', 
 			data: [], 
 		}) 
 		return false;
 	}

	try {
		var res = await p.query('UPDATE todo SET status = 0 where id = ' + params.id + ';')
		ctx.body = JSON.stringify({
			result: true,
			data: res,
			msg: '更新todo状态成功'
		});
	} catch(e) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '更新todo状态失败',
			data: e,
		})
	}
})

router.all('/delete', async function(ctx, next) {
	let params = ctx.method == 'POST' ? ctx.request.body : ctx.query;
 	
 	if(!params.id) {
 		ctx.body = JSON.stringify({
 			result: false, 
 			msg: '参数错误', 
 			data: [], 
 		}) 
 		return false;
 	}

	try {
		var res = await p.query('UPDATE todo SET delete_flag = 1 where id = ' + params.id + ';')
		ctx.body = JSON.stringify({
			result: true,
			data: res,
			msg: '删除todo状态成功'
		});
	} catch(e) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '删除todo状态失败',
			data: e,
		})
	}
})

router.all('/deleteAll', async function(ctx, next) {
	let params = ctx.method == 'POST' ? ctx.request.body : ctx.query;
 	
 	if(!params.ids) {
 		ctx.body = JSON.stringify({
 			result: false, 
 			msg: '参数错误', 
 			data: [], 
 		}) 
 		return false;
 	}

	try {
		var res = await p.query('UPDATE todo SET delete_flag = 1 where id in  (' + params.ids + ');')
		ctx.body = JSON.stringify({
			result: true,
			data: res,
			msg: '删除todo状态成功'
		});
	} catch(e) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '删除todo状态失败',
			data: e,
		})
	}
})

module.exports = router;