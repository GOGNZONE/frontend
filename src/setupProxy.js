const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.gongzone.tk:8080/',
      changeOrigin: true,
    }),
  );
};
