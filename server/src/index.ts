import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";

import cardRouter from "./routers/cardRouter";

// Config
const app: Express = express();
app.use(express.json());
app.use(cors());

// Router
app.use("/card", cardRouter);

// Connect to DB and listen
mongoose
    .connect(
        "mongodb+srv://zetomis:memaybeo@cluster.o5cp4ko.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
        app.listen(3001, () => {
            console.log("Connected to DB and start listening");
        });
    });
