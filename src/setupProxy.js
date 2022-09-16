const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://54.150.134.158:8080/',
      changeOrigin: true,
    }),
  );
};
