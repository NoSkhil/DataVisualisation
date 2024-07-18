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
exports.financialController = void 0;
const financialService_1 = require("../services/financialService");
const fetchAllFinancialData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield financialService_1.financialService.fetchAllFinancialData();
        return res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
});
exports.financialController = {
    fetchAllFinancialData
};
