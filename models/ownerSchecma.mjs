import mongoose from "mongoose";

const OwnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  city: { type: String }
});

OwnerSchema.index({ city: 1 }); // small, sensible index

export default mongoose.model("Owner", OwnerSchema);
