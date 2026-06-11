/* eslint-disable */
import { useState } from "react";

const LOGO = "https://raw.githubusercontent.com/Conexus-system/Conexus-system/main/Logo.png";

const G = "#bd914c";
const W = "#ffffff";
const BK = "#111111";

// Campo editável inline
const E = ({ v, onChange, w, mono, align="left", bold, size=12, color=BK }) => (
  <input value={v} onChange={e=>onChange(e.target.value)}
    style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",
      fontSize:size,fontWeight:bold?"700":"400",color,fontFamily:mono?"monospace":"inherit",
      background:"transparent",width:w||"100%",textAlign:align,padding:"1px 2px"}}/>
);

// Campo editável textarea
const ET = ({ v, onChange, rows=3 }) => (
  <textarea value={v} onChange={e=>onChange(e.target.value)} rows={rows}
    style={{border:"1px dashed #ccc",outline:"none",fontSize:11,color:BK,
      fontFamily:"inherit",background:"transparent",width:"100%",resize:"vertical",padding:"2px 4px"}}/>
);

const fmtNum = (n) => {
  if(!n && n!==0) return "";
  const num = parseFloat(String(n).replace(",","."));
  if(isNaN(num)) return n;
  return num.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});
};

const calcRow = (row) => {
  if(row.total) return parseFloat(String(row.total).replace(",",".")) || 0;
  const v = parseFloat(String(row.valor).replace(",",".")) || 0;
  const q = parseFloat(String(row.qtde).replace(",",".")) || 0;
  return v * q;
};

const calcSubtotals = (rows) => {
  const t = {};
  rows.forEach(r => {
    const m = r.moeda || "USD";
    t[m] = (t[m]||0) + calcRow(r);
  });
  return t;
};

const defaultFrete = [
  { taxa:"Frete aéreo", moeda:"USD", valor:"4,72", un:"kg", qtde:"", total:"" },
];
const defaultOrigem = [
  { taxa:"AWB Fee",           moeda:"USD", valor:"40,00",  un:"awb",          qtde:"1", total:"" },
  { taxa:"Coleta",            moeda:"USD", valor:"580,00", un:"processo",     qtde:"1", total:"" },
  { taxa:"In/Out Fee",        moeda:"USD", valor:"0,08",   un:"kg mín. 75,00",qtde:"",  total:"" },
  { taxa:"Sed Fee",           moeda:"USD", valor:"35,00",  un:"awb",          qtde:"1", total:"" },
  { taxa:"Other Charges",     moeda:"USD", valor:"265,00", un:"processo",     qtde:"1", total:"" },
];
const defaultDestino = [
  { taxa:"Desconsolidação",      moeda:"USD", valor:"100,00", un:"AWB",            qtde:"1", total:"" },
  { taxa:"Collect Fee",          moeda:"USD", valor:"3%",     un:"mínimo 35,00",   qtde:"1", total:"35" },
  { taxa:"Delivery Fee",         moeda:"USD", valor:"60,00",  un:"AWB",            qtde:"1", total:"" },
  { taxa:"Seguro Internacional", moeda:"BRL", valor:"",       un:"processo",       qtde:"1", total:"" },
  { taxa:"Handling",             moeda:"EUR", valor:"100,00", un:"processo",       qtde:"1", total:"" },
  { taxa:"IOF",                  moeda:"USD", valor:"3,5%",   un:"percentual",     qtde:"1", total:"" },
];
const defaultRemarks = [
  { label:"Honorários + SDA + LI", valor:"R$ 1.290,00" },
];
const defaultEntrega = [
  { label:"Frete",    valor:"1.400,00" },
  { label:"ADV",      valor:"0,10% NF" },
  { label:"GRIS",     valor:"" },
  { label:"ICMS/ISS", valor:"conforme legislação" },
];
const defaultArmazenagem = [
  { periodo:"1º - Até 02 dias úteis",     pct:"0,86%" },
  { periodo:"2º - De 03 a 05 dias úteis", pct:"1,72%" },
  { periodo:"3º - De 06 a 10 dias úteis", pct:"2,59%" },
  { periodo:"4º - De 11 a 20 dias úteis", pct:"5,18%" },
];

export default function PropostaAerea({ onBack }) {
  const [hdr, setHdr] = useState({
    cotacao:"CP251258", tipo:"IMPORTAÇÃO",
    cliente:"", cnpj:"", data: new Date().toLocaleDateString("pt-BR"),
    incoterm:"EXW", coleta:"", origem:"Miami", destino:"",
    volume:"", pesoBruto:"", pesoTaxado:"",
    transit:"3 - 5 dias aprox.", rota:"via LIS", frequencia:"3 saídas por semana",
    valorMerc:"", validade:"", ptax:"3%", observacao:"",
  });
  const [frete,   setFrete]   = useState(defaultFrete);
  const [origem,  setOrigem]  = useState(defaultOrigem);
  const [destino, setDestino] = useState(defaultDestino);
  const [remarks, setRemarks] = useState(defaultRemarks);
  const [entrega, setEntrega] = useState(defaultEntrega);
  const [armaz,   setArmaz]   = useState(defaultArmazenagem);
  const [seguro,  setSeguro]  = useState({ moeda:"USD", valor:"" });
  const [obsGeral,setObsGeral]= useState("*De acordo com o Decreto nº 12.466, de 22 de maio de 2025, as operações de câmbio estão sujeitas ao Imposto sobre Operações Financeiras (IOF) com alíquota de 3,5%, que será acrescida no momento do faturamento.\n* Valores informados de acordo com a invoice enviada. Caso tenha alguma alteração, os valores deverão ser revisados.\n* Na proposta acima, não contempla os custos de nacionalização da carga (impostos).");
  const [rodape,  setRodape]  = useState({
    nome:"GRAZIELA L. ROSSATO", cargo:"CONEXUS PARTNERS",
    email:"graziela.rossato@conexuspartners.com.br",
    cel:"(+55 11) 9 8775-2588", skype:"graziela_luana",
    site:"www.conexuspartners.com.br",
  });
  const [hdrInfo, setHdrInfo] = useState({
    razao:"CONEXUS PARTNERS LTDA",
    end1:"RUA DAS ESMERALDAS, 395 - 12º ANDAR - BAIRRO JARDIM - SANTO ANDRÉ - SP - BRASIL",
    end2:"09090-770 - TELEFONE: (+55 11) 98775-2588",
    cnpj:"CNPJ: 22.627.918/0001-06",
  });
  const [print, setPrint] = useState(false);

  const setH = (k,v) => setHdr(p=>({...p,[k]:v}));
  const setR = (k,v) => setRodape(p=>({...p,[k]:v}));
  const setHI = (k,v) => setHdrInfo(p=>({...p,[k]:v}));

  const updRow = (setter, i, k, v) => setter(p=>{ const r=[...p]; r[i]={...r[i],[k]:v}; return r; });
  const addRow = (setter, def) => setter(p=>[...p, {...def}]);
  const rmRow  = (setter, i)   => setter(p=>p.filter((_,x)=>x!==i));

  const stFrete   = calcSubtotals(frete);
  const stOrigem  = calcSubtotals(origem);
  const stDestino = calcSubtotals(destino);

  const totalGeral = {};
  [stFrete, stOrigem, stDestino].forEach(st => {
    Object.entries(st).forEach(([m,v]) => { totalGeral[m] = (totalGeral[m]||0)+v; });
  });

  const moedaColor = { USD:G, EUR:"#5b8cd6", BRL:"#3ecf8e", GBP:"#a78bfa" };

  // ── Tabela de taxas ───────────────────────────────────────────────────────
  const TaxaTable = ({ title, rows, setter, addDef, color="#bd914c" }) => (
    <div style={{marginBottom:14}}>
      <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
        <thead>
          <tr style={{background:color+"22"}}>
            <th style={{padding:"6px 8px",textAlign:"left",fontWeight:800,fontSize:11,textTransform:"uppercase",color:BK,borderBottom:"2px solid "+color,width:"28%"}}>{title}</th>
            <th style={{padding:"6px 8px",textAlign:"center",fontWeight:700,fontSize:10,color:"#555",borderBottom:"2px solid "+color,width:"9%"}}>MOEDA</th>
            <th style={{padding:"6px 8px",textAlign:"center",fontWeight:700,fontSize:10,color:"#555",borderBottom:"2px solid "+color,width:"13%"}}>VALOR UNIT.</th>
            <th style={{padding:"6px 8px",textAlign:"left",fontWeight:700,fontSize:10,color:"#555",borderBottom:"2px solid "+color,width:"22%"}}>UN. EMBARQUE</th>
            <th style={{padding:"6px 8px",textAlign:"center",fontWeight:700,fontSize:10,color:"#555",borderBottom:"2px solid "+color,width:"9%"}}>QTDE.</th>
            <th style={{padding:"6px 8px",textAlign:"center",fontWeight:700,fontSize:10,color:"#555",borderBottom:"2px solid "+color,width:"11%"}}>TOTAL</th>
            {!print && <th style={{width:22}}/>}
          </tr>
        </thead>
        <tbody>
          {rows.map((row,i) => {
            const tot = calcRow(row);
            return (
              <tr key={i} style={{borderBottom:"1px solid #eee"}}>
                <td style={{padding:"5px 8px"}}>
                  {print ? <span>{row.taxa}</span> :
                    <E v={row.taxa} onChange={v=>updRow(setter,i,"taxa",v)}/>}
                </td>
                <td style={{padding:"5px 8px",textAlign:"center"}}>
                  {print ? <span style={{color:moedaColor[row.moeda]||"#555",fontWeight:600}}>{row.moeda}</span> :
                    <input value={row.moeda} onChange={e=>updRow(setter,i,"moeda",e.target.value)}
                      style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:11,fontFamily:"monospace",fontWeight:600,color:moedaColor[row.moeda]||"#555",background:"transparent",textAlign:"center",width:40}}/>}
                </td>
                <td style={{padding:"5px 8px",textAlign:"center"}}>
                  {print ? <span style={{fontFamily:"monospace"}}>{row.valor}</span> :
                    <E v={row.valor} onChange={v=>updRow(setter,i,"valor",v)} align="center" mono/>}
                </td>
                <td style={{padding:"5px 8px",fontSize:10,color:"#555"}}>
                  {print ? row.un :
                    <E v={row.un} onChange={v=>updRow(setter,i,"un",v)} size={10} color="#555"/>}
                </td>
                <td style={{padding:"5px 8px",textAlign:"center",fontFamily:"monospace"}}>
                  {print ? row.qtde :
                    <E v={row.qtde} onChange={v=>updRow(setter,i,"qtde",v)} align="center" mono/>}
                </td>
                <td style={{padding:"5px 8px",textAlign:"center",fontFamily:"monospace",fontWeight:700,color:"#333"}}>
                  {print ? (row.total || (tot>0 ? fmtNum(tot) : "—")) :
                    <E v={row.total} onChange={v=>updRow(setter,i,"total",v)} align="center" mono placeholder="auto"/>}
                </td>
                {!print && <td style={{padding:"5px 2px",textAlign:"center"}}>
                  <button onClick={()=>rmRow(setter,i)} style={{background:"none",border:"none",color:"#ccc",cursor:"pointer",fontSize:14,lineHeight:1}}
                    onMouseOver={e=>e.currentTarget.style.color="#e05c72"} onMouseOut={e=>e.currentTarget.style.color="#ccc"}>×</button>
                </td>}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {/* Subtotals por moeda */}
          {Object.entries(calcSubtotals(rows)).map(([m,v])=>(
            <tr key={m} style={{background:"#f9f9f9"}}>
              <td colSpan={print?5:6} style={{padding:"5px 8px",textAlign:"right",fontWeight:700,color:"#555",fontSize:10}}>
                Sub-total {m}
              </td>
              <td style={{padding:"5px 8px",textAlign:"center",fontWeight:800,color:moedaColor[m]||"#333",fontFamily:"monospace",borderTop:"1px solid #ddd"}}>
                {fmtNum(v)}
              </td>
              {!print && <td/>}
            </tr>
          ))}
          {!print && (
            <tr>
              <td colSpan={7} style={{padding:"5px 8px"}}>
                <button onClick={()=>addRow(setter,addDef)}
                  style={{background:color+"18",color:color,border:"1px dashed "+color+"66",borderRadius:4,padding:"3px 12px",fontSize:10,cursor:"pointer",fontFamily:"inherit"}}>
                  + Adicionar taxa
                </button>
              </td>
            </tr>
          )}
        </tfoot>
      </table>
    </div>
  );

  return (
    <div style={{background:"#f0f0f0",minHeight:"100vh",fontFamily:"'Calibri','Segoe UI',sans-serif"}}>
      {/* TOOLBAR */}
      <div style={{background:"#1e2028",padding:"10px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:100}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <img src={LOGO} alt="Conexus" style={{height:38,objectFit:"contain"}}/>
          <div style={{borderLeft:"1px solid #333",paddingLeft:10,marginLeft:4}}>
            <div style={{fontSize:12,color:"#eee",fontWeight:600}}>Proposta Aérea</div>
            <div style={{fontSize:10,color:"#888"}}>{hdr.cotacao} · {print?"Modo Visualização":"Modo Edição"}</div>
          </div>
        </div>
        <div style={{display:"flex",gap:8}}>
          <button onClick={onBack} style={{background:"transparent",color:"#888",border:"1px solid #333",borderRadius:6,padding:"6px 14px",fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>
            ← Voltar
          </button>
          <button onClick={()=>setPrint(!print)} style={{background:G+"22",color:G,border:"1px dashed "+color+"66",borderRadius:6,padding:"6px 14px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>
            {print ? "✎ Editar" : "👁 Visualizar"}
          </button>
          <button onClick={()=>window.print()} style={{background:G,color:"#111",border:"none",borderRadius:6,padding:"6px 16px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
            ↓ Gerar PDF
          </button>
        </div>
      </div>

      {/* PROPOSTA */}
      <div style={{maxWidth:950,margin:"0 auto",padding:"20px 16px"}} id="proposta-print">
        <div style={{background:W,borderRadius:6,boxShadow:"0 2px 20px #0003",overflow:"hidden"}}>

          {/* CABEÇALHO */}
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 24px 12px",borderBottom:"2px solid "+color}}>
            <img src={LOGO} alt="Conexus Partners" style={{height:72,objectFit:"contain"}}/>
            <div style={{textAlign:"right"}}>
              {print ? (
                <div style={{fontSize:8.5,color:"#555",lineHeight:1.8}}>
                  <div style={{fontWeight:700,color:BK,fontSize:10}}>{hdrInfo.razao}</div>
                  <div>{hdrInfo.end1}</div>
                  <div>{hdrInfo.end2}</div>
                  <div>{hdrInfo.cnpj}</div>
                </div>
              ) : (
                <div style={{display:"flex",flexDirection:"column",gap:3,alignItems:"flex-end"}}>
                  {[["Razão Social","razao"],["Endereço","end1"],["CEP/Fone","end2"],["CNPJ","cnpj"]].map(([l,k])=>(
                    <div key={k} style={{display:"flex",alignItems:"center",gap:4}}>
                      <span style={{fontSize:8,color:"#aaa",whiteSpace:"nowrap"}}>{l}:</span>
                      <input value={hdrInfo[k]} onChange={e=>setHI(k,e.target.value)}
                        style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:8.5,color:"#555",background:"transparent",textAlign:"right",width:260}}/>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div style={{padding:"14px 24px"}}>

            {/* LINHA COTAÇÃO */}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",background:G+"22",marginBottom:14,borderRadius:2}}>
              <div style={{display:"flex",alignItems:"center",gap:10}}>
                <span style={{fontWeight:800,fontSize:12,color:BK}}>COTAÇÃO:</span>
                {print ? <span style={{fontWeight:700,fontSize:12}}>{hdr.cotacao}</span> :
                  <E v={hdr.cotacao} onChange={v=>setH("cotacao",v)} w={120} bold size={12}/>}
              </div>
              <div>
                {print ? <span style={{fontWeight:700,fontSize:12,color:BK}}>{hdr.tipo}</span> :
                  <select value={hdr.tipo} onChange={e=>setH("tipo",e.target.value)}
                    style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:12,fontWeight:700,background:"transparent",cursor:"pointer"}}>
                    <option>IMPORTAÇÃO</option><option>EXPORTAÇÃO</option>
                  </select>}
              </div>
            </div>

            {/* INTRO */}
            <div style={{fontSize:11,color:"#444",marginBottom:14}}>
              <div>Agradecemos pela sua cotação.</div>
              <div>Segue abaixo nossos valores para sua análise e aprovação de acordo com os dados informados:</div>
            </div>

            {/* DADOS CLIENTE */}
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:0,marginBottom:16}}>
              <table style={{borderCollapse:"collapse",fontSize:12}}>
                <tbody>
                  {[["CLIENTE:","cliente"],["CNPJ:","cnpj"],["DATA:","data"]].map(([l,k])=>(
                    <tr key={k}><td style={{padding:"2px 8px 2px 0",fontWeight:700,color:BK,whiteSpace:"nowrap"}}>{l}</td>
                    <td style={{padding:"2px 4px"}}>
                      {print ? <span>{hdr[k]}</span> : <E v={hdr[k]} onChange={v=>setH(k,v)} bold={k==="cliente"}/>}
                    </td></tr>
                  ))}
                </tbody>
              </table>
              <table style={{borderCollapse:"collapse",fontSize:12}}>
                <tbody>
                  {[["Incoterm:","incoterm"],["Frequência:","frequencia"],["Rota:","rota"]].map(([l,k])=>(
                    <tr key={k}><td style={{padding:"2px 8px 2px 14px",fontWeight:700,color:BK,whiteSpace:"nowrap"}}>{l}</td>
                    <td style={{padding:"2px 4px"}}>
                      {print ? <span>{hdr[k]}</span> : <E v={hdr[k]} onChange={v=>setH(k,v)}/>}
                    </td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* DADOS EMBARQUE */}
            <div style={{background:"#fafaf8",border:"1px solid #e8e0d5",borderRadius:4,padding:"10px 14px",marginBottom:16}}>
              <table style={{borderCollapse:"collapse",width:"100%",fontSize:12}}>
                <tbody>
                  {[["Coleta:","coleta"],["Origem:","origem"],["Destino:","destino"],["Volume:","volume"],["Peso bruto:","pesoBruto"],["Peso taxado:","pesoTaxado"],["Transit time:","transit"],["Valor mercadoria:","valorMerc"],["Validade p/ embarque:","validade"],["PTAX:","ptax"],["Observação:","observacao"]].map(([l,k])=>(
                    <tr key={k}>
                      <td style={{padding:"2px 10px 2px 0",fontWeight:700,color:"#333",whiteSpace:"nowrap",width:140}}>{l}</td>
                      <td style={{padding:"2px 0"}}>
                        {print ? <span style={{color:k==="observacao"?"#cc3333":BK,fontWeight:k==="observacao"?"700":"400"}}>{hdr[k]}</span> :
                          <E v={hdr[k]} onChange={v=>setH(k,v)} color={k==="observacao"?"#cc3333":BK} bold={k==="observacao"}/>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* DETALHES */}
            <div style={{fontWeight:800,fontSize:12,color:BK,marginBottom:10,paddingBottom:4,borderBottom:"2px solid "+color}}>DETALHES DA COTAÇÃO:</div>

            {/* CUSTOS FRETE */}
            <TaxaTable title="CUSTOS DE FRETE" rows={frete} setter={setFrete}
              addDef={{taxa:"Frete aéreo",moeda:"USD",valor:"",un:"kg",qtde:"",total:""}} color={G}/>

            {/* TAXAS ORIGEM */}
            <TaxaTable title="TAXAS DE ORIGEM" rows={origem} setter={setOrigem}
              addDef={{taxa:"Nova taxa",moeda:"USD",valor:"",un:"processo",qtde:"1",total:""}} color={G}/>

            {/* TAXAS DESTINO */}
            <TaxaTable title="TAXAS DE DESTINO" rows={destino} setter={setDestino}
              addDef={{taxa:"Nova taxa",moeda:"USD",valor:"",un:"processo",qtde:"1",total:""}} color="#5b8cd6"/>

            {/* TOTAL GERAL */}
            <div style={{display:"flex",justifyContent:"flex-end",marginBottom:20}}>
              <div style={{background:G,borderRadius:6,padding:"10px 20px",display:"flex",alignItems:"center",gap:24}}>
                <span style={{fontWeight:800,fontSize:13,color:W,letterSpacing:"0.06em"}}>TOTAL GERAL</span>
                <div style={{display:"flex",flexDirection:"column",gap:2,alignItems:"flex-end"}}>
                  {Object.entries(totalGeral).map(([m,v])=>(
                    <div key={m} style={{display:"flex",alignItems:"baseline",gap:6}}>
                      <span style={{fontSize:11,color:"#fff9",fontWeight:600}}>{m}</span>
                      <span style={{fontWeight:900,fontSize:18,color:W,fontFamily:"monospace"}}>{fmtNum(v)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* REMARKS */}
            <div style={{marginBottom:16}}>
              <div style={{fontWeight:800,fontSize:12,color:BK,marginBottom:8,textTransform:"uppercase",letterSpacing:"0.05em",borderBottom:"1px solid #ddd",paddingBottom:4}}>REMARKS:</div>

              {/* Seguro Internacional */}
              <div style={{marginBottom:10}}>
                <div style={{fontWeight:700,fontSize:12,marginBottom:4}}>SEGURO INTERNACIONAL (OPCIONAL):</div>
                <div style={{display:"flex",alignItems:"center",gap:8,fontSize:12}}>
                  {print ? <span style={{color:"#555"}}>{seguro.moeda} $ {seguro.valor}</span> :
                    <>
                      <input value={seguro.moeda} onChange={e=>setSeguro(p=>({...p,moeda:e.target.value}))}
                        style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:12,fontFamily:"monospace",color:G,background:"transparent",width:45}}/>
                      <span>$</span>
                      <input value={seguro.valor} onChange={e=>setSeguro(p=>({...p,valor:e.target.value}))}
                        style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:12,fontFamily:"monospace",color:BK,background:"transparent",width:80}}/>
                    </>}
                </div>
                <div style={{fontSize:11,color:"#555",marginTop:3}}>Faça seu transporte contratando nosso seguro internacional e fique despreocupado.</div>
              </div>

              {/* Desembaraço */}
              <div style={{marginBottom:10}}>
                <div style={{fontWeight:700,fontSize:12,marginBottom:6}}>DESEMBARAÇO ADUANEIRO:</div>
                {remarks.map((r,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:8,marginBottom:4}}>
                    {print ? <span style={{fontSize:12}}>{r.label} = R$ {r.valor}</span> :
                      <>
                        <input value={r.label} onChange={e=>updRow(setRemarks,i,"label",e.target.value)}
                          style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:12,color:BK,background:"transparent",width:240}}/>
                        <span style={{color:"#888",fontSize:12,whiteSpace:"nowrap"}}>=  R$</span>
                        <input value={r.valor} onChange={e=>updRow(setRemarks,i,"valor",e.target.value)}
                          style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:12,fontFamily:"monospace",color:BK,background:"transparent",width:100}}/>
                        <button onClick={()=>rmRow(setRemarks,i)} style={{background:"none",border:"none",color:"#ccc",cursor:"pointer",fontSize:14}}
                          onMouseOver={e=>e.currentTarget.style.color="#e05c72"} onMouseOut={e=>e.currentTarget.style.color="#ccc"}>×</button>
                      </>}
                  </div>
                ))}
                {!print && <button onClick={()=>setRemarks(p=>[...p,{label:"Nova taxa",valor:"0,00"}])}
                  style={{background:"#f5f5f5",color:"#888",border:"1px dashed #ccc",borderRadius:4,padding:"2px 10px",fontSize:10,cursor:"pointer",marginTop:4}}>
                  + Adicionar item
                </button>}
              </div>

              {/* Entrega Final */}
              <div style={{marginBottom:10}}>
                <div style={{fontWeight:700,fontSize:12,marginBottom:6}}>ENTREGA FINAL:</div>
                <table style={{borderCollapse:"collapse",fontSize:12}}>
                  <tbody>
                    {entrega.map((r,i)=>(
                      <tr key={i}>
                        <td style={{padding:"2px 10px 2px 0",fontWeight:700,color:"#333",whiteSpace:"nowrap"}}>
                          {print ? <span>{r.label}:</span> :
                            <input value={r.label} onChange={e=>updRow(setEntrega,i,"label",e.target.value)}
                              style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:12,color:"#333",background:"transparent",width:80}}/>}
                        </td>
                        <td style={{padding:"2px 4px",color:"#888",fontSize:11,whiteSpace:"nowrap"}}>
                          {!["ADV","GRIS","ICMS/ISS"].includes(r.label) ? "R$" : ""}
                        </td>
                        <td style={{padding:"2px 0"}}>
                          {print ? <span style={{fontFamily:"monospace"}}>{r.valor}</span> :
                            <input value={r.valor} onChange={e=>updRow(setEntrega,i,"valor",e.target.value)}
                              style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:12,fontFamily:"monospace",color:BK,background:"transparent",width:140}}/>}
                        </td>
                        {!print && <td>
                          <button onClick={()=>rmRow(setEntrega,i)} style={{background:"none",border:"none",color:"#ccc",cursor:"pointer",fontSize:13}}
                            onMouseOver={e=>e.currentTarget.style.color="#e05c72"} onMouseOut={e=>e.currentTarget.style.color="#ccc"}>×</button>
                        </td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {!print && <button onClick={()=>addRow(setEntrega,{label:"Nova linha",valor:""})}
                  style={{background:"#f5f5f5",color:"#888",border:"1px dashed #ccc",borderRadius:4,padding:"2px 10px",fontSize:10,cursor:"pointer",marginTop:4}}>
                  + Adicionar linha
                </button>}
              </div>

              {/* Tabela Armazenagem */}
              <div style={{marginBottom:14}}>
                <div style={{fontWeight:700,fontSize:12,marginBottom:6}}>ARMAZENAGEM ESTIMADA:</div>
                <table style={{borderCollapse:"collapse",width:"100%",fontSize:11}}>
                  <thead>
                    <tr style={{background:G+"22"}}>
                      <th style={{padding:"6px 10px",fontWeight:700,textAlign:"left",color:G,borderBottom:"2px solid "+color}}>TABELA DE ARMAZENAGEM</th>
                      <th style={{padding:"6px 10px",fontWeight:700,textAlign:"center",color:G,borderBottom:"2px solid "+color}}>% SOBRE VALOR CIF</th>
                      <th style={{padding:"6px 10px",fontWeight:700,textAlign:"right",color:G,borderBottom:"2px solid "+color}}>VALOR ESTIMADO</th>
                    </tr>
                  </thead>
                  <tbody>
                    {armaz.map((r,i)=>(
                      <tr key={i} style={{borderBottom:"1px solid #eee"}}>
                        <td style={{padding:"5px 10px"}}>
                          {print ? r.periodo :
                            <input value={r.periodo} onChange={e=>updRow(setArmaz,i,"periodo",e.target.value)}
                              style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:11,color:BK,background:"transparent",width:"100%"}}/>}
                        </td>
                        <td style={{padding:"5px 10px",textAlign:"center",fontFamily:"monospace"}}>
                          {print ? r.pct :
                            <input value={r.pct} onChange={e=>updRow(setArmaz,i,"pct",e.target.value)}
                              style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:11,fontFamily:"monospace",color:BK,background:"transparent",textAlign:"center",width:60}}/>}
                        </td>
                        <td style={{padding:"5px 10px",textAlign:"right",color:"#888",fontSize:10}}>calculado na confirmação</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr style={{background:"#f9f7f4"}}>
                      <td colSpan={3} style={{padding:"6px 10px",fontSize:10,color:"#888"}}>
                        OBS: Considerando o valor da mercadoria de: R  Taxa dólar: _______ Data: _______
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* OBS GERAIS */}
            <div style={{marginBottom:18,background:"#fdfaf6",border:"1px solid #e8e0d5",borderRadius:4,padding:"10px 14px"}}>
              <div style={{fontWeight:700,fontSize:11,color:"#888",textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:6}}>OBSERVAÇÕES GERAIS:</div>
              {print ? <div style={{fontSize:11,color:BK,whiteSpace:"pre-wrap"}}>{obsGeral}</div> :
                <textarea value={obsGeral} onChange={e=>setObsGeral(e.target.value)} rows={4}
                  style={{width:"100%",border:"1px solid #ddd",borderRadius:4,outline:"none",fontSize:11,color:BK,background:W,fontFamily:"inherit",resize:"vertical",boxSizing:"border-box",padding:"6px 8px"}}/>}
            </div>

            {/* RODAPÉ */}
            <div style={{borderTop:"1px solid #ddd",paddingTop:14,marginBottom:20}}>
              <div style={{fontSize:11,color:"#555",marginBottom:10}}>Atenciosamente,</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                    <img src={LOGO} alt="" style={{height:32,objectFit:"contain"}}/>
                    <div>
                      {print ? <>
                        <div style={{fontWeight:700,fontSize:12,color:BK}}>{rodape.nome}</div>
                        <div style={{fontWeight:700,fontSize:11,color:G}}>{rodape.cargo}</div>
                      </> : <>
                        <input value={rodape.nome} onChange={e=>setR("nome",e.target.value)}
                          style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:12,fontWeight:700,color:BK,background:"transparent",display:"block",width:200}}/>
                        <input value={rodape.cargo} onChange={e=>setR("cargo",e.target.value)}
                          style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:11,fontWeight:700,color:G,background:"transparent",display:"block",width:200}}/>
                      </>}
                    </div>
                  </div>
                  {print ? <>
                    <div style={{fontSize:10,color:"#555"}}>E-mail: {rodape.email}</div>
                    <div style={{fontSize:10,color:"#555"}}>Cel e whats: {rodape.cel}</div>
                    <div style={{fontSize:10,color:"#555"}}>Skype: {rodape.skype}</div>
                    <div style={{fontSize:10,color:"#555"}}>Site: {rodape.site}</div>
                  </> : [["E-mail","email"],["Cel/Whats","cel"],["Skype","skype"],["Site","site"]].map(([l,k])=>(
                    <div key={k} style={{display:"flex",alignItems:"center",gap:4,marginBottom:2}}>
                      <span style={{fontSize:9,color:"#aaa",width:50,flexShrink:0}}>{l}:</span>
                      <input value={rodape[k]} onChange={e=>setR(k,e.target.value)}
                        style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:10,color:"#555",background:"transparent",flex:1}}/>
                    </div>
                  ))}
                </div>
                <div style={{borderLeft:"1px dashed #ccc",paddingLeft:20}}>
                  <div style={{fontSize:11,color:"#555",marginBottom:16}}>DE ACORDO: ______________________________________</div>
                  <div style={{fontSize:10,color:"#777"}}>Responsável (cliente): nome, assinatura e carimbo da empresa.</div>
                  <div style={{fontSize:10,color:"#777",marginTop:10}}>DATA: _____ / _____ / {new Date().getFullYear()}</div>
                </div>
              </div>
            </div>

          </div>{/* end padding */}
        </div>{/* end white card */}
      </div>

      <style>{}</style>
    </div>
  );
}
