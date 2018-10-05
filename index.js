exports.helloWorld = function helloWorld(req, res) {
	const message = `Hello ${req.body.name}`
	res.stat(200).send(message)
}
