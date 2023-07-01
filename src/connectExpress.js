import express from "express";
import bodyParser from "body-parser";
import { CreateBankAccountService, GetAllBankAccountsService } from "./services/BankAccountServices.js"

const connectExpress = () => {
    const app = express();

    app.use(bodyParser.json());

    app.listen(2001, () => {
        console.log("Server is running on port 2001");

    });

    app.post("/bankAccount", CreateBankAccountService)

    app.get("/bankAccount", GetAllBankAccountsService)
}

export default connectExpress