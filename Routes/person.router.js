import express from "express";
import db from "../Config/db.config.js";
import personController from "../controllers/person.controller.js";

const router = express.Router();

const controller = new personController();

router.get("/songs", (req, res) => {
  db.query(
    `SELECT id,Fornavn,Mellemnavn,Email
                  FROM student`,
    (error, result) => {
      res.json(result);
    }
  );
});
router.get("/", (req, res) => {
  res.send("Velkommen til min hjemmeside");
  personController.list();
});

export { router as person };
