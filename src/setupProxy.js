const { createProxyMiddleware } = require('http-proxy-middleware');
//0
module.exports = function(app) {
  app.use(
    '/api/arsys/v1/entry',
    createProxyMiddleware({
      target: 'http://172.28.229.228:8008',
      secure: false,
      changeOrigin: true

    })
  );


  app.use(
    '/api/jwt/login',
    createProxyMiddleware({
      target: 'http://172.28.229.228:8008',
      secure: false,
      changeOrigin: true

    })
  );
 

};
//http://172.28.229.228:8008/api/jwt/login
//http://172.28.229.228:8008/api/arsys/v1/entry