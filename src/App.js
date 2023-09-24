import '../src/style/style.scss'
import {Routes, Route} from "react-router-dom";
import Layout from "../src/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PageTwo from "./pages/PageTwo/PageTwo";
import Commit from "./pages/Commmit/Commit";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={''} element={<Home/>}/>
                <Route path={'/petitions'} element={<PageTwo/>}/>
                <Route path={'/comment/:id'} element={<Commit/>}/>
            </Route>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
