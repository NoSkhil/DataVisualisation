"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const manufacturingConroller_1 = require("../controllers/manufacturingConroller");
const manufacturingRoutes = (0, express_1.Router)();
manufacturingRoutes.get("/all", manufacturingConroller_1.manufacturingController.fetchAllManufacturingData);
exports.default = manufacturingRoutes;
