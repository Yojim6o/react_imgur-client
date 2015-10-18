var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = 'c7dd2ba73e6a42e';

module.exports = {
	get: function(url) {
		return fetch(rootUrl + url, {
			headers: {
				'Authorization': 'Client-ID ' + apiKey
			}
		})
		.then(function(response){
			return response.json()
		})
	}
};