import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";
import {Error} from "./pages/Error";
import {Logout} from "./pages/Logout";
import{Footer} from "./components/Footer";


const App =()=>{
  return (<>
   <BrowserRouter>
    <Navbar/>
   <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/*" element={<Error/>}/>
   </Routes>
    <Footer/>
   </BrowserRouter>

  </>);
};








export default App;