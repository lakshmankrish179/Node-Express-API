import  express from "express";

import { getUser, createUser, getUserById, deleteById, updateById } from "./Controllers/users.js";

let users = [] 

const router = express.Router();

router.get('/',getUser )

router.post('/',createUser );

router.get('/:id',getUserById);

router.delete('/:id', deleteById);

router.patch('/:id', updateById);

export default router;