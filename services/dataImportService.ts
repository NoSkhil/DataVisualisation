import client from "../db";
import { QueryResult } from "pg";
import fs from "fs";

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

const fetchTopSellingModels = async () : Promise<{data?:Object[],err?:any}> => {
try {
    const queryString = "SELECT vm.modelname, s.saledate, SUM(s.unitssold) AS total_units_sold FROM public.sales s JOIN public.vehiclemodels vm ON s.modelid = vm.modelid GROUP BY vm.modelname, s.saledate ORDER BY vm.modelname, s.saledate;"
    
    const {rows:data} = await client.query(queryString);
    return {data};
}
catch(err) {
    console.log(err);
    return {err};
}
}

export const dataImportService = {
    createTables,
    fetchTopSellingModels
};