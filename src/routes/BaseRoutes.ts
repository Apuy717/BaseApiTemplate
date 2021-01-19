import { Router } from "express";
import iRouter from "./InterfaceRoutes";

abstract class BaseRoute implements iRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  abstract routes(): void;
}

export default BaseRoute;
