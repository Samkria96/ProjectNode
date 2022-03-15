import { Router } from "express";
import path = require("path");
import { UserController } from "./UserController";

class userRouter {
  public router: Router;
  constructor() {

    this.router = Router()
    this.getRouters()
    this.postRouters()
    this.putRouters()
    this.patchRouters()
    this.deleteRouters()

  }

  getRouters() {
    this.router.get('/login', UserController.login)

  }

  postRouters() {

  }
  putRouters() {

  }
  patchRouters() {

  }
  deleteRouters() {

  }

}
export default new userRouter().router;