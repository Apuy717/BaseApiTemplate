import express, { application } from "express";
import bodyParser from "body-parser";
import { config as dotenv } from "dotenv";
import Index from "./routes/index";

class App {
  public app = application;
  constructor() {
    this.app = express();
    this.isPlugin();
    this.routes();
    dotenv();
  }

  protected isPlugin(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  protected routes(): void {
    this.app.use(Index);
  }
}

const app = new App().app;
app.listen(process.env.PORT, () => {
  console.log(`⚡️[server] running on PORT ${process.env.PORT}`);
});
