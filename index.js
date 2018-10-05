exports.helloWorld = function helloWorld(req, res) {
	const message = `Hello ${req.body.name}, what the fuck bro ?`
	res.status(200).send(message)
}
