import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import sequelize from './config/db.js';
import User from './models/User.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);

sequelize.sync({ alter: true }) // ou { force: true } no início para resetar
  .then(() => console.log('DB sincronizado'))
  .catch(err => console.error('Erro ao conectar DB:', err));

export default app;
