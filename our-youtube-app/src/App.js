import './App.css';
import {Route} from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <NavBar />
     <Route exact path={"/Home"} component = {Home}/>
     <Route path={"/about"} component = {About} />
    </div>
  );
}

export default App;
