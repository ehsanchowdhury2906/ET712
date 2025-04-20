import React from 'react';
import ReactDOM from 'react-dom/client';
import bati from "./images/bati.png";
import musi from "./images/musi.png";
import musia from "./images/musia.png";
import './index.css';
import App from './App';
import User_feedback from './user_feedback';
import './index.css';
import User from './comments'

const App = function () {
  return (
  <>
  <h1 style={{ textAlign: "center" }}>ehsan chowdhury</h1>
  <section className='container'>
  {/* user 1 */}
  <User_feedback username="bati"><User image={bati}
  date="11/12/24" msg="I am Batman" /></User_feedback>
  {/* user 2 */}
  <User_feedback username="musi"><User image={musi} date="10/03/24"
  msg="I am late!" /></User_feedback>
  {/* user 3 */}
  <User_feedback username="musia"><User image={musia} date="08/20/24"
  msg="Get more rest" /></User_feedback>
  </section>
  {/* POST COMMENTS */}
  <div className="postcomment">
  <ul className="commentlist"></ul>
  </div>
  </>
  )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
