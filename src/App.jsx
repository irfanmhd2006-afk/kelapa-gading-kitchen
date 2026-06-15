import { Router,Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Login from "./pages/Login";
import Register from "./pages/Register";
import Favorites from "./pages/Favorites";
import Detail from "./pages/Detail";
import Browse from "./pages/browse";
function app(){
  return(
    <BrowserRouter>
    <routes>
      <route path="/" element = {<Home />}></route>
      <route path="/browse" element = {<Browse />}></route>
      <route path="/detail" element = {<Detail />}></route>
      <route path="/favorites" element = {<Favorites />}></route>
      <route path="/login" element = {<Login />}></route>
      <route path="/register" element = {<Register />}></route>
    </routes>
    </BrowserRouter>
  )
}
export default app;