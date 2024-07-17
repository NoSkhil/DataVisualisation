"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const hrController_1 = require("../controllers/hrController");
const hrRoutes = (0, express_1.Router)();
hrRoutes.get("/all", hrController_1.hrController.fetchAllHRData);
exports.default = hrRoutes;
