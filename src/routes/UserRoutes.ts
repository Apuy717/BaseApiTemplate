import UserController from "../controllers/UserController";
import BaseRoute from "./BaseRoutes";

class UserRoutes extends BaseRoute {
  public routes(): void {
    this.router.get("/", UserController.index);
    this.router.post("/", UserController.index);
    this.router.put("/", UserController.index);
    this.router.delete("/", UserController.index);
  }
}

export default new UserRoutes().router;
