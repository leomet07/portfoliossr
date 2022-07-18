const router = require("express").Router();
const Project = require("../models/Project");
const Aboutme = require("../models/Aboutme");

// Get all the cards, or search by params in request body.

console.log("Loaded api");

router.get("/get_projects", async (req, res) => {
	const skip = req.body.skip || 0;

	const projects = await Project.find({}).skip(skip).limit(20);

	projects.sort((a, b) => {
		return a.index - b.index;
	});
	res.json(projects);
});

router.get("/get_aboutme", async (req, res) => {
	const aboutme = (await Aboutme.find({}))[0];

	res.json(aboutme);
});

module.exports.router = router;
