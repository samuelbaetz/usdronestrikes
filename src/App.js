import './App.css';
import Navigation from './components/Navigation'
import Home from './pages/Home'
import 'leaflet/dist/leaflet.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contribute from './pages/contribute'
function App() {
  return (
    <Router>
    <div className="App">
      <Navigation/>
      <Switch>
      <Route exact path='/' component={Home}></Route>
     <Route path='/contribute' component={Contribute}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
