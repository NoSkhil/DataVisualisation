import client from "../db";
import { QueryResult } from "pg";

const fetchAllFinancialData = async (): Promise<{ data?: any, err?: any }> => {
    try {

        const querystring = `SELECT * from public.financials;`;

        const {rows:data} = await client.query(querystring);
        return { data };
    }
    catch (err) {
        console.log(err);
        return { err };
    }
};

export const financialService = {
    fetchAllFinancialData
};