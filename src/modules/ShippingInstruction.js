/* eslint-disable */
import { useState } from "react";

const LOGO = "https://raw.githubusercontent.com/Conexus-system/Conexus-system/main/Logo.png";
const G = "#bd914c";
const W = "#ffffff";
const BK = "#111111";

const E = ({ v, onChange, w, bold, size=12, color=BK, placeholder="", align="left" }) => (
  <input value={v} onChange={e=>onChange(e.target.value)} placeholder={placeholder}
    style={{border:"none",borderBottom:"1px dashed #bbb",outline:"none",
      fontSize:size,fontWeight:bold?"700":"400",color,background:"transparent",
      width:w||"100%",padding:"1px 3px",textAlign:align}}/>
);

const defBuying = [
  { taxa:"FRETE AÉREO", moeda:"USD", valor:"", un:"kg" },
  { taxa:"AWB FEE",     moeda:"USD", valor:"", un:"" },
  { taxa:"COLETA",      moeda:"USD", valor:"", un:"" },
  { taxa:"IN/OUT FEE",  moeda:"USD", valor:"", un:"" },
  { taxa:"SED FEE",     moeda:"USD", valor:"", un:"" },
  { taxa:"TRA",         moeda:"USD", valor:"", un:"kg" },
];
const defSelling = [
  { taxa:"FRETE AÉREO", moeda:"USD", valor:"", un:"kg" },
  { taxa:"AWB FEE",     moeda:"USD", valor:"", un:"" },
  { taxa:"COLETA",      moeda:"USD", valor:"", un:"" },
  { taxa:"IN/OUT FEE",  moeda:"USD", valor:"", un:"" },
  { taxa:"SED FEE",     moeda:"USD", valor:"", un:"" },
  { taxa:"TRA",         moeda:"USD", valor:"", un:"kg" },
  { taxa:"HANDLING",    moeda:"USD", valor:"", un:"" },
];

export default function ShippingInstruction({ onBack }) {
  const [hdr, setHdr] = useState({
    ref:"CP251245", modal:"AIR",
    airportOrigin:"MIAMI", airportDest:"GUARULHOS ==> DTA POA SERVICE",
    service:"1-2 DIAS", pesoTaxado:"", incoterm:"EXW",
  });
  const [shipper,  setShipper]  = useState("Conforme documentos enviados");
  const [cnee,     setCnee]     = useState("");
  const [notify,   setNotify]   = useState("CONEXUS PARTNERS LTDA.\nRua das Esmeraldas, 395 - 12º andar\nBairro: Jardim - Santo André - SP - Brasil\nCEP: 09090-770\nCNPJ: 22.627.918/0001-06");
  const [buying,   setBuying]   = useState(defBuying);
  const [selling,  setSelling]  = useState(defSelling);
  const [profit,   setProfit]   = useState({ moeda:"USD", valor:"" });
  const [print,    setPrint]    = useState(false);

  const setH = (k,v) => setHdr(p=>({...p,[k]:v}));
  const updB = (i,k,v) => setBuying(p=>{ const r=[...p]; r[i]={...r[i],[k]:v}; return r; });
  const updS = (i,k,v) => setSelling(p=>{ const r=[...p]; r[i]={...r[i],[k]:v}; return r; });

  const totalBuying  = buying.reduce((a,r)=>a+(parseFloat(String(r.valor).replace(",","."))||0),0);
  const totalSelling = selling.reduce((a,r)=>a+(parseFloat(String(r.valor).replace(",","."))||0),0);
  const fmt = n => n>0 ? n.toLocaleString("pt-BR",{minimumFractionDigits:2}) : "";

  const RateTable = ({ title, rows, updFn, setter, yellow }) => (
    <div style={{marginBottom:16}}>
      <div style={{fontWeight:800,fontSize:11,padding:"5px 8px",marginBottom:6,
        background: yellow ? "#fff9c4" : W,
        borderBottom:"2px solid "+(yellow?G:"#333"),
        textDecoration: yellow?"underline":"none"}}>
        {title}
      </div>
      <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
        <tbody>
          {rows.map((r,i)=>(
            <tr key={i} style={{borderBottom:"1px solid #eee"}}>
              <td style={{padding:"4px 8px",width:"38%",fontWeight:600}}>
                {print ? r.taxa : <E v={r.taxa} onChange={v=>updFn(i,"taxa",v)} bold/>}
              </td>
              <td style={{padding:"4px 8px",width:"12%",textAlign:"center",color:"#666"}}>
                {print ? r.moeda : <E v={r.moeda} onChange={v=>updFn(i,"moeda",v)} align="center" color="#666" w={45}/>}
              </td>
              <td style={{padding:"4px 8px",width:"18%",textAlign:"center",fontFamily:"monospace",fontWeight:700}}>
                {print ? r.valor : <E v={r.valor} onChange={v=>updFn(i,"valor",v)} align="center" w={80}/>}
              </td>
              <td style={{padding:"4px 8px",width:"20%",color:"#888",fontSize:10}}>
                {print ? r.un : <E v={r.un} onChange={v=>updFn(i,"un",v)} size={10} color="#888"/>}
              </td>
              {!print && <td style={{width:22}}>
                <button onClick={()=>setter(p=>p.filter((_,x)=>x!==i))} style={{background:"none",border:"none",color:"#ccc",cursor:"pointer",fontSize:13}} onMouseOver={e=>e.currentTarget.style.color="#e05c72"} onMouseOut={e=>e.currentTarget.style.color="#ccc"}>×</button>
              </td>}
            </tr>
          ))}
          <tr style={{background:"#f5f5f5",borderTop:"1px solid #ddd"}}>
            <td style={{padding:"5px 8px",fontWeight:800}}>TOTAL</td>
            <td style={{padding:"5px 8px",textAlign:"center",color:"#666",fontWeight:600}}>USD</td>
            <td style={{padding:"5px 8px",textAlign:"center",fontFamily:"monospace",fontWeight:800,color:G}}>{fmt(rows===buying?totalBuying:totalSelling)}</td>
            <td/>{!print && <td/>}
          </tr>
        </tbody>
      </table>
      {!print && <button onClick={()=>setter(p=>[...p,{taxa:"Nova taxa",moeda:"USD",valor:"",un:""}])}
        style={{background:G+"18",color:G,border:"1px dashed "+G+"66",borderRadius:4,padding:"3px 10px",fontSize:10,cursor:"pointer",marginTop:4}}>
        + Adicionar taxa
      </button>}
    </div>
  );

  return (
    <div style={{background:"#f0f0f0",minHeight:"100vh",fontFamily:"'Calibri','Segoe UI',sans-serif"}}>
      <div style={{background:"#1e2028",padding:"10px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:100}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <img src={LOGO} alt="Conexus" style={{height:38,objectFit:"contain"}}/>
          <div style={{borderLeft:"1px solid #333",paddingLeft:10}}>
            <div style={{fontSize:12,color:"#eee",fontWeight:600}}>Shipping Instruction</div>
            <div style={{fontSize:10,color:"#888"}}>{hdr.ref} · {print?"Visualização":"Edição"}</div>
          </div>
        </div>
        <div style={{display:"flex",gap:8}}>
          <button onClick={onBack} style={{background:"transparent",color:"#888",border:"1px solid #333",borderRadius:6,padding:"6px 14px",fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>← Voltar</button>
          <button onClick={()=>setPrint(!print)} style={{background:G+"22",color:G,border:"1px solid "+G+"44",borderRadius:6,padding:"6px 14px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>{print?"✎ Editar":"👁 Visualizar"}</button>
          <button onClick={()=>window.print()} style={{background:G,color:"#111",border:"none",borderRadius:6,padding:"6px 16px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>↓ Gerar PDF</button>
        </div>
      </div>

      <div style={{maxWidth:900,margin:"0 auto",padding:"20px 16px"}}>
        <div style={{background:W,borderRadius:6,boxShadow:"0 2px 20px #0003"}}>
          {/* CABEÇALHO */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 22px 12px",borderBottom:"3px solid "+G}}>
            <img src={LOGO} alt="Conexus Partners" style={{height:64,objectFit:"contain"}}/>
            <div style={{textAlign:"right",fontSize:8.5,color:"#555",lineHeight:1.8}}>
              <div style={{fontWeight:700,color:BK,fontSize:10}}>CONEXUS PARTNERS LTDA</div>
              <div>RUA DAS ESMERALDAS - 395 - 12º ANDAR - BAIRRO JARDIM - SANTO ANDRÉ - SP - BRASIL</div>
              <div>09090-770 - FONE: (11) 98775-2588</div>
              <div>CNPJ: 22.627.918/0001-06</div>
            </div>
          </div>

          <div style={{padding:"16px 22px"}}>
            {/* TÍTULO */}
            <div style={{textAlign:"center",fontSize:18,fontWeight:800,padding:"10px 0",marginBottom:14,borderBottom:"2px solid #ddd"}}>
              Shipping Instructions
            </div>
            <div style={{fontSize:12,marginBottom:16,color:"#444"}}>
              See below <strong>{hdr.modal}</strong> shipping instructions:
            </div>

            {/* SHIPPER / CNEE / NOTIFY */}
            {[
              ["SHIPPER:", shipper, setShipper],
              ["CNEE:",    cnee,    setCnee],
            ].map(([label, val, setter])=>(
              <div key={label} style={{display:"flex",gap:16,marginBottom:14,paddingBottom:14,borderBottom:"1px solid #eee"}}>
                <div style={{fontWeight:800,fontSize:12,textDecoration:"underline",width:80,flexShrink:0}}>{label}</div>
                <div style={{flex:1,fontSize:12}}>
                  {print ? <span>{val}</span> :
                    <textarea value={val} onChange={e=>setter(e.target.value)} rows={2}
                      style={{width:"100%",border:"1px dashed #ccc",outline:"none",fontSize:12,fontFamily:"inherit",background:"transparent",resize:"none",padding:"2px 4px"}}/>}
                </div>
              </div>
            ))}
            <div style={{display:"flex",gap:16,marginBottom:16,paddingBottom:14,borderBottom:"1px solid #eee"}}>
              <div style={{fontWeight:800,fontSize:12,textDecoration:"underline",width:80,flexShrink:0}}>NOTIFY:</div>
              <div style={{flex:1,fontSize:12}}>
                {print ? <pre style={{fontSize:12,fontFamily:"inherit",margin:0,whiteSpace:"pre-wrap"}}>{notify}</pre> :
                  <textarea value={notify} onChange={e=>setNotify(e.target.value)} rows={5}
                    style={{width:"100%",border:"1px dashed #ccc",outline:"none",fontSize:12,fontFamily:"inherit",background:"transparent",resize:"vertical",padding:"2px 4px"}}/>}
              </div>
            </div>

            {/* DADOS DO EMBARQUE */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16,padding:"10px 14px",background:"#fafaf8",border:"1px solid #e8e0d5",borderRadius:4}}>
              {[
                ["AIRPORT OF ORIGIN:", "airportOrigin"],
                ["REF:", "ref"],
                ["AIRPORT OF DESTINATION:", "airportDest"],
                ["SERVICE / T.T:", "service"],
                ["INCOTERM:", "incoterm"],
                ["PESO TAXADO:", "pesoTaxado"],
              ].map(([l,k])=>(
                <div key={k} style={{display:"flex",alignItems:"center",gap:6}}>
                  <span style={{fontWeight:800,fontSize:11,textDecoration:"underline",whiteSpace:"nowrap",width:175,flexShrink:0}}>{l}</span>
                  <span style={{fontSize:12}}>{print ? hdr[k] : <E v={hdr[k]} onChange={v=>setH(k,v)}/>}</span>
                </div>
              ))}
            </div>

            {/* BUYING RATES */}
            <RateTable title="BUYING RATES:" rows={buying} updFn={updB} setter={setBuying} yellow={false}/>

            {/* SELLING RATES */}
            <RateTable title="SELLING RATE // Rates which should be mentioned on the AWB:" rows={selling} updFn={updS} setter={setSelling} yellow={true}/>

            {/* PROFIT */}
            <div style={{display:"flex",alignItems:"center",gap:12,padding:"10px 14px",background:G+"22",border:"2px solid "+G,borderRadius:4,marginBottom:20}}>
              <span style={{fontWeight:800,fontSize:12,color:G,textDecoration:"underline"}}>PROFIT CONEXUS</span>
              <div style={{display:"flex",alignItems:"center",gap:6,marginLeft:"auto"}}>
                {print ? <>
                  <span style={{fontFamily:"monospace",fontWeight:700,color:G}}>{profit.moeda}</span>
                  <span style={{fontFamily:"monospace",fontWeight:900,fontSize:16,color:G}}>{profit.valor || fmt(totalSelling - totalBuying)}</span>
                </> : <>
                  <input value={profit.moeda} onChange={e=>setProfit(p=>({...p,moeda:e.target.value}))}
                    style={{border:"none",borderBottom:"1px dashed "+G,outline:"none",fontSize:12,fontFamily:"monospace",fontWeight:700,color:G,background:"transparent",width:45}}/>
                  <input value={profit.valor} onChange={e=>setProfit(p=>({...p,valor:e.target.value}))}
                    placeholder={fmt(totalSelling-totalBuying)||"0,00"}
                    style={{border:"none",borderBottom:"1px dashed "+G,outline:"none",fontSize:14,fontFamily:"monospace",fontWeight:900,color:G,background:"transparent",width:80,textAlign:"right"}}/>
                </>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
