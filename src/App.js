import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //this will only run once when the app component loads....
    
    auth.onAuthStateChanged((authUser) => {
      console.log('The User is >>>', authUser);

      if (authUser) {
        // the user just logged in // the user was logged in....
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out....
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
