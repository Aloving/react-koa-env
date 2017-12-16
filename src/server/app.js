const Koa = require('koa');

const app = new Koa();

const router = require('./routes');
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const logger = require('koa-logger');
const debug = require('debug');
const path = require('path');
const config = require('../../config/server');

const port = process.env.PORT || config.port;
const root = `${__dirname}/../../`;

// debug
debug('koa2:server');

// error handler
onerror(app);

// middlewares
app
  .use(bodyparser())
  .use(json())
  .use(logger())
  .use(koaStatic(`${root}/static`))
  .use(views(`${root}/views`, {
    options: { settings: { views: path.join(__dirname, 'views') } },
    map: { pug: 'pug' },
    extension: 'pug',
  }))
  .use(router.routes())
  .use(router.allowedMethods());

app.on('error', async (err, ctx) => {
  console.log(err);
  logger.error('server error', err, ctx);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
