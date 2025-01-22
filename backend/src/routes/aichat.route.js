import express from "express";
import { getResponse } from "../controllers/aichat.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/",protectRoute,getResponse);

export default router;