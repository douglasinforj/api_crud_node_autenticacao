// swagger.js
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API de Clientes',
    version: '1.0.0',
    description: 'Documentação da API de autenticação e cadastro de clientes com Node.js, Express, ES6+, MySQL e JWT',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor local',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'], // onde estão as anotações Swagger
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
