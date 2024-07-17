import client from "../db";
import { QueryResult } from "pg";

const fetchAllHRData = async (): Promise<{ data?: any, err?: any }> => {
    try {

        const querystring = `
    SELECT
        datefilled AS period,
        position AS department,
        totalcost,
        numberofhires,
        totalcost / numberofhires AS cost_per_hire
    FROM
        public.recruitment
    ORDER BY
        datefilled,
        position;
    
    `;

        const {rows:data} = await client.query(querystring);
        return { data };
    }
    catch (err) {
        console.log(err);
        return { err };
    }
};

export const hrService = {
    fetchAllHRData
};