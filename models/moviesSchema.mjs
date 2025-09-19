import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    genres:{type: String, required: true},
    rating: {type: Number, required: true},
    actors: {type: String,unique},
    filmduration: {type: Number},
    directors: [Array],

});


export default mongoose.model("Movies",movieSchema);