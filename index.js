exports.helloWorld = function helloWorld(req, res) {
	const message = `Hello ${req.body.name}`
	res.status(200).send(message)
}
