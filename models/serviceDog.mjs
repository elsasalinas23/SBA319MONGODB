import mongoose from "mongoose";

const ServiceDogschema = new mongoose.Schema({
    name:{type: String, required: true},
    species: {type: String, required: true},
    age: {type: Number, required: true},
    habitat: {type: String},

});


export default mongoose.model("Smart Puppies",ServiceDogschemam);