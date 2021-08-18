const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		min: 4,
		max: 30,
	},
	description: {
		type: String,
		required: true,
		min: 4,
		max: 500,
	},
	images: {
		type: Array,
		required: true,
	},
	gh_url: {
		type: String,

		min: 4,
		max: 500,
	},
	web_url: {
		type: String,

		min: 4,
		max: 500,
	},
	index: {
		type: Number,
	},
});

const projectModel = mongoose.model("Project", projectSchema);

module.exports = projectModel;
