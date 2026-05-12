const AppartementCtrl = require('../controllers/AppartementCtrl')
const adminAuth = require('../middleware/adminAuth')
const auth = require('../middleware/auth')
const router = require('express').Router()

router.get('/', AppartementCtrl.getAppartements)
router.post('/', auth, adminAuth, AppartementCtrl.createAppartement)
router.put('/:id', auth, adminAuth, AppartementCtrl.updateAppartement)
router.delete('/:id', auth, adminAuth, AppartementCtrl.deleteAppartement)
router.put('/comment/:id', auth, AppartementCtrl.addComment)
router.put('/comment/remove/:id', auth, adminAuth, AppartementCtrl.removeComment)
router.patch('/:id', auth, adminAuth, AppartementCtrl.updateReservation)


module.exports = router