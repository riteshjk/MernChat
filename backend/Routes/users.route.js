import express from 'express';
import { getUsersForSideBar } from '../Controller/users.controller.js';
import { ProtectRoute } from '../middleware/protectRoute.js';
const router = express.Router();

router.get("/user",ProtectRoute, getUsersForSideBar)

export default router