// First we import the HTTP library.
import * as http from 'http';

// Then we define our global and configuration-related variables.
const PORT = 8080;

// Next we define a function that will be responsible for receiving network
// requests, as well as preparing the corresponding responses.
function handleRequest(request, response) {
    response.end('Hello, world!');
}

// Then we initialize our server using the `createServer` method, passing in the
// `handleRequest` function defined above. This function will be called whenever
// the server receives a request.
const server = http.createServer(handleRequest);

// Finally we tell our server to listen for requests on a specific port,
// and print a message a message to indicate that our application is up and
// running.
server.listen(PORT, () => console.log(`LISTENING ON PORT: ${PORT}`));
