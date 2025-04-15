import Client from '../models/Client.js';
import { Op } from 'sequelize';

export const createClient = async (data) => {
  return await Client.create(data);
};

export const getClients = async (query) => {
  const { page = 1, limit = 10, nome, email, cpf } = query;

  const where = {};
  if (nome) where.nome = { [Op.like]: `%${nome}%` };
  if (email) where.email = { [Op.like]: `%${email}%` };
  if (cpf) where.cpf = { [Op.like]: `%${cpf}%` };

  const offset = (page - 1) * limit;

  const { rows, count } = await Client.findAndCountAll({
    where,
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [['id', 'DESC']]
  });

  return {
    data: rows,
    total: count,
    currentPage: parseInt(page),
    totalPages: Math.ceil(count / limit)
  };
};

export const getClientById = async (id) => {
  return await Client.findByPk(id);
};

export const updateClient = async (id, data) => {
  const client = await Client.findByPk(id);
  if (!client) throw new Error('Cliente não encontrado');
  return await client.update(data);
};

export const deleteClient = async (id) => {
  const client = await Client.findByPk(id);
  if (!client) throw new Error('Cliente não encontrado');
  await client.destroy();
};
