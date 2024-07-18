import { Response, Request, NextFunction } from 'express';
import { financialService } from '../services/financialService';

const fetchAllFinancialData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { data } = await financialService.fetchAllFinancialData();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};

export const financialController = {
    fetchAllFinancialData
};
