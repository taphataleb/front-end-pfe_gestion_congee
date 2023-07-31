import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import DemandeConge from "./components/DemandeConge";
import Historique from "./components/Historique";
// import EmployeeStatus from "./components/Status";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";


import Sidebar from "./components/Sidebar"
import { useState } from "react";
import CongeList from "./components/Listes_demades";
import AdminPage from "./components/AdminPage";
import Liste_des_demande from "./components/Listes_demades";
import ValidationDemande from "./components/ValidationDemande";
import RegisterDemande from "./components/RegeterDemande";

function App() {
  const [media, setMedia] = useState(true)
  console.log("-------------------------------------")
  console.log(media)
  return (

    <div  >

      <div >
        <Sidebar media={media} setMedia={setMedia} />
      </div>
      <Routes>
        <Route path="" element={<Home media={media} />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/demande" element={<DemandeConge />} />
        <Route path="/historique" element={<Historique />} />
        <Route path="y" element={<AdminPage />} />
        <Route path="/liste_des_demande" element={<Liste_des_demande />} />
        <Route path="/validationDemande/:id" element={<ValidationDemande />} />
        <Route path="/regeterDemande/:id" element={<RegisterDemande />} />
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
