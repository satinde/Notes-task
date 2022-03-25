import './App.css';
import Login from './Login/Login';
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import Notes from './Notes/Notes';
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/notes" component={Notes} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
