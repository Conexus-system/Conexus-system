/* eslint-disable */
import { useState } from "react";

const LOGO = "https://raw.githubusercontent.com/Conexus-system/Conexus-system/main/Logo.png";
const G = "#bd914c";
const W = "#ffffff";
const BK = "#111111";

const E = ({ v, onChange, w, bold, size=12, color=BK, placeholder="" }) => (
  <input value={v} onChange={e=>onChange(e.target.value)} placeholder={placeholder}
    style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",
      fontSize:size,fontWeight:bold?"700":"400",color,
      background:"transparent",width:w||"100%",padding:"1px 2px"}}/>
);

const defRows = [
  { desc:"Transporte rodoviário", un:"viagem", valor:"", obs:"" },
];

export default function PropostaRodoviaria({ onBack }) {
  const [hdr, setHdr] = useState({
    cotacao:"CP251000", data: new Date().toLocaleDateString("pt-BR"),
    cliente:"", cnpj:"", att:"", email:"",
    coleta:"", entrega:"", validade:"15 (quinze) dias",
  });
  const [rows, setRows] = useState(defRows);
  const [clausulas, setClausulas] = useState("- Estadias conjunto transportador: após carência de 12 horas no carregamento e 12 horas no descarregamento, cobraremos R$ 1.400,00 por equipamento/dia.\n- Estadia(s) de batedor(es): R$ 700,00 por viatura.\n- ISSQN não incluso, cobrado conforme legislação.\n- Seguro (ad valorem): 0,2% sobre valor da mercadoria/NF.\n- Reajuste conforme IGP-M/FGV.\n- Pagamento: 8 dias da data do carregamento.\n- Após vencimento: multa 2% + juros 1% a.m. + correção IGP-M.");
  const [rodape, setRodape] = useState({
    nome:"GRAZIELA L. ROSSATO", cargo:"CONEXUS PARTNERS",
    email:"graziela.rossato@conexuspartners.com.br",
    cel:"(+55 11) 9 8775-2588", site:"www.conexuspartners.com.br",
  });
  const [print, setPrint] = useState(false);
  const setH = (k,v) => setHdr(p=>({...p,[k]:v}));
  const setR = (k,v) => setRodape(p=>({...p,[k]:v}));
  const updRow = (i,k,v) => setRows(p=>{ const r=[...p]; r[i]={...r[i],[k]:v}; return r; });

  return (
    <div style={{background:"#f0f0f0",minHeight:"100vh",fontFamily:"'Calibri','Segoe UI',sans-serif"}}>
      <div style={{background:"#1e2028",padding:"10px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:100}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <img src={LOGO} alt="Conexus" style={{height:38,objectFit:"contain"}}/>
          <div style={{borderLeft:"1px solid #333",paddingLeft:10}}>
            <div style={{fontSize:12,color:"#eee",fontWeight:600}}>Proposta Rodoviária</div>
            <div style={{fontSize:10,color:"#888"}}>{hdr.cotacao} · {print?"Visualização":"Edição"}</div>
          </div>
        </div>
        <div style={{display:"flex",gap:8}}>
          <button onClick={onBack} style={{background:"transparent",color:"#888",border:"1px solid #333",borderRadius:6,padding:"6px 14px",fontSize:12,cursor:"pointer",fontFamily:"inherit"}}>← Voltar</button>
          <button onClick={()=>setPrint(!print)} style={{background:G+"22",color:G,border:"1px solid "+G+"44",borderRadius:6,padding:"6px 14px",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit"}}>{print ? "✎ Editar" : "👁 Visualizar"}</button>
          <button onClick={()=>window.print()} style={{background:G,color:"#111",border:"none",borderRadius:6,padding:"6px 16px",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>↓ Gerar PDF</button>
        </div>
      </div>

      <div style={{maxWidth:950,margin:"0 auto",padding:"20px 16px"}}>
        <div style={{background:W,borderRadius:6,boxShadow:"0 2px 20px #0003"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 24px 12px",borderBottom:"3px solid "+G}}>
            <img src={LOGO} alt="Conexus Partners" style={{height:72,objectFit:"contain"}}/>
            <div style={{textAlign:"right",fontSize:8.5,color:"#555",lineHeight:1.8}}>
              <div style={{fontWeight:700,color:BK,fontSize:10}}>CONEXUS PARTNERS LTDA</div>
              <div>RUA DAS ESMERALDAS, 395 - 12º ANDAR - BAIRRO JARDIM - SANTO ANDRÉ - SP - BRASIL</div>
              <div>09090-770 - TELEFONE: (+55 11) 98775-2588</div>
              <div>CNPJ: 22.627.918/0001-06</div>
            </div>
          </div>

          <div style={{padding:"20px 28px"}}>
            <div style={{textAlign:"right",marginBottom:16,fontSize:12}}>
              Santo André, {print ? hdr.data : <E v={hdr.data} onChange={v=>setH("data",v)} w={120} align="right"/>}
            </div>

            <div style={{marginBottom:16,fontSize:12}}>
              <div style={{fontWeight:700,marginBottom:4}}>A</div>
              <div style={{fontWeight:800,fontSize:13,marginBottom:2}}>
                {print ? hdr.cliente : <E v={hdr.cliente} onChange={v=>setH("cliente",v)} bold placeholder="NOME DO CLIENTE" size={13}/>}
              </div>
              {hdr.att && <div>Att.: {hdr.att}</div>}
              <div style={{marginTop:4}}><strong>Ref.: Proposta Comercial {hdr.cotacao}</strong></div>
              <div>E-mail: {print ? hdr.email : <E v={hdr.email} onChange={v=>setH("email",v)} placeholder="email@cliente.com"/>}</div>
            </div>

            <div style={{marginBottom:16,fontSize:12}}>
              <p>Prezados Senhores,</p>
              <p style={{marginTop:8}}>É com satisfação que apresentamos a V. Sas., nossas condições técnicas e comerciais para a execução dos serviços de <strong>transporte rodoviário</strong>, conforme as condições abaixo descritas:</p>
            </div>

            <div style={{marginBottom:12,fontSize:12}}>
              <div style={{fontWeight:700,marginBottom:6}}>- ESCOPO DO SERVIÇO:</div>
              <p>Serviço(s) de transporte(s) rodoviário(s) comuns e/ou especiais de cargas ou equipamentos, conforme a planilha do item preços.</p>
            </div>

            <div style={{marginBottom:12,fontSize:12}}>
              <div style={{fontWeight:700,marginBottom:6}}>- LOCAL DA EXECUÇÃO DO SERVIÇO:</div>
              <div style={{marginLeft:16}}>
                <div>• Local de coleta: {print ? hdr.coleta : <E v={hdr.coleta} onChange={v=>setH("coleta",v)} placeholder="Endereço de coleta"/>}</div>
                <div style={{marginTop:4}}>• Local de entrega: {print ? hdr.entrega : <E v={hdr.entrega} onChange={v=>setH("entrega",v)} placeholder="Endereço de entrega"/>}</div>
              </div>
            </div>

            <div style={{marginBottom:6,fontWeight:700,fontSize:12}}>- PREÇOS:</div>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:12,marginBottom:8}}>
              <thead>
                <tr style={{background:G+"22",borderBottom:"2px solid "+G}}>
                  <th style={{padding:"8px 10px",textAlign:"left",fontWeight:700}}>DESCRIÇÃO DO SERVIÇO</th>
                  <th style={{padding:"8px 10px",textAlign:"center",fontWeight:700}}>UNIDADE</th>
                  <th style={{padding:"8px 10px",textAlign:"center",fontWeight:700}}>VALOR R$</th>
                  <th style={{padding:"8px 10px",textAlign:"left",fontWeight:700}}>OBSERVAÇÃO</th>
                  {!print && <th style={{width:24}}/>}
                </tr>
              </thead>
              <tbody>
                {rows.map((r,i)=>(
                  <tr key={i} style={{borderBottom:"1px solid #eee"}}>
                    <td style={{padding:"7px 10px"}}>{print ? r.desc : <E v={r.desc} onChange={v=>updRow(i,"desc",v)}/>}</td>
                    <td style={{padding:"7px 10px",textAlign:"center"}}>{print ? r.un : <E v={r.un} onChange={v=>updRow(i,"un",v)} align="center"/>}</td>
                    <td style={{padding:"7px 10px",textAlign:"center",fontFamily:"monospace",color:G,fontWeight:700}}>
                      {print ? (r.valor?"R$ "+r.valor:"A confirmar") : <E v={r.valor} onChange={v=>updRow(i,"valor",v)} align="center" placeholder="0,00"/>}
                    </td>
                    <td style={{padding:"7px 10px",fontSize:10,color:"#888"}}>{print ? r.obs : <E v={r.obs} onChange={v=>updRow(i,"obs",v)} size={10} color="#888"/>}</td>
                    {!print && <td><button onClick={()=>setRows(p=>p.filter((_,x)=>x!==i))} style={{background:"none",border:"none",color:"#ccc",cursor:"pointer",fontSize:14}} onMouseOver={e=>e.currentTarget.style.color="#e05c72"} onMouseOut={e=>e.currentTarget.style.color="#ccc"}>×</button></td>}
                  </tr>
                ))}
              </tbody>
            </table>
            {!print && <button onClick={()=>setRows(p=>[...p,{desc:"Serviço",un:"viagem",valor:"",obs:""}])} style={{background:G+"18",color:G,border:"1px dashed "+G+"66",borderRadius:4,padding:"3px 12px",fontSize:10,cursor:"pointer",marginBottom:14}}>+ Adicionar linha</button>}

            <div style={{marginBottom:14,fontSize:11,fontWeight:700,padding:"8px 10px",background:"#fff8e8",border:"1px solid "+G+"44",borderRadius:4}}>
              NOTA: OS PREÇOS ORA OFERTADOS SÃO MERAMENTE ORIENTATIVOS/ESTIMADOS E DEVERÃO SER CONFIRMADOS NA ÉPOCA DA EFETIVA REALIZAÇÃO DE TRANSPORTES.
            </div>

            <div style={{marginBottom:16,fontSize:11}}>
              {print
                ? <pre style={{fontSize:11,fontFamily:"inherit",whiteSpace:"pre-wrap"}}>{clausulas}</pre>
                : <textarea value={clausulas} onChange={e=>setClausulas(e.target.value)} rows={8}
                    style={{width:"100%",border:"1px solid #ddd",borderRadius:4,outline:"none",fontSize:11,color:BK,fontFamily:"inherit",resize:"vertical",padding:"8px 10px",boxSizing:"border-box"}}/>}
            </div>

            <div style={{marginBottom:8,fontWeight:700,fontSize:12}}>- VALIDADE DA PROPOSTA:</div>
            <div style={{marginBottom:20,fontSize:11}}>
              {print ? <span>{hdr.validade}</span> : <E v={hdr.validade} onChange={v=>setH("validade",v)} w={300}/>}
            </div>

            <div style={{borderTop:"1px solid #ddd",paddingTop:14,marginBottom:20}}>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
                <div>
                  <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:6}}>
                    <img src={LOGO} alt="" style={{height:30,objectFit:"contain"}}/>
                    <div>
                      {print
                        ? <><div style={{fontWeight:700,fontSize:12}}>{rodape.nome}</div><div style={{fontWeight:700,fontSize:11,color:G}}>{rodape.cargo}</div></>
                        : [["nome",true],["cargo",false]].map(([k,bold])=>(
                          <input key={k} value={rodape[k]} onChange={e=>setR(k,e.target.value)}
                            style={{border:"none",borderBottom:"1px dashed #ccc",outline:"none",fontSize:bold?12:11,fontWeight:"700",color:k==="cargo"?G:BK,background:"transparent",display:"block",width:200}}/>
                        ))}
                    </div>
                  </div>
                  {["email","cel","site"].map(k=>(
                    <div key={k} style={{fontSize:10,color:"#555",marginBottom:2}}>
                      {k==="email"?"E-mail":k==="cel"?"Cel e whats":"Site"}: {print ? rodape[k] : <E v={rodape[k]} onChange={v=>setR(k,v)} size={10} color="#555"/>}
                    </div>
                  ))}
                </div>
                <div style={{borderLeft:"1px dashed #ccc",paddingLeft:20}}>
                  <div style={{fontSize:11,marginBottom:16}}>DE ACORDO (*): ______________________________________</div>
                  <div style={{fontSize:10,color:"#777"}}>(*) Nome, Cargo de quem assina.</div>
                  <div style={{fontSize:10,color:"#777",marginTop:8}}>DATA: _____ / _____ / 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
