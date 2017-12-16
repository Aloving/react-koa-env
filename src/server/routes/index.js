const Router = require('koa-router');

const router = new Router();

// render index page
router.get('/', async (ctx) => {
  await ctx.render('index');
});

module.exports = router;
