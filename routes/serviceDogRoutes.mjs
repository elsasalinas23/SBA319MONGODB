import express from "express";
import serviceDog from "../models/serviceDogSchema.mjs";
const router = express.Router();

// Get animals by habitat
router.get("/habitat/:hab", async (req, res) => {
  let result = await serviceDog.inHabitat(req.params.hab);

  res.json(result);
});

// Get animals with a similar habitat
router.get("/eco/:id", async (req, res) => {
  try {
    let animal = await serviceDog.findById(req.params.id);

    let result = await animal.getOthersInHab();

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `❌ Error - ${err.message}` });
  }
});

// Create
router
  .route("/")
  .post(async (req, res) => {
    try {
      // Perform Action
      let newserviceDog = await serviceDog.create(req.body);

      // Return Response
      res.json(newserviceDog);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: `❌ Error - ${err.message}` });
    }
  })
  // Read
  .get(async (req, res) => {
    try {
      let allserviceDog = await serviceDog.find({});

      res.json(allserviceDog);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: `❌ Error - ${err.message}` });
    }
  });

// Update
router
  .route("/:id")
  .put(async (req, res) => {
    try {
      let updatedserviceDog = await serviceDog.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true } // Option to allow newly updated object to be sent back
      );

      res.json(updatedserviceDog);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: `❌ Error - ${err.message}` });
    }
  })
  // Deleted
  .delete(async (req, res) => {
    try {
      let deleteserviceDog = await serviceDog.findByIdAndDelete(req.params.id);

      res.json(deleteserviceDog);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ msg: `❌ Error - ${err.message}` });
    }
  });

export default router;