import client from "../db";
import { QueryResult } from "pg";

const fetchAllManufacturingData = async (): Promise<{ data?: any, err?: any }> => {
    try {

        const querystring = `SELECT * from public.manufacturing;`;

        const {rows:data} = await client.query(querystring);
        return { data };
    }
    catch (err) {
        console.log(err);
        return { err };
    }
};

export const manufacturingService = {
    fetchAllManufacturingData
};