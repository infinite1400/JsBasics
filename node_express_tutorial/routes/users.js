import express from 'express'
import { createUser,deleteUser,getUser,getUserWithId, updateUser } from '../controllers/users.js';
const router = express.Router();
router.get('/', getUser)

router.post('/',createUser);

router.get('/:id', getUserWithId)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router;