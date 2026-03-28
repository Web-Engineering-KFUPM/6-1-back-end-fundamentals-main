// -------------------------------------------------------------------
// SPECIAL NOTE:
// Allow React to access the server
// -------------------------------------------------------------------

// If React fetches data from a different port, the browser may block the request.

// In that case, in server.js:
// - install cors
//      - npm install cors
// - import cors
// - use app.use(cors())

// Syntax hint:
//    import ______ from 'cors';

// and:

//    app.use(______);
//------------------------------------------------------------------


// TODO 1: Import Express
// Syntax hint:
// import ______ from 'express';


// TODO 2: Create the Express app and store it in a variable named app
// Syntax hint:
// const app = ______();


// TODO 3: Start the server on port 3000
// Print a message in the terminal when the server starts
//
// Syntax hint:
// app.listen(____, () => {
//   console.log('________________________________');
// });


// TODO 4: Create the home route "/"
// Expected response:
// Hello from the back-end server
//
// Syntax hint:
// app.get('___', (req, res) => {
//   res.____('____________________________');
// });


// TODO 5: Create the "/about" route
// Expected response:
// This is the about route
//
// Syntax hint:
// app.get('_______', (req, res) => {
//   res.____('________________________');
// });


// TODO 6: Create the "/student" route
// Expected JSON response:
// {
//   name: 'Aisha',
//   major: 'Computer Science'
// }
//
// Syntax hint:
// app.get('_________', (req, res) => {
//   res.____({
//     name: '_____',
//     major: '________________'
//   });
// });
