// Creating a server

const http = require('http');

// const server = http.createServer(() => {
// 	console.log('I hear you!')
// 	// this will run in node, so you'll
// 	// see it in git bash
// })

const server = http.createServer((request, response) => {
	console.log('headers', request.headers)
	console.log('method', request.method)
	console.log('url', request.url)
	const user = {
		name: 'Butthead',
		hobby: 'stamps'
	}

	response.setHeader('Content-Type', 'application/json');
	response.end(JSON.stringify(user));
})

server.listen(3000);
// type localhost:3000 into the browser

