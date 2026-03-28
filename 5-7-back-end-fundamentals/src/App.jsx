/*
===================================================================
Back-end Lab — Introduction to the Back-end
===================================================================

===================================================================
LAB GOAL
===================================================================

In this lab, you will get your first exposure to the back-end.

This lab is only for understanding:
- what a back-end is
- what a server does
- how the browser sends a request
- how the server sends a response
- that front-end and back-end are separate parts

You are NOT expected to learn Express in depth in this lab.
Express details will be covered later in Section 6.4.

===================================================================
LAB SETUP INSTRUCTIONS
===================================================================

1. Navigate to the project directory:
   Open your terminal and run:
      cd 5-7-back-end-fundamentals

2. Install project dependencies:
   Run:
      npm install

3. Install Express:
   Run:
      npm install express

4. Start the front-end:
   Run:
      npm run dev

5. Start the back-end from the backend folder:
   Run:
      cd backend
      node server.js

6. Open the browser and test the routes:
      http://localhost:3000/
      http://localhost:3000/about
      http://localhost:3000/student

===================================================================
IMPORTANT NOTE
===================================================================

In this lab, you are not building a full front-end/back-end connection.

The purpose of this lab is only to:
- run a back-end server
- create a few simple routes
- observe what the server sends back

You will type the server code yourself in backend/server.js.

This App.jsx file only gives you:
- lab instructions
- TODO list
- coding hints
- route testing reminders

===================================================================
STUDENT TASKS
===================================================================

Open the file:
   backend/server.js

Then complete the TODOs there.

-------------------------------------------------------------------
TODO 1:
Import Express
-------------------------------------------------------------------

Hint:
- use the import keyword
- import from 'express'

Syntax hint:
   import ______ from 'express';

-------------------------------------------------------------------
TODO 2:
Create the Express app
-------------------------------------------------------------------

In server.js, create the app and store it in a variable named app.

Hint:
- call the imported express function

Syntax hint:
   const app = ______();


-------------------------------------------------------------------
TODO 3:
Start the server
-------------------------------------------------------------------

Start the server on port 3000.

When the server starts, print a message in the terminal.

Hint:
- use app.listen(...)
- first value is the port number
- second value is a function

Syntax hint:
   app.listen(____, () => {
     console.log('________________________________');
   });


-------------------------------------------------------------------
TODO 4:
Create the home route "/"
-------------------------------------------------------------------

When the browser opens:
   http://localhost:3000/

The server should respond with:
   Hello from the back-end server

Hint:
- use app.get(...)
- use '/' as the route path
- use res.send(...)

Syntax hint:
   app.get('___', (req, res) => {
     res.____('____________________________');
   });

-------------------------------------------------------------------
TODO 5:
Create the "/about" route
-------------------------------------------------------------------

When the browser opens:
   http://localhost:3000/about

The server should respond with:
   This is the about route

Syntax hint:
   app.get('_______', (req, res) => {
     res.____('________________________');
   });

-------------------------------------------------------------------
TODO 6:
Create the "/student" route
-------------------------------------------------------------------

When the browser opens:
   http://localhost:3000/student

The server should respond with JSON like this:
   {
     name: 'Aisha',
     major: 'Computer Science'
   }

Hint:
- use res.json(...)
- send an object

Syntax hint:
   app.get('_________', (req, res) => {
     res.____({
       name: '_____',
       major: '________________'
     });
   });


===================================================================
HOW TO TEST
===================================================================

After completing the TODOs in server.js:

1. Run:
      node server.js

2. Open these URLs in the browser:
      http://localhost:3000/
      http://localhost:3000/about
      http://localhost:3000/student

3. Observe what each route returns.

===================================================================
UNDERSTANDING NOTES
===================================================================

When you open a URL such as:
   http://localhost:3000/

The flow is:

Browser sends REQUEST  --------->  Server
Server sends RESPONSE  <--------- Browser

In this lab:
- the browser is the client
- the server is the back-end
- the server sends back text or JSON

The front-end does not create the response.
The back-end creates the response.

===================================================================
REFLECTION QUESTIONS
===================================================================

After you finish, answer these questions:

1. What is the role of the back-end?
2. What happens when the browser opens a route?
3. Who sends the request?
4. Who sends the response?
5. What is the difference between text response and JSON response?

===================================================================
END OF LAB INSTRUCTIONS
===================================================================
*/

import './index.css';

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">N</div>
          <div>
            <h1>NodeStart</h1>
            <p>Back-end Foundations</p>
          </div>
        </div>

        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Students</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="hero">
        <section className="hero-left">
          <span className="badge">Intro Lab</span>
          <h2>Build your first back-end server</h2>
          <p>
            This interface represents a simple web application.
            In this lab, the front-end is already available.
            Your task is to complete the back-end in <code>backend/server.js</code>.
          </p>

          <div className="hero-actions">
            <button>Get Started</button>
            <button className="secondary">View Services</button>
          </div>
        </section>

        <section className="hero-right">
          <div className="status-card">
            <h3>Server Preview</h3>
            <p>Test these routes after completing the server:</p>
            <ul>
              <li><code>/</code></li>
              <li><code>/about</code></li>
              <li><code>/student</code></li>
            </ul>
          </div>
        </section>
      </main>

      <section className="cards">
        <article className="card">
          <h3>Home Route</h3>
          <p>
            Create a route that returns a simple text response from the server.
          </p>
        </article>

        <article className="card">
          <h3>About Route</h3>
          <p>
            Add another route to understand how different URLs return different responses.
          </p>
        </article>

        <article className="card">
          <h3>Student Route</h3>
          <p>
            Return a small JSON object to observe how the server can send structured data.
          </p>
        </article>
      </section>

      <section className="preview-panel">
        <div className="preview-card large">
          <h3>Student Profile Preview</h3>
          <p className="muted">Example of data that could come from the back-end</p>

          <div className="profile-box">
            <div className="avatar">A</div>
            <div>
              <h4>Aisha</h4>
              <p>Computer Science</p>
            </div>
          </div>
        </div>

        <div className="preview-card">
          <h3>System Status</h3>
          <div className="status-row">
            <span>Front-end</span>
            <span className="ok">Running</span>
          </div>
          <div className="status-row">
            <span>Back-end</span>
            <span className="pending">Complete TODOs</span>
          </div>
        </div>
      </section>
    </div>
  );
}