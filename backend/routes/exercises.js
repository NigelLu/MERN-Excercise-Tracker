const router = require("express").Router();
const Exercise = require("../models/exercise.model");

router.route("/").get((req, res) => {
	Exercise.find()
		.then((exercises) => res.json(exercises))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
	const username = req.body.username;
	const description = req.body.description;
	const duration = Number(req.body.duration);
	const date = Date.parse(req.body.date);

	const newExercise = new Exercise({
		username,
		description,
		duration,
		date,
	});

	newExercise
		.save()
		.then(() => res.send("Exercise added!"))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").get((req, res) => {
	Exercise.findById(req.params.id)
		.then((exercise) => res.json(exercise))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").delete((req, res) => {
	Exercise.findByIdAndDelete(req.params.id)
		.then((exercise) => res.send(`Deleted\n${exercise}`))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/update/:id").post((req, res) => {
	Exercise.findByIdAndUpdate(
		req.params.id,
		{
			username: req.body.username,
			description: req.body.description,
			duration: Number(req.body.duration),
			date: Date.parse(req.body.date),
		},
		(err, docs) => {
			if (err) {
				res.status(400).json(`Error: ${err}`);
			} else {
				res.send(`Updated\n${docs}`);
			}
		}
	);
});

module.exports = router;
