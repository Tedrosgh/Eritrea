import express from "express";

//import { Router } from "express";

import { getMezmurs, addMezmur, getSingleMezmur } from "../controllers/mezmurs.js";

const mezmursRouter = express.Router();

mezmursRouter.route('/').get(getMezmurs).post(addMezmur);
// mezmursRouter.get('/', getMezmurs);
// mezmursRouter.post('/', addMezmur);
mezmursRouter.route('/:id').get(getSingleMezmur);

export default mezmursRouter;
