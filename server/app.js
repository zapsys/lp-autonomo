import express from "express";
import cors from "cors";

import exportRoutes from "./routes/export.js";

const app = express();

app.use(cors());

app.use(
  express.json({
    limit: "50mb",
  }),
);

app.use("/api", exportRoutes);

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000");
});
