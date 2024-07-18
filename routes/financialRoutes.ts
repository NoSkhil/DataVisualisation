import { Router } from "express";
import { financialController } from "../controllers/financialController";

const financialRoutes = Router();

financialRoutes.get("/all", financialController.fetchAllFinancialData);
export default financialRoutes;