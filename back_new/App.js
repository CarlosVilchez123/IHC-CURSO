import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import itemRoutes from "./routes/itemRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use("/api/", itemRoutes);

export default app;
