import express from "express";
import { createUrl, deleteUrl, getUrl, getUrls } from "../controllers/shortUrl";

const router = express.Router();

router.post("/shortUrl", createUrl);
router.get("/shortUrl", getUrls);
router.get("/shortUrl/:id", getUrl);
router.delete("/shortUrl/:id", deleteUrl);

export default router;
