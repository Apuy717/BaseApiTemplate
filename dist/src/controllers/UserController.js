"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    /**
     * index
     */
    index(req, res) {
        return res.status(200).send({ status: true, msg: "Success get", err: null, data: null });
    }
    create(req, res) {
        return res.status(200).send({ status: true, msg: "Success create", err: null, data: null });
    }
    update(req, res) {
        return res.status(200).send({ status: true, msg: "Success update", err: null, data: null });
    }
    delete(req, res) {
        return res.status(200).send({ status: true, msg: "Success delete", err: null, data: null });
    }
}
exports.default = new UserController();
