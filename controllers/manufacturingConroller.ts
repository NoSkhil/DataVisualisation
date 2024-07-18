import { Response, Request, NextFunction } from 'express';
import { manufacturingService } from '../services/manufacturingService';

const fetchAllManufacturingData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { data } = await manufacturingService.fetchAllManufacturingData();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};

export const manufacturingController = {
    fetchAllManufacturingData
};
