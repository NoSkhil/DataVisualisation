import { Router } from "express";
import { dataImportController } from "../controllers/dataImportController";

const dataImportRoutes = Router();

dataImportRoutes.get("/create-tables", dataImportController.createTables);

export default dataImportRoutes;