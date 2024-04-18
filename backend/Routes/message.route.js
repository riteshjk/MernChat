import express from "express";
import { sendMessage } from "../Controller/message.controller.js";
import { ProtectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id",ProtectRoute,sendMessage)

export default router;