import mongoose from "mongoose";

const ServiceDogschema = new mongoose.Schema({
    name:{type: String, required: true},
    species: {type: String, required: true},
    age: {type: Number, required: true},
    habitat: {type: String,
        enum: { values: ["apartment", "house","farmhouse","sharedroom"],required : true,},
});



ServiceDogschema.index({species: 1});
ServiceDogschema.index({habitat: 1});

export default mongoose.model("Smart Puppies",ServiceDogschema);

