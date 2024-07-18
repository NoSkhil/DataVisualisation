import { Router } from "express";
import { manufacturingController } from "../controllers/manufacturingConroller";

const manufacturingRoutes = Router();

manufacturingRoutes.get("/all", manufacturingController.fetchAllManufacturingData);
export default manufacturingRoutes;