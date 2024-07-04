"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dataImportController_1 = require("../controllers/dataImportController");
const dataImportRoutes = (0, express_1.Router)();
dataImportRoutes.get("/create-tables", dataImportController_1.dataImportController.createTables);
dataImportRoutes.get("/fetchTopSellingModels", dataImportController_1.dataImportController.fetchTopSellingModels);
exports.default = dataImportRoutes;
