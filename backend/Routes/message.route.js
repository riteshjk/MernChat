import express from "express";
import {  getMessages, sendMessage } from "../Controller/message.controller.js";
import { ProtectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id",ProtectRoute,sendMessage)
router.get("/:id",ProtectRoute,getMessages)


export default router;