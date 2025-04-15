import Client from '../models/Client.js';
import * as ClientService from '../services/ClientService.js';

export const create = async (req, res) => {
    try {
      const data = req.body;
      if (req.file) data.foto = req.file.filename;
      const client = await ClientService.createClient(data);
      res.status(201).json(client);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};

export const list = async (req, res) => {
  try {
    const result = await ClientService.getClients(req.query);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const show = async (req, res) => {
    const client = await ClientService.getClientById(req.params.id);
    if (!client) return res.status(404).json({ message: 'Não encontrado' });
    res.json(client);
};

export const update = async (req, res) => {
    try {
      const data = req.body;
      if (req.file) data.foto = req.file.filename;
      const client = await ClientService.updateClient(req.params.id, data);
      res.json(client);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};

export const remove = async (req, res) => {
    try {
      await ClientService.deleteClient(req.params.id);
      res.json({ message: 'Cliente excluído' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };