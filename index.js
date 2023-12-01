import express from "express";
import dotenv from "dotenv";
import { person } from "./Routes/person.router.js";
dotenv.config();

const app = express();

app.use(person);

app.listen(process.env.PORT, () => {
  console.log(`Server kører på port http://localhost:${process.env.PORT}`);
});
