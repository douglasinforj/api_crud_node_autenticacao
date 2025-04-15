import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import clientRoutes from './routes/clientRoutes.js';

import sequelize from './config/db.js';
import User from './models/User.js';

// Swagger
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger.js';


dotenv.config();

const app = express();
app.use(express.json());


// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Rotas
app.use('/api/users', userRoutes);
app.use('/api/clients', clientRoutes);
app.use('/uploads', express.static('src/uploads')); // Servir imagens



// DB Sync
sequelize.sync({ alter: true }) // ou { force: true } no início para resetar
  .then(() => console.log('DB sincronizado'))
  .catch(err => console.error('Erro ao conectar DB:', err));

export default app;
