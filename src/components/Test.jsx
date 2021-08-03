import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation
} from 'react-router-dom';

const to = {
  pathname: '/users',
  search: '?class=A',
  hash: '#user-hash',
  state: { test: 'test-state' }
};

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about/1'>About</Link>
              <Link to='/about/エースコンバット'>About</Link>
            </li>
            <li>
              <Link to={to}>Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path='/about/:aboutId'>
            <About />
          </Route>
          <Route path='/users'>
            <Users />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return <h2>Home</h2>;
}

const About = () => {
  const {aboutId} = useParams();
  return <h2>About: {aboutId}</h2>;
}

const Users = () => {
  const location = useLocation();
  return (
    <React.Fragment>
      <h2>Users</h2>
      <p>pathname：{location.pathname}</p>
      <p>search：{location.search}</p>
      <p>hash：{location.hash}</p>
      <p>state：{location.state.test}</p>
    </React.Fragment>
  );
}

export default App;