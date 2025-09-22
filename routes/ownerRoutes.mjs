import express from "express";
import Owner from "../models/ownerSchema.mjs";

const router = express.Router();

// /api/owners
router.route("/")
  .get(async (req, res, next) => {
    try { res.json(await Owner.find({})); }
    catch (err) { next(err); }
  })
  .post(async (req, res, next) => {
    try { res.status(201).json(await Owner.create(req.body)); }
    catch (err) { next(err); }
  });

router.route("/:id")
  .get(async (req, res, next) => {
    try { res.json(await Owner.findById(req.params.id)); }
    catch (err) { next(err); }
  })
  .put(async (req, res, next) => {
    try {
      res.json(await Owner.findByIdAndUpdate(req.params.id, req.body, { new:true }));
    } catch (err) { next(err); }
  })
  .delete(async (req, res, next) => {
    try { res.json(await Owner.findByIdAndDelete(req.params.id)); }
    catch (err) { next(err); }
  });

export default router;
