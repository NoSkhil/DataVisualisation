import { Router } from "express";
import { dataImportController } from "../controllers/dataImportController";

const dataImportRoutes = Router();

dataImportRoutes.get("/create-tables", dataImportController.createTables);
dataImportRoutes.get("/fetchTopSellingModels", dataImportController.fetchTopSellingModels);

export default dataImportRoutes;