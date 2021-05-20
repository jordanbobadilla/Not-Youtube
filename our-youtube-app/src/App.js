import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Video from "./Components/Video"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path={"/Video/:id"} component={Video} />
        <Route exact path={"/Home"} component={Home} />
        <Route path={"/about"} component={About} />
      </Switch>
    </div>
  );
}

export default App;
