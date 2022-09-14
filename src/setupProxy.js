const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://13.112.126.140:8080',
      changeOrigin: true,
    }),
  );
};
