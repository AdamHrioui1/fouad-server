const mongoose = require('mongoose');

const AppartementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    main_image: {
        type: Object,
        required: true
    },
    images: {
        type: Array,
        default: [],
        required: true
    },
    comments: {
        type: Array,
        default: [],
    },
    gests_number: {
        type: Number,
        default: 2,
    },
    bedroom: {
        type: Number,
        default: 1,
    },
    bed: {
        type: Number,
        default: 1,
    },
    bath: {
        type: Number,
        default: 1,
    },
    place_offers: {
        type: Array,
        default: [],
    },
    available_at: {
        type: Date
    },
    available: {
        type: Boolean,
        default: true
    },
    reserved_from: {
        type: Date,
    },
    reserved_to: {
        type: Date,
    },
}, {
    timestamps: true
})

const Appartement = mongoose.model('Appartement', AppartementSchema)
module.exports = Appartement