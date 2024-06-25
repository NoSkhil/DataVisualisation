import express,{Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import client from './db';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req:Request,res:Response)=> res.status(200).send({data:"DV server."}));

app.listen(8000, async ()=>{
    client.connect((err:any)=>{
        if(err) console.log(err);
        else {
            console.log("Connected to supabase postgres db");
            console.log("DV server active on port 8000");
        }
    });
});

