import './App'
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import HomeNav from "./components/HomeNav";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomeNav></HomeNav>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route exact path="/register">
            <Register></Register>
        </Route>
        <Route exact path="/login">
            <Login></Login>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
