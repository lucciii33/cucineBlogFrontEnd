import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import {Home} from "./views/home"
import { Articles } from "./views/articles";
import { Recipes } from "./views/recipes";
import {Navbar} from "./components/navbar"

function App() {
  return (
    <Router>
    <Navbar/>
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/articles' element={<Articles/>}></Route>
      <Route exact path='/recipes' element={<Recipes/>}></Route>
     </Routes>
    </Router>
  );
}

export default App;
