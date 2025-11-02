import express from 'express';
import { addUser, deleteUser, getUser, getUserById, updateUser } from '../controller/userController.js';

const router= express.Router();

router.post("/",addUser);
router.get("/",getUser);
router.get("/:id",getUserById);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);   

export default router;