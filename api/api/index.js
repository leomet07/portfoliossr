const router = require("express").Router();
const Project = require("../models/Project");

// Get all the cards, or search by params in request body.

console.log("Loaded api");

router.get("/get_projects", async (req, res) => {
	const skip = req.body.skip || 0;

	const projects = await Project.find({})
		.skip(skip)
		.limit(10);

	projects.sort((a, b) => {
		return a.index - b.index;
	});
	res.json(projects);
});

module.exports.router = router;
