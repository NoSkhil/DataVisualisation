"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataImportController = void 0;
const dataImportService_1 = require("../services/dataImportService");
const createTables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield dataImportService_1.dataImportService.createTables();
    return res.status(200).send(data);
});
const fetchTopSellingModels = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield dataImportService_1.dataImportService.fetchTopSellingModels();
        return res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
});
const monthlySalesByContinent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield dataImportService_1.dataImportService.monthlySalesByContinent();
        return res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
});
const annualSalesByContinent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield dataImportService_1.dataImportService.annualSalesByContinent();
        return res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
});
const quarterlySalesByContinent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield dataImportService_1.dataImportService.quarterlySalesByContinent();
        return res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
});
const fetchAllSalesData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield dataImportService_1.dataImportService.fetchAllSalesData();
        return res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
});
exports.dataImportController = {
    createTables,
    fetchTopSellingModels,
    monthlySalesByContinent,
    annualSalesByContinent,
    quarterlySalesByContinent,
    fetchAllSalesData
};
