import "./App.css";
import Serach from "./components/page/Serach";
import Mystore from "./components/Mystore";
import Searchvideo from "./components/Searchvideo";
import VideoList from "./components/VideoList";
import Register from "./components/Register";
import Login from "./components/Login";


import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  
  return (
    <div className="App">
     
      
      <Router>
        <Routes>
        <Route path='/'  element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/homepage' element={<Serach/>}/>
        </Routes>   
      </Router>
      
    </div>
  );
}

export default App;
