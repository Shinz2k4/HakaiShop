const express = require('express');
const { registerUser, loginUser, getUserProfile, forgotPassword, resetPassword, updateUserProfile } = require('../controllers/userControllers');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser); 
router.get('/profile', protect, getUserProfile); 
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.put('/profile',protect ,updateUserProfile); 

module.exports = router;