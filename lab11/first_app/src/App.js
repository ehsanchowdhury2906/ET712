import './App.css';
import kaabaimg from'./images/pexels-khaled-al-kayali-517658582-31339194.jpg'

function App() {
  const msg = "Welcome to ReactJS"
  function printSomething(){
    return "Hello"
  }
  return (
    <div>
      <h1 style={{color:"magenta", textAlign:"center"}}>Eldon Wu</h1>
      <p>This is my first ReactJS app</p>
      <p>Bucket List</p>
      <ol>
        <li>It gives you things to look forward to</li>
        <li>It makes life more meaningful</li>
      </ol>
      <h2>Inline styling</h2>
      <label for="email">Enter E-Mail: </label>
      <input type="text" id="email" placeholder="Enter a email address..." style={{padding:"10px",backgroundColor:"lightgreen"}}/>
      <button type="submit" style={{backgroundColor:"crimson",padding:"10px 20px"}}>Submit</button>
      <img src={kaabaimg} style={{width:"500px",display:"block",margin:"auto",border:"groove 10px gold"}}/>
      <h2 className="subtitle">Variables in JSX</h2>
      <p>{msg}</p>
      <p>Calling function printSomething = {printSomething()}</p>
    </div>
  );
}

export default App;
