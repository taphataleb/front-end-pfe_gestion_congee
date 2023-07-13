import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
//import Navbar from "./components/Sidebar";



import DemandeConge from "./components/DemandeConge";
import Historique from "./components/Historique";
// import EmployeeStatus from "./components/Status";
import { Routes,Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
//import DemandeConge from "./components/DemandeConge";

//import Sidebar from "./components/Sidbar";
import Home from "./components/Home";
// import Nav from "./components/Nav";
// import { useState } from "react";
 import Sidebar from "./components/Sidebar"
import { useState } from "react";
import CongeList from "./components/Listes_demades";
import AdminPage from "./components/AdminPage";

//import Sidebar from "cdbreact/dist/components/Sidebar";



function App() {
  const [media, setMedia] = useState(true)
  console.log("-------------------------------------")
  console.log(media)
  return (
    
    <div className="container-fluid  min-vh-100" >

      <div className="col ">
        <Sidebar media={media} setMedia={setMedia}/>
      </div>
          <Routes>
        <Route path =""  element={<Home media={media}/>} /> 
        {/* <Route path="/" element={<Sidebar/>} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/demande" element={<DemandeConge/>} />
        <Route path="/historique" element={<Historique/>} />
        <Route path="/AdminPage" element={<AdminPage/>} />
        <Route path="/liste_des_demande" element={<CongeList/>} />
        {/* <Route path="/status" element={<EmployeeStatus/>} /> */}
        {/* <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/demandeconge" element={<DemandeConge/>}/> */}
        {/* <Route path="/nav" element={<Nav/>}/> */}
        
         {/* <Route path="/sidbar" element={<Sidebar/>}/> */}
         
      </Routes>
        
        </div>
       
        
  );
}

export default App;
