import { Router } from "express"
import { users } from "../controllers"

Router.route("/users").get(users.index)

export default router
