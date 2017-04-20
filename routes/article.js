var router = require('koa-router')();
var p = require('../mysql');

router.all('/', async function(ctx, next) {
	ctx.state = {
		title: '宋词列表',
	}

	var articles = await p.query('SELECT * FROM article');
	ctx.state.articles = articles;

	await ctx.render('article/list', {});
});

router.all('/new_article', async function(ctx, next) {
	ctx.state = {
		title: '宋词添加',
	}

	await ctx.render('article/new', {});
});

router.all('/add', async function(ctx, next) {
	let {title, author, sub} = ctx.method == 'POST' ? ctx.query : ctx.request.body;

	if(!title || !author) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '参数错误',
			data: {title, author, sub}
		})
		return false;
	}
	try {
		let res = await p.query(`INSERT INTO article (article_title, article_author, article_sub_title) VALUES("${title}", "${author}", "${sub}")`)
		ctx.body = JSON.stringify({
			result: true,
			data: res
		})
	} catch(e) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '添加article时报错',
			data: e,
		})
	}
});

router.all('/add_sentence', async function(ctx, next) {
	let {article_id, content} = ctx.method == 'POST' ? ctx.query : ctx.request.body;
	if(!article_id || !content) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '参数错误',
			data: {article_id, content}
		})
		return false;
	}
	console.log(article_id, content)
	try {
		let res = await p.query(`INSERT INTO sentence (article_id, content) VALUES("${article_id}", "${content}")`)
		ctx.body = JSON.stringify({
			result: true,
			data: res
		})
	} catch(e) {
		ctx.body = JSON.stringify({
			result: false,
			msg: '添加sentence时报错',
			data: e,
		})
	}
})

router.all('/:id', async function(ctx, next) {
	let {id} = ctx.params;
	ctx.state = {
		title: '宋词',
	}

	var article = await p.query('SELECT * FROM article WHERE article_id = ' + id);

	ctx.state.article = article[0];

	var sentences = await p.query('SELECT * FROM sentence WHERE article_id = ' + id + ' ORDER BY sentence_id');

	ctx.state.sentences = sentences;

	await ctx.render('article/article', {});
});

module.exports = router;