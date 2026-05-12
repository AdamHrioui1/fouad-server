const Appartement = require("../models/AppartementModel")

const AppartementCtrl = {
    getAppartements: async (req, res) => {
        try {
            const appartements = await Appartement.find()
            return res.status(200).json({ success: true, data: appartements })
        } catch (err) {
            return res.status(500).json({ success: false, msg: err.message })
        }
    },
    createAppartement: async (req, res) => {
        try {
            const { title, price, description, images, gests_number, bedroom, bed, bath, place_offers, main_image } = req.body
            const appartement = new Appartement({
                title, price, description, images, gests_number, bedroom, bed, bath, place_offers, main_image
            })
            await appartement.save()

            return res.status(200).json({ success: true, data: appartement })
        } catch (err) {
            return res.status(500).json({ success: false, msg: err.message })
        }
    },
    addComment: async (req, res) => {
        try {
            const { id } = req.params
            const { user, comment } = req.body
            const currentAppartement = await Appartement.findById({ _id: id })
            const appartement = await Appartement.findByIdAndUpdate({ _id: id }, {
                comments: [...currentAppartement.comments, { id: (new Date().getTime()).toString(), name: user.name, email: user.email, comment: comment }]
            })

            return res.status(200).json({ success: true, data: appartement })
        } catch (err) {
            return res.status(500).json({ success: false, msg: err.message })
        }
    },
    removeComment: async (req, res) => {
        try {
            const { id } = req.params
            const { comment_id } = req.body
            const currentAppartement = await Appartement.findById({ _id: id })
            let comments = currentAppartement.comments.filter(comment => comment.id !== comment_id)
            
            let appartement = await Appartement.findByIdAndUpdate({ _id: id }, {
                comments: comments
            })

            return res.status(200).json({ success: true, data: appartement })
        } catch (err) {
            return res.status(500).json({ success: false, msg: err.message })
        }
    },
    updateAppartement: async (req, res) => {
        try {
            const { id } = req.params
            const { title, price, description, images, gests_number, bedroom, bed, bath, place_offers, main_image } = req.body
            const appartement = await Appartement.findByIdAndUpdate({ _id: id }, {
                title, price, description, images, gests_number, bedroom, bed, bath, place_offers, main_image
            })

            return res.status(200).json({ success: true, data: appartement })
        } catch (err) {
            return res.status(500).json({ success: false, msg: err.message })
        }
    },
    updateReservation: async (req, res) => {
        try {
            const { id } = req.params
            const { reserved_from, reserved_to } = req.body
            const appartement = await Appartement.findByIdAndUpdate({ _id: id }, {
                reserved_from: reserved_from, reserved_to: reserved_to
            })

            return res.status(200).json({ success: true, data: appartement })
        } catch (err) {
            return res.status(500).json({ success: false, msg: err.message })
        }
    },
    deleteAppartement: async (req, res) => {
        try {
            const { id } = req.params
            await Appartement.findByIdAndDelete({ _id: id })
            return res.status(200).json({ success: true, data: 'Appartement deleted successfuly!' })
        } catch (err) {
            return res.status(500).json({ success: false, msg: err.message })
        }
    },
}

module.exports = AppartementCtrl