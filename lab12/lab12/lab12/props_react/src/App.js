//import files
import './App.css';
import User from"./comments"
import "./index.css"
import User_feedback from "./feedback"
import modalwindow from "./modalwindow"


//import images
import cat from "./images/cat.png"
import chicken from "./images/chicken.png"
import panda from "./images/panda.png"

function App() {
  return (
   <>
   <h1 style={{textAlign:"center"}}>toni chen liang</h1>
   <main className="maincontainer">
    < User_feedback><User image={cat} username="Mr. cat" date="04/08/25" usercomment="great job"/></User_feedback>
    < User_feedback><User image={chicken} username="Mr. chicken" date="04/08/25" usercomment="glad to help"/></User_feedback>
    < User_feedback><User image={panda} username="Mr. panda" date="04/08/25" usercomment="relax"/></User_feedback>

   </main>

    {/* POST COMMENTS */}
    <div className="postcomment">
      <ul className="commentlist"></ul>
    </div>





   </>
  );
}

export default App;
