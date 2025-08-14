import express from "express";
const router =express.Router();
import fileController from "../Controller/file.controller.js";


router.post("/upload",fileController.upload);
router.post("/share",fileController.share);
router.get("/download",fileController.download);

export default router;
