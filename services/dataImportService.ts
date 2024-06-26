import client from "../db";

const createTables = async () : Promise<{data?:string,err?:Error}> => {
    try{
        return {data:"success"};
    }
    catch(err) {
        return {err};
    }
};

export const dataImportService = {
    createTables
};