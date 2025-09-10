import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const pub = path.join(__dirname, "public");

app.use(express.static(pub));

app.get("/healthz", (req, res) => res.status(200).send("ok"));

app.get("/", (req, res) => {
  res.sendFile(path.join(pub, "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`UI running on http://localhost:${port}`));
