import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './navbar/Navbars';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

import Sineup from './componutes/Sineup';
import Home from './componutes/Home';
import Addblog from './componutes/Addblog';
import Login from './componutes/Login';
import Allblog from './componutes/Allblog';
import Myblog from './componutes/Myblog';

function App() {
  return (
    <>
      <Router>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/addblog">
            <Addblog />
          </Route>
          <Route exact path="/signup">
            <Sineup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/allblog">
            <Allblog />
          </Route>
          <Route exact path="/myblog">
            <Myblog />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
