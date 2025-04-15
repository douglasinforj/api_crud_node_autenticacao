/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Endpoints de cadastro e gerenciamento de clientes
 */

/**
 * @swagger
 * /api/clients:
 *   get:
 *     summary: Lista todos os clientes (com filtros e paginação)
 *     tags: [Clientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: nome
 *         schema:
 *           type: string
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *       - in: query
 *         name: cpf
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de clientes retornada com sucesso
 */

/**
 * @swagger
 * /api/clients:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Clientes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - sobrenome
 *               - email
 *               - cpf
 *               - data_nascimento
 *             properties:
 *               nome:
 *                 type: string
 *               sobrenome:
 *                 type: string
 *               email:
 *                 type: string
 *               cpf:
 *                 type: string
 *               data_nascimento:
 *                 type: string
 *                 format: date
 *               foto:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *       400:
 *         description: Dados inválidos
 */

/**
 * @swagger
 * /api/clients/{id}:
 *   get:
 *     summary: Obtém detalhes de um cliente
 *     tags: [Clientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente não encontrado
 */

/**
 * @swagger
 * /api/clients/{id}:
 *   put:
 *     summary: Atualiza os dados de um cliente
 *     tags: [Clientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               sobrenome:
 *                 type: string
 *               email:
 *                 type: string
 *               cpf:
 *                 type: string
 *               data_nascimento:
 *                 type: string
 *                 format: date
 *               foto:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Cliente atualizado
 *       404:
 *         description: Cliente não encontrado
 */

/**
 * @swagger
 * /api/clients/{id}:
 *   delete:
 *     summary: Remove um cliente
 *     tags: [Clientes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Cliente deletado
 *       404:
 *         description: Cliente não encontrado
 */
