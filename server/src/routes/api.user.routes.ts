import { Router } from "express";
import User from "~/controllers/users.controllers";

const router = Router();

router.get('/user/getAll', User.getAll);

export default router;



