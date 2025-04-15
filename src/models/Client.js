import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Client = sequelize.define('Client', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  sobrenome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [11, 14], // Pode aceitar CPF com ou sem máscara
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  data_nascimento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  foto: {
    type: DataTypes.STRING, // nome do arquivo
    allowNull: true
  }
});

export default Client;
