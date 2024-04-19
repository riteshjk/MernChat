import express from "express";
import { getMessage, sendMessage } from "../Controller/message.controller.js";
import { ProtectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id",ProtectRoute,sendMessage)
router.get("/:id",ProtectRoute,getMessage)


export default router;