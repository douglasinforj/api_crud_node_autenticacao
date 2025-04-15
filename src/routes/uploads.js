/**
 * @swagger
 * /uploads/{filename}:
 *   get:
 *     summary: Acessa a imagem do cliente
 *     tags: [Clientes]
 *     parameters:
 *       - name: filename
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Retorna o arquivo de imagem
 *       404:
 *         description: Arquivo não encontrado
 */
