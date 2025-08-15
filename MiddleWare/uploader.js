import path from "node:path";
import multer from "multer";
import { fileURLToPath } from "node:url";
import { v4 as uuidv4 } from 'uuid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileStoragePath = path.join(__dirname, "../FileSaver");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, fileStoragePath);
    },
    filename: (req, file, cb) => {
        const filename = uuidv4() + path.extname(file.originalname);
        cb(null, filename);
    }
});

const uploader = multer({ storage });
export default uploader;
