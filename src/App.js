import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Default from './components/Default/Default';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
// import Grommet from "grommet"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element = { <Default />} />
            <Route path="/Login" element = { <Login />} />
            <Route path="/Register" element = { <Register />} />
            <Route path="/Home" element = { <Home />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
