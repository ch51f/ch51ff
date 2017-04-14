var router = require('koa-router')();
var p = require('../mysql');

router.all('/', async function(ctx, next) {
	ctx.state = {
		title: '宋词列表',
	}

	var articles = await p.query('SELECT * FROM article');
	ctx.state.articles = articles;

	await ctx.render('article/list', {});
})

router.all('/:id', async function(ctx, next) {
	ctx.state = {
		title: '宋词',
	}

	var article = await p.query('SELECT * FROM article WHERE article_id = ' + ctx.params.id);

	ctx.state.article = article[0];

	await ctx.render('article/article', {});
})

module.exports = router;