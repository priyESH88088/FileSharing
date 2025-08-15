import express from "express";
import fileController from "../Controller/file.controller.js";
import uploader from "../MiddleWare/uploader.js"; // <-- change require to import

const router = express.Router();

router.post("/api/v1/file/upload", uploader.single("Resume"), fileController.upload);
router.post("/api/v1/file/share", fileController.share);
router.get("/file/:fileId", fileController.download);

export default router;

