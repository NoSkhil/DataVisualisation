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

const monthlySalesByContinent = async (): Promise<{data?: Object[], err?: any}> => {
    try {
        const queryString = `
            SELECT 
                EXTRACT(MONTH FROM saledate) AS period, 
                region AS continent, 
                SUM(unitssold) AS total_units_sold, 
                SUM(saleamount) AS total_sale_amount 
            FROM public.sales 
            GROUP BY EXTRACT(MONTH FROM saledate), region 
            ORDER BY period, continent;
        `;
        
        const {rows: data} = await client.query(queryString);
        return {data};
    }
    catch(err) {
        console.log(err);
        return {err};
    }
}

const annualSalesByContinent = async (): Promise<{data?: Object[], err?: any}> => {
    try {
        const queryString = `
            SELECT 
                EXTRACT(YEAR FROM saledate) AS period, 
                region AS continent, 
                SUM(unitssold) AS total_units_sold, 
                SUM(saleamount) AS total_sale_amount 
            FROM public.sales 
            GROUP BY EXTRACT(YEAR FROM saledate), region 
            ORDER BY period, continent;
        `;
        
        const {rows: data} = await client.query(queryString);
        return {data};
    }
    catch(err) {
        console.log(err);
        return {err};
    }
}

const quarterlySalesByContinent = async (): Promise<{data?: Object[], err?: any}> => {
    try {
        const queryString = `
            SELECT 
                DATE_TRUNC('quarter', saledate) AS period, 
                region AS continent, 
                SUM(unitssold) AS total_units_sold, 
                SUM(saleamount) AS total_sale_amount 
            FROM public.sales 
            GROUP BY DATE_TRUNC('quarter', saledate), region 
            ORDER BY period, continent;
        `;
        
        const {rows: data} = await client.query(queryString);
        return {data};
    }
    catch(err) {
        console.log(err);
        return {err};
    }
}

const fetchAllSalesData = async (): Promise<{data?: Object[], err?: any}> => {
    try {
      const queryString = `
        SELECT 
          saledate,
          region AS continent,
          country,
          state,
          unitssold,
          saleamount
        FROM public.sales
        ORDER BY saledate, continent;
      `;
      const { rows: data } = await client.query(queryString);
      return { data };
    } catch (err) {
      console.log(err);
      return { err };
    }
  };

export const dataImportService = {
    createTables,
    fetchTopSellingModels,
    quarterlySalesByContinent,
    annualSalesByContinent,
    monthlySalesByContinent,
    fetchAllSalesData,
};