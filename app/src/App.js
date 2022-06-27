import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import Home from "./components/Home";
import HomeNav from "./components/HomeNav";
import Register from "./components/Register";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Switch>
              <Route exact path="/">
                  <HomeNav></HomeNav>
                <Home></Home>
              </Route>
              <Route exact path="/signup">
                  <HomeNav></HomeNav>
                  <Register></Register>
              </Route>
              <Route exact path="/dashboard">

              </Route>
          </Switch>
        </div>
      </BrowserRouter>
);
}


export default App;
