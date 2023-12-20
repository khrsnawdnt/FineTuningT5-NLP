import {Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import MyNavbar from "./components/Navbar";
import Profile from "./components/Profile";
import History from "./components/History";
import AboutApp from "./components/About";

function App() {
  return (
    <div>
    <div className="container" 
      style={{backgroundColor: '#f8f9fa'}}
    >
      <MyNavbar/>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/history" Component={History}/>
        <Route path="/profile" Component={Profile}/>
        <Route path="/about" Component={AboutApp}/>
      </Routes>
    </div>
  </div>
  );
}

export default App
