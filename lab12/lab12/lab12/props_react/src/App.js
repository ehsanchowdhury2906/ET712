//import files
import './App.css';
import User from"./comments"
import "./index.css"
import User_feedback from "./feedback"
import modalwindow from "./modalwindow"


//import images
import china from "./5546688_china_asia_chinese_circle_country_icon"
import clown from "./2411817_clown_emoji_emoticon_funny_happy_icon"
import fun from "./2291005_face_fun_funny_joking_smile_icon"

function App() {
  return (
   <>
   <h1 style={{textAlign:"center"}}>toni chen liang</h1>
   <main className="maincontainer">
    < User_feedback><User image={china} username="Mr. cat" date="04/08/25" usercomment="great job"/></User_feedback>
    < User_feedback><User image={clown username="Mr. chicken" date="04/08/25" usercomment="glad to help"/></User_feedback>
    < User_feedback><User image={fun} username="Mr. panda" date="04/08/25" usercomment="relax"/></User_feedback>

   </main>

    {/* POST COMMENTS */}
    <div className="postcomment">
      <ul className="commentlist"></ul>
    </div>





   </>
  );
}

export default App;
