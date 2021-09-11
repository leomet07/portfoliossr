const mongoose = require("mongoose");

const AboutmeSchema = new mongoose.Schema({
	text: {
		type: String,
		required: true,
	},
});

const aboutmeModel = mongoose.model("Aboutme", AboutmeSchema);

module.exports = aboutmeModel;
