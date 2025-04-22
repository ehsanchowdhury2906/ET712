import React from "react";
import './index.css';
import Modalwindow from "./modalwindow";
const User_feedback = function (props) {
// open modal window
const openmodalwindow = () => {
const modalwindow = document.querySelector(".modalwindow")
modalwindow.style.display = "block";
}
return (
<>
<div className="feedbackcontainer">
<section className="feedbackcard">
<div className="content"><p>{props.username}</p></div>
<div className="description">{props.children}</div>
<div className="cardfooter">
<p className="addicon" onClick={openmodalwindow}><span>
&#10011;</span>Add feedback</p>
</div>
</section>
</div>
{/* MODAL WINDOW */}
<Modalwindow /> </>
)
}
export default User_feedback
