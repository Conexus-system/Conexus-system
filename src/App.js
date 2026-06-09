/* eslint-disable */
import { useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./modules/Login";
import Skyline from "./modules/Skyline";
import Proposta from "./modules/Proposta";

function Carregando() {
  return (
    <div style={{minHeight:"100vh",background:"#0f1013",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Inter','Segoe UI',sans-serif"}}>
      <div style={{textAlign:"center"}}>
        <div style={{width:40,height:40,border:"3px solid #2c2f3a",borderTop:"3px solid #bd914c",borderRadius:"50%",animation:"spin 0.8s linear infinite",margin:"0 auto 16px"}}/>
        <div style={{color:"#8b8fa8",fontSize:13}}>Carregando...</div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function AppInner() {
  const { usuario } = useAuth();
  const [view, setView] = useState("sistema");
  if (usuario === undefined) return <Carregando />;
  if (!usuario) return <Login />;
  return view === "proposta"
    ? <Proposta onBack={() => setView("sistema")} />
    : <Skyline onProposta={() => setView("proposta")} />;
}

export default function App() {
  return <AuthProvider><AppInner /></AuthProvider>;
}
