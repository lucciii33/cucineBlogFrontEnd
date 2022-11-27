import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import {Home} from "./views/home"
import { Articles } from "./views/articles";
import { Recipes } from "./views/recipes";
import { Register } from "./views/register";
import { Login } from "./views/login";
import {Navbar} from "./components/navbar"

function App() {
  return (
    <Router>
    <Navbar/>
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/articles' element={<Articles/>}></Route>
      <Route exact path='/recipes' element={<Recipes/>}></Route>
      <Route exact path='/register' element={<Register/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
     </Routes>
    </Router>
  );
}

export default App;
