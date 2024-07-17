import { Router } from "express";
import { hrController } from "../controllers/hrController";

const hrRoutes = Router();

hrRoutes.get("/all", hrController.fetchAllHRData);
export default hrRoutes;