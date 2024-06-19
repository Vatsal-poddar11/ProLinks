const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    dateOfBirth:{
        type: String,
    },
    gender: {
		type: String,
	},
    contactNumber: {
		type: Number,
		trim: true,
	},
    about: {
		type: String,
		trim: true,
	},
    profileLinks: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Links"
    }
}, { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);

