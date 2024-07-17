import { Response, Request, NextFunction } from 'express';
import { hrService } from '../services/hrService';

const fetchAllHRData = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { data } = await hrService.fetchAllHRData();
        return res.status(200).send(data);
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
};

export const hrController = {
    fetchAllHRData
};
