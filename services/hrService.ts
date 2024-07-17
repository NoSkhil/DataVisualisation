import client from "../db";
import { QueryResult } from "pg";

const fetchAllHRData = async (): Promise<{ data?: any, err?: any }> => {
    try {

        const querystring = `
        SELECT 
        recruitmentid,
        position,
        daystofill,
        datefilled,
        totalcost,
        department,
        retained,
        retentioncheckdate,
        -- Aggregate data
        COUNT(*) AS numberofhires,
        SUM(CASE WHEN retained THEN 1 ELSE 0 END) AS hires_retained,
        (SUM(CASE WHEN retained THEN 1 ELSE 0 END)::decimal / COUNT(*)) * 100 AS retention_rate
      FROM 
        public.recruitment
      GROUP BY 
        recruitmentid, 
        position, 
        daystofill, 
        datefilled, 
        totalcost, 
        department, 
        retained, 
        retentioncheckdate
      ORDER BY 
        recruitmentid;
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