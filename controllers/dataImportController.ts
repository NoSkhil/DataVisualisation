import {Response, Request, NextFunction} from 'express';
import {dataImportService} from "../services/dataImportService";

const createTables = async (req:Request,res:Response) : Promise<Response> => {
    const data = await dataImportService.createTables();
    return res.status(200).send(data);
}

export const dataImportController = {
    createTables
};