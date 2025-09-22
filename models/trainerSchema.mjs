import mongoose from "mongoose";

const TrainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String },          // e.g., "obedience", "therapy"
  yearsExperience: { type: Number, min: 0 } // simple validation rule
});

TrainerSchema.index({ specialty: 1 }); // small, sensible index

export default mongoose.model("Trainer", TrainerSchema);
