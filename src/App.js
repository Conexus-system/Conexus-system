/* eslint-disable */
import { useState } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./modules/Login";
import Skyline from "./modules/Skyline";
import PropostaAerea from "./modules/PropostaAerea";
import PropostaMaritima from "./modules/PropostaMaritima";
import PropostaRodoviaria from "./modules/PropostaRodoviaria";
import PropostaDescarga from "./modules/PropostaDescarga";
import ShippingInstruction from "./modules/ShippingInstruction";
import { Fatura, Demonstrativo } from "./modules/Financeiro";

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

// Usuários com acesso admin (dashboard e financeiro)
const ADMIN_EMAILS = ["graziela@conexuspartners.com.br","graziela.rossato@conexuspartners.com.br"];

function AppInner() {
  const { usuario } = useAuth();
  const [view, setView] = useState("sistema");
  if (usuario === undefined) return <Carregando/>;
  if (!usuario) return <Login/>;
  const isAdmin = ADMIN_EMAILS.includes(usuario.email?.toLowerCase());
  const nav = (v) => setView(v);
  if (view === "proposta-aerea")    return <PropostaAerea    onBack={()=>nav("sistema")}/>;
  if (view === "proposta-maritima") return <PropostaMaritima onBack={()=>nav("sistema")}/>;
  if (view === "proposta-rodo")     return <PropostaRodoviaria onBack={()=>nav("sistema")}/>;
  if (view === "proposta-descarga") return <PropostaDescarga onBack={()=>nav("sistema")}/>;
  if (view === "shipping")          return <ShippingInstruction onBack={()=>nav("sistema")}/>;
  if (view === "fatura")            return <Fatura onBack={()=>nav("sistema")}/>;
  if (view === "demonstrativo")     return <Demonstrativo onBack={()=>nav("sistema")}/>;
  return <Skyline onProposta={nav} isAdmin={isAdmin}/>;
}

export default function App() {
  return <AuthProvider><AppInner/></AuthProvider>;
}
