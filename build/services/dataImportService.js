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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataImportService = void 0;
const db_1 = __importDefault(require("../db"));
const createTables = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const querystring = "";
        const data = yield db_1.default.query(querystring);
        console.log(data);
        return { data };
    }
    catch (err) {
        console.log(err);
        return { err };
    }
});
const fetchTopSellingModels = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryString = "SELECT vm.modelname, s.saledate, SUM(s.unitssold) AS total_units_sold FROM public.sales s JOIN public.vehiclemodels vm ON s.modelid = vm.modelid GROUP BY vm.modelname, s.saledate ORDER BY vm.modelname, s.saledate;";
        const { rows: data } = yield db_1.default.query(queryString);
        return { data };
    }
    catch (err) {
        console.log(err);
        return { err };
    }
});
const monthlySalesByContinent = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryString = `
            SELECT 
                EXTRACT(MONTH FROM saledate) AS period, 
                region AS continent, 
                SUM(unitssold) AS total_units_sold, 
                SUM(saleamount) AS total_sale_amount 
            FROM public.sales 
            GROUP BY EXTRACT(MONTH FROM saledate), region 
            ORDER BY period, continent;
        `;
        const { rows: data } = yield db_1.default.query(queryString);
        return { data };
    }
    catch (err) {
        console.log(err);
        return { err };
    }
});
const annualSalesByContinent = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryString = `
            SELECT 
                EXTRACT(YEAR FROM saledate) AS period, 
                region AS continent, 
                SUM(unitssold) AS total_units_sold, 
                SUM(saleamount) AS total_sale_amount 
            FROM public.sales 
            GROUP BY EXTRACT(YEAR FROM saledate), region 
            ORDER BY period, continent;
        `;
        const { rows: data } = yield db_1.default.query(queryString);
        return { data };
    }
    catch (err) {
        console.log(err);
        return { err };
    }
});
const quarterlySalesByContinent = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryString = `
            SELECT 
                DATE_TRUNC('quarter', saledate) AS period, 
                region AS continent, 
                SUM(unitssold) AS total_units_sold, 
                SUM(saleamount) AS total_sale_amount 
            FROM public.sales 
            GROUP BY DATE_TRUNC('quarter', saledate), region 
            ORDER BY period, continent;
        `;
        const { rows: data } = yield db_1.default.query(queryString);
        return { data };
    }
    catch (err) {
        console.log(err);
        return { err };
    }
});
const fetchAllSalesData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryString = `
        SELECT 
          saledate,
          region AS continent,
          country,
          state,
          unitssold,
          saleamount,
          models.modelname
        FROM public.sales
        JOIN vehiclemodels as models
        ON sales.modelid = models.modelid
        ORDER BY saledate, continent;
      `;
        const { rows: data } = yield db_1.default.query(queryString);
        return { data };
    }
    catch (err) {
        console.log(err);
        return { err };
    }
});
exports.dataImportService = {
    createTables,
    fetchTopSellingModels,
    quarterlySalesByContinent,
    annualSalesByContinent,
    monthlySalesByContinent,
    fetchAllSalesData,
};
