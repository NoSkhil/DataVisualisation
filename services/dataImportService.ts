import client from "../db";
import { QueryResult } from "pg";

const createTables = async () : Promise<{data?:QueryResult<any>,err?:any}> => {
    try{

        const querystring = "";
        
        const data = await client.query(querystring);
        console.log(data);
        return {data};
    }
    catch(err) {
        console.log(err);
        return {err};
    }
};

export const dataImportService = {
    createTables
};