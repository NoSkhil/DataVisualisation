import { Router } from "express";
import { dataImportController } from "../controllers/dataImportController";

const dataImportRoutes = Router();

dataImportRoutes.get("/create-tables", dataImportController.createTables);
dataImportRoutes.get("/fetchTopSellingModels", dataImportController.fetchTopSellingModels);
dataImportRoutes.get("/sales/continent/month", dataImportController.monthlySalesByContinent);
dataImportRoutes.get("/sales/continent/annual", dataImportController.annualSalesByContinent);
dataImportRoutes.get("/sales/continent/quarter", dataImportController.quarterlySalesByContinent);
dataImportRoutes.get("/sales/continent/all", dataImportController.fetchAllSalesData);
export default dataImportRoutes;