import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import { Route, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/Navbar" component={Navbar}/>
        
        
        <Redirect from="/" to="/Login" />
      </Switch>
    </>
  );
}

export default App;
