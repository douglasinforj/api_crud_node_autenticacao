import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_NAME || '',
    process.env.DB_USER || '',
    process.env.DB_PASSWORD || '',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        logging: false,
    }
);

//Função para testar a conexão
export const testConnection = async () => {
    try{
        await sequelize.authenticate();
        console.log('Conexão com banco de dados estabelecida com sucesso.');
    } catch {
        console.error('Não foi possível conectar ao banco de dados');
    }
};

export default sequelize;

