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
exports.hrController = void 0;
const hrService_1 = require("../services/hrService");
const fetchAllHRData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield hrService_1.hrService.fetchAllHRData();
        return res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
});
exports.hrController = {
    fetchAllHRData
};
