/* eslint-disable */
import { useState } from "react";

const LOGO = "https://raw.githubusercontent.com/Conexus-system/Conexus-system/main/Logo.png";
const G = "#bd914c";
const W = "#ffffff";
const BK = "#111111";

const E = ({ v, onChange, w, bold, size=12, color=BK, placeholder="", align="left" }) => (
  <input value={v} onChange={e=>onChange(e.target.value)} placeholder={placeholder}
    style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",
      fontSize:size,fontWeight:bold?"700":"400",color,background:"transparent",
      width:w||"100%",padding:"1px 2px",textAlign:align}}/>
);

const fmt = v => {
  const n = parseFloat(String(v||0).replace(",","."));
  return isNaN(n) ? v||"" : n.toLocaleString("pt-BR",{minimumFractionDigits:2});
};

const BANCO = {
  banco:"Itaú", agencia:"8533", conta:"17136-2",
  favorecido:"Conexus Partners Ltda.",
  cnpjPix:"22.627.918/0001-06",
  email:"graziela.rossato@conexuspartners.com.br"
};

// ─── FATURA ────────────────────────────────────────────────────────────────
function Fatura({ onBack }) {
  const [hdr, setHdr] = useState({
    num:"1119/26", data:new Date().toLocaleDateString("pt-BR"),
    processo:"", refCliente:"",
    cliente:"", cnpj:"", endereco:"", cidade:"",
    tipo:"Internacional", // Internacional | Entrega | Transferência
    exportador:"", importador:"", dtEmbarque:"", dtChegada:"",
    hbl:"", equip:"", duimp:"", vencimento:"",
  });
  const [rows, setRows] = useState([
    { taxa:"Frete", un:"mínimo", valorUnit:"", qtde:"1,000", totalUSD:"", taxaCambio:"", totalBRL:"" },
    { taxa:"Handling", un:"awb", valorUnit:"", qtde:"1,000", totalUSD:"", taxaCambio:"", totalBRL:"" },
  ]);
  const [banco, setBanco] = useState(BANCO);
  const [print, setPrint] = useState(false);
  const setH = (k,v) => setHdr(p=>({...p,[k]:v}));
  const setBan = (k,v) => setBanco(p=>({...p,[k]:v}));
  const updRow = (i,k,v) => setRows(p=>{ const r=[...p]; r[i]={...r[i],[k]:v}; return r; });
  const totalBRL = rows.reduce((a,r)=>a+(parseFloat(String(r.totalBRL||0).replace(",","."))||0),0);

  return (
    <div style={{background:"#f0f0f0",minHeight:"100vh",fontFamily:"'Calibri','Segoe UI',sans-serif"}}>
      <div style={{background:"#1e2028",padding:"10px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:100}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <img src={LOGO} alt="" style={{height:38,objectFit:"contain"}}/>
          <div style={{borderLeft:"1px solid #333",paddingLeft:10}}>
            <div style={{fontSize:12,color:"#eee",fontWeight:600}}>Fatura</div>
            <div style={{fontSize:10,color:"#888"}}>Nº {hdr.num} · {print?"Visualização":"Edição"}</div>
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
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 22px 12px",borderBottom:"3px solid "+G}}>
            <img src={LOGO} alt="Conexus" style={{height:64,objectFit:"contain"}}/>
            <div style={{textAlign:"right",fontSize:8.5,color:"#555",lineHeight:1.8}}>
              <div style={{fontWeight:700,color:BK,fontSize:10}}>CONEXUS PARTNERS LTDA</div>
              <div>RUA DAS ESMERALDAS, 395 - 12º ANDAR - BAIRRO: JARDIM - SANTO ANDRÉ - SP - BRASIL</div>
              <div>09090-770 - FONE: (11) 98775-2588</div>
              <div>CNPJ: 22.627.918/0001-06</div>
            </div>
          </div>

          <div style={{padding:"16px 22px"}}>
            <div style={{textAlign:"center",padding:"8px",background:G+"22",marginBottom:14,fontWeight:800,fontSize:14,color:BK,borderRadius:2}}>
              FATURA Nº {print ? hdr.num : <E v={hdr.num} onChange={v=>setH("num",v)} w={80} bold size={14} align="center"/>}
            </div>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:0,marginBottom:14}}>
              <table style={{borderCollapse:"collapse",fontSize:12}}>
                {[["Para:",hdr.cliente,"cliente",true],["CNPJ:",hdr.cnpj,"cnpj",false],["Endereço:",hdr.endereco,"endereco",false],["Cidade:",hdr.cidade,"cidade",false],["Data:",hdr.data,"data",false],["Processo:",hdr.processo,"processo",false],["Ref. Cliente:",hdr.refCliente,"refCliente",false]].map(([l,v,k,bold])=>(
                  <tr key={k}><td style={{padding:"2px 8px 2px 0",fontWeight:700,whiteSpace:"nowrap",verticalAlign:"top"}}>{l}</td>
                  <td style={{padding:"2px 4px"}}>{print?<span style={{fontWeight:bold?"700":"400"}}>{v}</span>:<E v={v} onChange={vv=>setH(k,vv)} bold={bold}/>}</td></tr>
                ))}
              </table>
            </div>

            <div style={{background:"#f9f9f9",border:"1px solid #eee",borderRadius:4,padding:"8px 12px",marginBottom:14,fontSize:12}}>
              {hdr.tipo==="Internacional" ? (
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                  {[["Exportador",hdr.exportador,"exportador"],["Importador",hdr.importador,"importador"],["Data embarque",hdr.dtEmbarque,"dtEmbarque"],["Data chegada",hdr.dtChegada,"dtChegada"],["HBL / H-AWB",hdr.hbl,"hbl"],["Equip./Volume/Peso",hdr.equip,"equip"]].map(([l,v,k])=>(
                    <div key={k}><span style={{fontWeight:700}}>{l}: </span>{print?v:<E v={v} onChange={vv=>setH(k,vv)}/>}</div>
                  ))}
                </div>
              ) : (
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                  {[["DUIMP",hdr.duimp,"duimp"],["Equip./Volume/Peso",hdr.equip,"equip"]].map(([l,v,k])=>(
                    <div key={k}><span style={{fontWeight:700}}>{l}: </span>{print?v:<E v={v} onChange={vv=>setH(k,vv)}/>}</div>
                  ))}
                </div>
              )}
            </div>

            <table style={{width:"100%",borderCollapse:"collapse",fontSize:12,marginBottom:6}}>
              <thead>
                <tr style={{background:G+"22",borderBottom:"2px solid "+G}}>
                  {["Taxa","Un. Embarque","Valor Unitário","Qtde.","Valor Total USD","Taxa Câmbio","Valor R$"].map(h=>(
                    <th key={h} style={{padding:"7px 8px",fontWeight:700,textAlign:h==="Taxa"||h==="Un. Embarque"?"left":"center",fontSize:11}}>{h}</th>
                  ))}
                  {!print && <th style={{width:22}}/>}
                </tr>
              </thead>
              <tbody>
                {rows.map((r,i)=>(
                  <tr key={i} style={{borderBottom:"1px solid #eee"}}>
                    <td style={{padding:"6px 8px"}}>{print?r.taxa:<E v={r.taxa} onChange={v=>updRow(i,"taxa",v)}/>}</td>
                    <td style={{padding:"6px 8px"}}>{print?r.un:<E v={r.un} onChange={v=>updRow(i,"un",v)}/>}</td>
                    <td style={{padding:"6px 8px",textAlign:"center",fontFamily:"monospace"}}>$ {print?r.valorUnit:<E v={r.valorUnit} onChange={v=>updRow(i,"valorUnit",v)} align="center" w={60}/>}</td>
                    <td style={{padding:"6px 8px",textAlign:"center",fontFamily:"monospace"}}>{print?r.qtde:<E v={r.qtde} onChange={v=>updRow(i,"qtde",v)} align="center" w={50}/>}</td>
                    <td style={{padding:"6px 8px",textAlign:"center",fontFamily:"monospace"}}>$ {print?r.totalUSD:<E v={r.totalUSD} onChange={v=>updRow(i,"totalUSD",v)} align="center" w={70}/>}</td>
                    <td style={{padding:"6px 8px",textAlign:"center",fontFamily:"monospace"}}>{print?r.taxaCambio:<E v={r.taxaCambio} onChange={v=>updRow(i,"taxaCambio",v)} align="center" w={60}/>}</td>
                    <td style={{padding:"6px 8px",textAlign:"center",fontFamily:"monospace",color:G,fontWeight:700}}>R$ {print?r.totalBRL:<E v={r.totalBRL} onChange={v=>updRow(i,"totalBRL",v)} align="center" w={80}/>}</td>
                    {!print && <td><button onClick={()=>setRows(p=>p.filter((_,x)=>x!==i))} style={{background:"none",border:"none",color:"#ccc",cursor:"pointer",fontSize:14}} onMouseOver={e=>e.currentTarget.style.color="#e05c72"} onMouseOut={e=>e.currentTarget.style.color="#ccc"}>×</button></td>}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr style={{background:G+"0a",borderTop:"2px solid "+G}}>
                  <td colSpan={print?6:7} style={{padding:"8px 8px",fontWeight:700,textAlign:"right",fontSize:13}}>TOTAL</td>
                  <td style={{padding:"8px 8px",textAlign:"center",fontFamily:"monospace",fontWeight:800,color:G,fontSize:14}}>R$ {fmt(totalBRL)}</td>
                  {!print && <td/>}
                </tr>
              </tfoot>
            </table>
            {!print && <button onClick={()=>setRows(p=>[...p,{taxa:"",un:"awb",valorUnit:"",qtde:"1,000",totalUSD:"",taxaCambio:"",totalBRL:""}])}
              style={{background:G+"18",color:G,border:"1px dashed "+G+"66",borderRadius:4,padding:"3px 12px",fontSize:10,cursor:"pointer",marginBottom:14}}>+ Adicionar linha</button>}

            <div style={{background:"#fafaf8",border:"1px solid #e8e0d5",borderRadius:4,padding:"10px 14px",marginBottom:14,fontSize:11}}>
              <p>Observação: Valores acima válidos para pagamento em <strong style={{color:G}}>{print?hdr.vencimento:<E v={hdr.vencimento} onChange={v=>setH("vencimento",v)} w={120} bold color={G}/>}</strong></p>
              <p style={{marginTop:6}}>Solicitamos efetuar o depósito/PIX na conta abaixo mencionada e nos enviar o comprovante de pagamento via e-mail até às 16:00hs.</p>
              <div style={{marginTop:8,fontWeight:700,textDecoration:"underline",marginBottom:4}}>Dados Bancários:</div>
              <div><strong>Banco: {banco.banco}</strong></div>
              {["agencia","conta","favorecido","cnpjPix"].map(k=>(
                <div key={k}>{k==="agencia"?"Agência":k==="conta"?"Conta":k==="favorecido"?"Favorecido":"CNPJ / PIX"}: {print?banco[k]:<E v={banco[k]} onChange={v=>setBan(k,v)} size={11}/>}</div>
              ))}
              <div style={{marginTop:8,fontWeight:700,fontSize:11}}>MULTA POR ATRASO DE PAGAMENTO</div>
              <div style={{fontWeight:700,fontSize:10}}>SERÁ APLICADA PARA PAGAMENTOS DE FRETES E TAXAS LOCAIS EFETUADOS APÓS O VENCIMENTO, MULTA DE 4% SOBRE A QUANTIA DEVIDA, SENDO QUE O VALOR MÍNIMO SERÁ DE USD 60,00</div>
              <div style={{marginTop:6,fontSize:10}}>Gentileza enviar o comprovante de pagamento para: <strong>{banco.email}</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── DEMONSTRATIVO ─────────────────────────────────────────────────────────
function Demonstrativo({ onBack }) {
  const [hdr, setHdr] = useState({
    processo:"", refCliente:"", data:new Date().toLocaleDateString("pt-BR"),
    cliente:"", cnpj:"", endereco:"", cidade:"",
    exportador:"", house:"", mercadoria:"", master:"",
    procedencia:"", chegada:"", duimp:"", entrega:"",
    viaTransporte:"Aéreo", taxaDolar:"", ptax:"3%",
  });
  const [rows, setRows] = useState([
    { desc:"Frete internacional", data:"", valor:"" },
    { desc:"Taxa Siscomex",       data:"conforme DUIMP", valor:"" },
    { desc:"Armazenagem",         data:"", valor:"" },
    { desc:"SDA",                 data:"", valor:"" },
    { desc:"Honorários despachante", data:"", valor:"" },
  ]);
  const [adiant, setAdiant] = useState([{ desc:"N/A", data:"N/A", valor:"" }]);
  const [print, setPrint] = useState(false);
  const setH = (k,v) => setHdr(p=>({...p,[k]:v}));
  const updRow = (arr, setter, i, k, v) => setter(p=>{ const r=[...p]; r[i]={...r[i],[k]:v}; return r; });
  const total1 = rows.reduce((a,r)=>a+(parseFloat(String(r.valor||0).replace(",","."))||0),0);
  const total2 = adiant.reduce((a,r)=>a+(parseFloat(String(r.valor||0).replace(",","."))||0),0);
  const diff = total1 - total2;

  const RowTable = ({ data, setter, color }) => (
    <table style={{width:"100%",borderCollapse:"collapse",fontSize:12,marginBottom:4}}>
      <thead>
        <tr style={{background:color+"22",borderBottom:"2px solid "+color}}>
          <th style={{padding:"7px 10px",textAlign:"left",fontWeight:700,color:BK,width:"50%"}}>DISCRIMINAÇÃO DAS DESPESAS</th>
          <th style={{padding:"7px 10px",textAlign:"center",fontWeight:700,color:BK,width:"22%"}}>DATA PAGAMENTO</th>
          <th style={{padding:"7px 10px",textAlign:"right",fontWeight:700,color:BK,width:"20%"}}>VALOR (R$)</th>
          {!print && <th style={{width:22}}/>}
        </tr>
      </thead>
      <tbody>
        {data.map((r,i)=>(
          <tr key={i} style={{borderBottom:"1px solid #eee"}}>
            <td style={{padding:"7px 10px"}}>{print?r.desc:<E v={r.desc} onChange={v=>updRow(data,setter,i,"desc",v)}/>}</td>
            <td style={{padding:"7px 10px",textAlign:"center",color:"#666"}}>{print?r.data:<E v={r.data} onChange={v=>updRow(data,setter,i,"data",v)} align="center"/>}</td>
            <td style={{padding:"7px 10px",textAlign:"right",fontFamily:"monospace"}}>
              {print ? (r.valor?"R$ "+r.valor:"—") : <E v={r.valor} onChange={v=>updRow(data,setter,i,"valor",v)} align="right" placeholder="0,00"/>}
            </td>
            {!print && <td><button onClick={()=>setter(p=>p.filter((_,x)=>x!==i))} style={{background:"none",border:"none",color:"#ccc",cursor:"pointer",fontSize:13}} onMouseOver={e=>e.currentTarget.style.color="#e05c72"} onMouseOut={e=>e.currentTarget.style.color="#ccc"}>×</button></td>}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr style={{background:"#f5f5f5",borderTop:"1px solid #ddd"}}>
          <td colSpan={print?2:3} style={{padding:"7px 10px",fontWeight:700,textAlign:"right"}}>VALOR TOTAL</td>
          <td style={{padding:"7px 10px",textAlign:"right",fontFamily:"monospace",fontWeight:800,color:color}}>R$ {fmt(data===rows?total1:total2)}</td>
          {!print && <td/>}
        </tr>
      </tfoot>
    </table>
  );

  return (
    <div style={{background:"#f0f0f0",minHeight:"100vh",fontFamily:"'Calibri','Segoe UI',sans-serif"}}>
      <div style={{background:"#1e2028",padding:"10px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:100}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <img src={LOGO} alt="" style={{height:38,objectFit:"contain"}}/>
          <div style={{borderLeft:"1px solid #333",paddingLeft:10}}>
            <div style={{fontSize:12,color:"#eee",fontWeight:600}}>Demonstrativo de Valores</div>
            <div style={{fontSize:10,color:"#888"}}>{hdr.processo} · {print?"Visualização":"Edição"}</div>
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
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"14px 22px 12px",borderBottom:"3px solid "+G}}>
            <img src={LOGO} alt="Conexus" style={{height:64,objectFit:"contain"}}/>
            <div style={{textAlign:"right",fontSize:8.5,color:"#555",lineHeight:1.8}}>
              <div style={{fontWeight:700,color:BK,fontSize:10}}>CONEXUS PARTNERS LTDA</div>
              <div>RUA DAS ESMERALDAS, 395 - 12 ANDAR - BAIRRO: JARDIM - SANTO ANDRÉ - SP - BRASIL</div>
              <div>09090-770 - FONE: (11) 98775-2588 — CNPJ: 22.627.918/0001-06</div>
            </div>
          </div>

          <div style={{padding:"16px 22px"}}>
            <div style={{textAlign:"center",fontWeight:800,fontSize:14,padding:"8px",background:G+"22",marginBottom:14,borderRadius:2}}>DEMONSTRATIVO DE VALORES</div>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
              {[["Para:",hdr.cliente,"cliente"],["CNPJ:",hdr.cnpj,"cnpj"],["Endereço:",hdr.endereco,"endereco"],["Cidade:",hdr.cidade,"cidade"],["Data:",hdr.data,"data"],["Processo:",hdr.processo,"processo"],["Ref. Cliente:",hdr.refCliente,"refCliente"]].map(([l,v,k])=>(
                <div key={k} style={{display:"flex",gap:6,fontSize:12}}>
                  <span style={{fontWeight:700,whiteSpace:"nowrap",width:90,flexShrink:0}}>{l}</span>
                  {print?<span>{v}</span>:<E v={v} onChange={vv=>setH(k,vv)}/>}
                </div>
              ))}
            </div>

            <div style={{background:"#f9f9f9",border:"1px solid #eee",borderRadius:4,padding:"8px 12px",marginBottom:14,fontSize:12}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
                {[["Exportador:",hdr.exportador,"exportador"],["House:",hdr.house,"house"],["Mercadoria:",hdr.mercadoria,"mercadoria"],["Master:",hdr.master,"master"],["Procedência:",hdr.procedencia,"procedencia"],["Chegada:",hdr.chegada,"chegada"],["DUIMP:",hdr.duimp,"duimp"],["Entrega:",hdr.entrega,"entrega"],["Via Transporte:",hdr.viaTransporte,"viaTransporte"],["Taxa Dólar:",hdr.taxaDolar,"taxaDolar"],["Ptax:",hdr.ptax,"ptax"]].map(([l,v,k])=>(
                  <div key={k} style={{display:"flex",gap:6}}>
                    <span style={{fontWeight:700,whiteSpace:"nowrap",width:110,flexShrink:0}}>{l}</span>
                    {print?<span>{v}</span>:<E v={v} onChange={vv=>setH(k,vv)}/>}
                  </div>
                ))}
              </div>
            </div>

            <RowTable data={rows} setter={setRows} color={G}/>
            {!print && <button onClick={()=>setRows(p=>[...p,{desc:"Nova despesa",data:"",valor:""}])}
              style={{background:G+"18",color:G,border:"1px dashed "+G+"66",borderRadius:4,padding:"3px 12px",fontSize:10,cursor:"pointer",marginBottom:12}}>+ Adicionar despesa</button>}

            <div style={{fontWeight:700,fontSize:12,marginBottom:6,marginTop:8}}>ADIANTAMENTO</div>
            <RowTable data={adiant} setter={setAdiant} color="#5b8cd6"/>
            {!print && <button onClick={()=>setAdiant(p=>[...p,{desc:"Adiantamento",data:"",valor:""}])}
              style={{background:"#5b8cd622",color:"#5b8cd6",border:"1px dashed #5b8cd666",borderRadius:4,padding:"3px 12px",fontSize:10,cursor:"pointer",marginBottom:14}}>+ Adicionar adiantamento</button>}

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10,marginBottom:14}}>
              {[["Total despesas (1)","R$ "+fmt(total1),BK],["Adiantamento (2)","R$ "+fmt(total2),"#5b8cd6"],["Diferença à favor Conexus","-R$ "+fmt(diff),G]].map(([l,v,c])=>(
                <div key={l} style={{padding:"10px 12px",background:l.includes("Conexus")?G+"18":"#f9f9f9",border:"1px solid "+(l.includes("Conexus")?G+"44":"#eee"),borderRadius:4}}>
                  <div style={{fontSize:10,color:"#888",marginBottom:3}}>{l}</div>
                  <div style={{fontWeight:800,color:c,fontSize:l.includes("Conexus")?15:13,fontFamily:"monospace"}}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{fontSize:11,color:"#555",marginBottom:16,padding:"8px 12px",background:"#fafaf8",border:"1px solid #e8e0d5",borderRadius:4}}>
              Anexos os recibos, comprovantes e documentos comprobatórios do seu processo. Informamos que os mesmos deverão permanecer em arquivos à disposição da Receita Federal pelo prazo de 5 anos além do ano corrente conforme Art. 149 Parágrafo Único Lei 5.172/66 CTN.
            </div>

            <div style={{display:"flex",alignItems:"center",gap:12,paddingTop:10,borderTop:"1px solid #ddd"}}>
              <img src={LOGO} alt="" style={{height:40,objectFit:"contain"}}/>
              <div>
                <div style={{fontWeight:700,fontSize:12}}>CONEXUS PARTNERS LTDA.</div>
                <div style={{fontSize:11,color:"#555"}}>22.627.918/0001-06</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Fatura, Demonstrativo };
export default Fatura;
