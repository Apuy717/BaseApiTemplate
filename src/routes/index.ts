import { Router } from "express";
import UserRoutes from "./UserRoutes";

class indexRoutes {
  public useRoutes: Router;
  constructor() {
    this.useRoutes = Router();
    this.useRoutes.use("/user", UserRoutes);
  }
}

export default new indexRoutes().useRoutes;
