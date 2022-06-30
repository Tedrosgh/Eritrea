import Mezmur from "../models/mezmurs.js";
export const getMezmurs = async (req, res, next) => {
  try {
    const mezmurs = await Mezmur.find(req.query);
    res.status(200).send(mezmurs);
  } catch (err) {
    next(err);
  }
};

export const addMezmur = async (req, res, next) => {
  try {
    const newMezmur = new Mezmur(req.body);
    await newMezmur.save();
    res.status(201).send(newMezmur);
  } catch (err) {
    next(err);
  }
};

export const getSingleMezmur = async (req, res, next) => {
  try {
    const { id } = req.params;
    const mezmur = await Mezmur.findById(id);
        if (!mezmur) throw new createError.NotFound();
        res.status(200).send(mezmur);
  }catch (err){
    next(err)
  }
};