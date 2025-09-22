import express from "express";
import Trainer from "../models/trainerSchema.mjs";

const router = express.Router();

// /api/trainers
router.route("/")
  .get(async (req, res, next) => {
    try { res.json(await Trainer.find({})); }
    catch (err) { next(err); }
  })
  .post(async (req, res, next) => {
    try { res.status(201).json(await Trainer.create(req.body)); }
    catch (err) { next(err); }
  });

router.route("/:id")
  .get(async (req, res, next) => {
    try { res.json(await Trainer.findById(req.params.id)); }
    catch (err) { next(err); }
  })
  .put(async (req, res, next) => {
    try {
      res.json(await Trainer.findByIdAndUpdate(req.params.id, req.body, { new:true }));
    } catch (err) { next(err); }
  })
  .delete(async (req, res, next) => {
    try { res.json(await Trainer.findByIdAndDelete(req.params.id)); }
    catch (err) { next(err); }
  });

export default router;
