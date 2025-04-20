import React from 'react';
import ReactDOM from 'react-dom/client';
import mad from ".images.png"
import clown from "./2411817_clown_emoji_emoticon_funny_happy_icon"
import fun from "./2291005_face_fun_funny_joking_smile_icon"
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
  <User_feedback username="mad"><User image={bati}
  date="11/12/24" msg="I am Batman" /></User_feedback>
  {/* user 2 */}
  <User_feedback username="clown"><User image={musi} date="10/03/24"
  msg="I am late!" /></User_feedback>
  {/* user 3 */}
  <User_feedback username="fun"><User image={musia} date="08/20/24"
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
