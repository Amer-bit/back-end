'use strict'


//use express library
const express = require('express');

//init express
const serverApp = express();

// create a port number its better to write PORT not port
const PORT = process.env.PORT || 3000;

serverApp.use(express.static('./public'));

//creating a route http://localhost:3000/public/index.html
serverApp.get('/greet', (request, response) =>{
    response.status(200).send(<h1>Hey</h1>)
});

serverApp.get('*', (request, response) => {
    response.status(404).send('404 Page Not Found')
});
//server listening to the created port to start doing stuff 
serverApp.listen(PORT, () => console.log(`listing to port ${PORT}`));



// 'use strict';
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;
// app.use(express.static('./public'));
// app.get('/hello', (request, response) => {
//   response.status(200).send('<h1>Hello</h1>');
// });
// app.get('/data', (request, response) => {
//   let data = [{ name: 'Javascript' }, { name: 'python' }, { name: 'C#' }];
//   response.status(200).json(data);
// });

// app.get('*', (request, response) =>
//   response.status(404).send('404 page not found')
// );
// app.listen(PORT, () => console.log(`listing to port ${PORT}`));