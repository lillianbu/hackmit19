const fetch = require('node-fetch');

module.exports = (app) => {

	let title;

	app.post('/record', (req, res) => {

		title = req.body.title;

		res.redirect('/record')
	})

	app.get('/record', (req, res) => {
		//build api URL with user zip
		const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';	
		const apiId = '&appid=<YOUR API KEY GOES HERE>&units=imperial';

		rest.send(title);
	})

}