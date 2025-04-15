import express from 'express';
import * as ClientController from '../controllers/ClientController.js';
import { protect } from '../middlewares/authMiddleware.js';
import upload from '../middlewares/uploadMiddleware.js';


const router = express.Router();

router.post('/', protect, upload.single('foto'), ClientController.create);
router.get('/', protect, ClientController.list);
router.get('/:id', protect, ClientController.show);
router.put('/:id', protect, upload.single('foto'), ClientController.update);
router.delete('/:id', protect, ClientController.remove);


export default router;