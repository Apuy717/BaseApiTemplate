import IControllers from "./InterfaceControllers";
import { Request, Response } from "express";

class UserController implements IControllers {
  /**
   * index
   */
  public index(req: Request, res: Response): Response {
    return res.status(200).send({ status: true, msg: "Success get", err: null, data: null });
  }
  public create(req: Request, res: Response): Response {
    return res.status(200).send({ status: true, msg: "Success create", err: null, data: null });
  }
  public update(req: Request, res: Response): Response {
    return res.status(200).send({ status: true, msg: "Success update", err: null, data: null });
  }
  public delete(req: Request, res: Response): Response {
    return res.status(200).send({ status: true, msg: "Success delete", err: null, data: null });
  }
}

export default new UserController();
