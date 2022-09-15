const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: '18.183.206.108:8080',
      changeOrigin: true,
    }),
  );
};
