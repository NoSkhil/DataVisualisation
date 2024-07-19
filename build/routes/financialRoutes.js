"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const financialController_1 = require("../controllers/financialController");
const financialRoutes = (0, express_1.Router)();
financialRoutes.get("/all", financialController_1.financialController.fetchAllFinancialData);
exports.default = financialRoutes;
