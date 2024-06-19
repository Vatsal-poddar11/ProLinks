const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");

const {updateLinks, updateProfile, getAllUserDetails, deleteAccount, updateDisplayPicture} = require("../controllers/Profile");

router.put("/updateLinks", auth, updateLinks);
router.put("/updateProfile", auth, updateProfile);
router.get("/getUserDetails", auth, getAllUserDetails);
router.delete("/deleteProfile", auth, deleteAccount);
router.put("/updateDisplayPicture", auth, updateDisplayPicture);

module.exports = router;