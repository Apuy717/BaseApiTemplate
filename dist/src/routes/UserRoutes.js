"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = __importDefault(require("../controllers/UserController"));
const BaseRoutes_1 = __importDefault(require("./BaseRoutes"));
class UserRoutes extends BaseRoutes_1.default {
    routes() {
        this.router.get("/", UserController_1.default.index);
        this.router.post("/", UserController_1.default.index);
        this.router.put("/", UserController_1.default.index);
        this.router.delete("/", UserController_1.default.index);
    }
}
exports.default = new UserRoutes().router;
