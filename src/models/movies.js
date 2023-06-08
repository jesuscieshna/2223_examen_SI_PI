import mongoose from "mongoose"

const movieSchema = new mongoose.Schema({
    adult: Boolean,
    backdrop_path: String,
    genre_ids: [Number],
    id: {
        type: Number,
        require: true,
        unique: true
    },
    original_language: String,
    original_title:{
        type: String,
        require: true
    },
    overview:{
        type: String,
        require: true
    },
    popularity: Number,
    poster_path: String,
    release_date:{
        type: String,
        require: true
    },
    title:{
        type: String,
        require: true
    },
    video: Boolean,
    vote_average: Number,
    vote_count: Number
},
{
    versionKey: false,
    timestamps: true,
})

const movieModel = mongoose.model('movies', movieSchema)

export default movieModel