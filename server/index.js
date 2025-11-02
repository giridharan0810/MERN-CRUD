import Config from "./config/Config.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/userRoutes.js";

dotenv.config();
Config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server is running in ${PORT}`));
