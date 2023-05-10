const swaggerUi = require('swagger-ui-express');
const swaggerRoutes = require('./swagger-routes');
const router = require('express').Router();

const option = {
    openapi: '3.0.0',
    info: {
      title: 'Employee Management Documentation',
      description: 'Employee Management Documentation using Swagger',
      version: '1.0'
    },
    produces: ['application/json']
  };
  
  router.use(
    '/swagger',
    swaggerUi.serve,
    swaggerUi.setup({
      ...option,
      ...swaggerRoutes
    })
  );

exports.router = router;
