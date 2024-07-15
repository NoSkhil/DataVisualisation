import { Response, Request, NextFunction } from 'express';
import { dataImportService } from '../services/dataImportService';

const createTables = async (req: Request, res: Response): Promise<Response> => {
    const data = await dataImportService.createTables();
    return res.status(200).send(data);
};

const fetchTopSellingModels = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { data } = await dataImportService.fetchTopSellingModels();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};

const monthlySalesByContinent = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { data } = await dataImportService.monthlySalesByContinent();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};

const annualSalesByContinent = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { data } = await dataImportService.annualSalesByContinent();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};

const quarterlySalesByContinent = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { data } = await dataImportService.quarterlySalesByContinent();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};

const fetchAllSalesData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { data } = await dataImportService.fetchAllSalesData();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};

export const dataImportController = {
    createTables,
    fetchTopSellingModels,
    monthlySalesByContinent,
    annualSalesByContinent,
    quarterlySalesByContinent,
    fetchAllSalesData
};
