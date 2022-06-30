import './App'
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import HomeNav from "./components/HomeNav";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Sale from "./components/Sale";
import Inventory from "./components/Inventory";
import ProductForm from "./components/ProductForm";
import Sidebar from "./components/Sidebar";
import React from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route exact path="/">
            <HomeNav/>
            <Home></Home>
        </Route>
        <Route exact path="/register">
            <HomeNav/>
            <Register></Register>
        </Route>
        <Route exact path="/login">
            <HomeNav/>
            <Login></Login>
        </Route>
        <Route exact path="/dashboard">
            <Dashboard></Dashboard>
        </Route>
          <Route exact path="/sale">
              <Sale></Sale>
          </Route>
          <Route exact path="/inventory">
              <Inventory></Inventory>
          </Route>
          <Route exact path="/inventory/add">
              <ProductForm></ProductForm>
          </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
