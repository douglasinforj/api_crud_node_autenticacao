import Client from '../models/Client.js';

export const createClient = async (data) => {
  return await Client.create(data);
};

export const getClients = async () => {
  return await Client.findAll();
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
