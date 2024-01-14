import { createServer } from "node:http";
import "./app/helper/env.load.js";
import app from "./app/index.app.js";

const server = createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Le bonheur ? c'est par ici => http://localhost:${port}`);
});
