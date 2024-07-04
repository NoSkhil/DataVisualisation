import {Response, Request, NextFunction} from 'express';
import {dataImportService} from "../services/dataImportService";

const createTables = async (req:Request,res:Response) : Promise<Response> => {
    const data = await dataImportService.createTables();
    return res.status(200).send(data);
}

const fetchTopSellingModels = async (req:Request,res:Response) : Promise<Response> => {
    try {
    const {data} = await dataImportService.fetchTopSellingModels();
    return res.status(200).send(data);
    }
    catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}
export const dataImportController = {
    createTables,
    fetchTopSellingModels
};