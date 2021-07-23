import React from "react";
import { BrowserRouter as Router
    , Route
} from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import { AuthProvider } from "./auth/AuthProvider";
import Home from "./components/Home";
import Rpg from "./components/Rpg";
import Adventure from "./components/Adventure";
import Action from "./components/Action";
import Shooting from "./components/Shooting";
import Puzzle from "./components/Puzzle";
import Login from "./auth/Login";
import SignUp from "./auth/Signup";
import BuySection from "./components/BuySection";

const App = () => {
  return (
    //<AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute path="/rpg" component={Rpg} />
          <PrivateRoute path="/adventure" component={Adventure} />
          <PrivateRoute path='/action' component={Action} />
          <PrivateRoute path='/shooting' component={Shooting} />
          <PrivateRoute path='/puzzle' component={Puzzle} />
          <PrivateRoute path='/buysection' component={BuySection} />
        </div>
      </Router>
    //</AuthProvider>
  );
};


export default App;