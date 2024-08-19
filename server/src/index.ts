import express, { Request, Response } from "express"
import mongoose from "mongoose";
import morgan from "morgan";
import taskRoutes from "./routes/taskRoutes";
import cors from "cors";


const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/",(req:Request,res:Response)=>{
res.json({nik:"hello"})
})




app.use('/tasks', taskRoutes );


    const PORT = 3000;
  try {

    mongoose.connect("mongodb+srv://hellnikk:dewil1234@ecom.oknbpnh.mongodb.net/to-do").then(()=>{console.log(`listening on port ${PORT}`);
        app.listen(3000) })

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
