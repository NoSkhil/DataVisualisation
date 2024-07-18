import express,{Request, Response} from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import client from './db';
import dataImportRoutes from './routes/dataImportRoutes';
import hrRoutes from './routes/hrRoutes';
import financialRoutes from './routes/financialRoutes';
import path from "path";
import manufacturingRoutes from './routes/manufacturingRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.get('/ping', (req, res) => {
    res.status(200).send("success");
  });

app.use("/data", dataImportRoutes);
app.use('/hr', hrRoutes);
app.use('/financial', financialRoutes);
app.use('/manufacturing', manufacturingRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, async ()=>{
    client.connect((err:any)=>{
        if(err) console.log(err);
        else {
            console.log("Connected to supabase postgres db");
            console.log(`DV server active on port ${PORT}`);
        }
    });
});

