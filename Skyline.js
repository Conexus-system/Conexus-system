/* eslint-disable */
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

// ─── TEMA CONEXUS ──────────────────────────────────────────────────────────────
const T = {
  gold:"#bd914c", goldD:"#9a7338", goldL:"#d4a96a",
  dark:"#16181c", darker:"#0f1013", card:"#1e2028", card2:"#252830",
  border:"#2c2f3a", borderL:"#353849",
  text:"#eceaf4", muted:"#8b8fa8", dim:"#555970",
  green:"#3ecf8e", red:"#e05c72", blue:"#4f9cf9", orange:"#f97316", purple:"#a78bfa",
  cyan:"#22d3ee",
};

// ─── LOGO ──────────────────────────────────────────────────────────────────────
const LOGO_B64 = "data:image/png;base64,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";

// ─── SVG ICONS ─────────────────────────────────────────────────────────────────
const Icon = ({n,s=16,c="currentColor"}) => {
  const p = {
    home:<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>,
    grid:<><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></>,
    briefcase:<><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/></>,
    package:<><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 002 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>,
    dollar:<><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>,
    file:<><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
    users:<><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>,
    chart:<><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    plus:<><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    x:<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    check:<polyline points="20 6 9 17 4 12"/>,
    clock:<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    alert:<><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
    plane:<path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>,
    ship:<><path d="M2 21c.6.5 1.2 1 2.5 1C7 22 7 20 9.5 20s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2"/><path d="M19.38 20A11.6 11.6 0 0021 14l-9-4-9 4c0 2.4.75 4.7 2 6.5"/><path d="M19 13V7H5v6"/></>,
    truck:<><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
    trending:<><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></>,
    bell:<><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></>,
    attach:<path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"/>,
    tag:<><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></>,
    search:<><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    edit:<><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
    eye:<><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    download:<><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    send:<><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></>,
    calendar:<><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    list:<><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>,
    globe:<><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></>,
    settings:<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></>,
    profit:<><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></>,
    numeric:<><path d="M4 9h2l2-4v14"/><path d="M14 9c0-1.1.9-2 2-2h1a2 2 0 012 2v1a2 2 0 01-2 2h-1a2 2 0 00-2 2v1a2 2 0 002 2h3"/></>,
  };
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{p[n]}</svg>;
};

// ─── BASE COMPONENTS ────────────────────────────────────────────────────────────
const Card = ({children,style={}}) => <div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:10,padding:18,...style}}>{children}</div>;

const Badge = ({children,color=T.gold,sm}) => <span style={{background:color+"22",color,border:`1px solid ${color}44`,borderRadius:4,padding:sm?"1px 7px":"2px 9px",fontSize:sm?10:11,fontWeight:700,letterSpacing:"0.04em",textTransform:"uppercase",whiteSpace:"nowrap"}}>{children}</span>;

const Btn = ({children,onClick,v="primary",sm,icon,full}) => {
  const s={primary:{bg:T.gold,c:T.darker,b:"none"},outline:{bg:"transparent",c:T.gold,b:`1px solid ${T.gold}55`},ghost:{bg:"transparent",c:T.muted,b:"none"},green:{bg:T.green+"22",c:T.green,b:`1px solid ${T.green}44`},red:{bg:T.red+"22",c:T.red,b:`1px solid ${T.red}44`}}[v]||{bg:T.gold,c:T.darker,b:"none"};
  return <button onClick={onClick} style={{background:s.bg,color:s.c,border:s.b,borderRadius:6,padding:sm?"4px 10px":"7px 14px",fontSize:sm?11:12,fontWeight:600,cursor:"pointer",display:"inline-flex",alignItems:"center",gap:5,fontFamily:"inherit",width:full?"100%":undefined,justifyContent:full?"center":undefined}} onMouseOver={e=>e.currentTarget.style.opacity=".75"} onMouseOut={e=>e.currentTarget.style.opacity="1"}>{icon&&<Icon n={icon} s={sm?12:13}/>}{children}</button>;
};

const Inp = ({label,value,onChange,placeholder,type="text",sm}) => <div>{label&&<div style={{fontSize:10,color:T.muted,marginBottom:4,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"}}>{label}</div>}<input type={type} placeholder={placeholder} value={value} onChange={onChange} style={{background:"#13151a",border:`1px solid ${T.border}`,borderRadius:6,color:T.text,padding:sm?"5px 8px":"7px 10px",fontSize:sm?11:12,outline:"none",fontFamily:"inherit",width:"100%",boxSizing:"border-box"}}/></div>;

const Sel = ({label,value,onChange,options}) => <div>{label&&<div style={{fontSize:10,color:T.muted,marginBottom:4,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"}}>{label}</div>}<select value={value} onChange={onChange} style={{background:"#13151a",border:`1px solid ${T.border}`,borderRadius:6,color:T.text,padding:"7px 10px",fontSize:12,outline:"none",fontFamily:"inherit",width:"100%",cursor:"pointer"}}>{options.map(o=><option key={o.v||o} value={o.v||o}>{o.l||o}</option>)}</select></div>;

const Modal = ({title,children,onClose,wide}) => <div style={{position:"fixed",inset:0,background:"#000000dd",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1000,padding:16}} onClick={e=>e.target===e.currentTarget&&onClose()}><div style={{background:T.card,border:`1px solid ${T.border}`,borderRadius:12,width:"100%",maxWidth:wide?900:640,maxHeight:"90vh",overflow:"auto"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px 20px",borderBottom:`1px solid ${T.border}`,position:"sticky",top:0,background:T.card,zIndex:1}}><span style={{fontWeight:700,fontSize:15}}>{title}</span><button onClick={onClose} style={{background:"none",border:"none",color:T.muted,cursor:"pointer"}}><Icon n="x" s={18}/></button></div><div style={{padding:20}}>{children}</div></div></div>;

const Stat = ({label,value,icon,color=T.gold,sub,trend,onClick}) => <Card style={{cursor:onClick?"pointer":"default"}} onClick={onClick}><div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}><div><div style={{color:T.muted,fontSize:10,marginBottom:5,letterSpacing:"0.06em",textTransform:"uppercase"}}>{label}</div><div style={{color,fontSize:22,fontWeight:700}}>{value}</div>{sub&&<div style={{color:T.dim,fontSize:11,marginTop:3}}>{sub}</div>}{trend&&<div style={{color:T.green,fontSize:11,marginTop:3,display:"flex",alignItems:"center",gap:3}}><Icon n="trending" s={11} c={T.green}/>{trend}</div>}</div><div style={{background:color+"18",borderRadius:8,padding:9}}><Icon n={icon} s={17} c={color}/></div></div></Card>;

const TabBar = ({tabs,active,onChange,sm}) => <div style={{display:"flex",gap:5,marginBottom:16,flexWrap:"wrap"}}>{tabs.map(t=><button key={t.id} onClick={()=>onChange(t.id)} style={{background:active===t.id?T.gold+"22":"transparent",color:active===t.id?T.gold:T.muted,border:active===t.id?`1px solid ${T.gold}44`:"1px solid transparent",borderRadius:6,padding:sm?"5px 12px":"6px 14px",fontSize:sm?11:12,fontWeight:600,cursor:"pointer",display:"flex",alignItems:"center",gap:5,fontFamily:"inherit"}}><Icon n={t.icon} s={13}/>{t.label}</button>)}</div>;

const sc = s => ({"Ativo":T.green,"Recebido":T.green,"Pago":T.green,"Entregue":T.green,"Aprovada":T.green,"Canal Verde":T.green,"Desembaraçada":T.green,"Concluído":T.green,"Prospect":T.blue,"Aguardando":T.blue,"Em análise":T.gold,"A receber":T.gold,"Em trânsito":T.gold,"Em aberto":T.gold,"Desembaraço":T.orange,"Recusada":T.red,"Vencido":T.red,"Cancelado":T.red,"Assinado":T.green,"Rascunho":T.muted}[s]||T.muted);

// ─── DADOS MOCK ─────────────────────────────────────────────────────────────────
const PROCESSOS = [
  {id:"CP250884",cliente:"Fundação Coppetec",modal:"Aéreo",origem:"Miami, EUA",destino:"Galeão-RJ",status:"Entregue",dtAbertura:"08/05/2026",dtEntrega:"20/05/2026",hawb:"HAWBG45821",resp:"Graziela",profit:4240.59},
  {id:"CP250885",cliente:"TechImport Ltda",modal:"Marítimo FCL",origem:"Xangai, CN",destino:"Santos-SP",status:"Em trânsito",dtAbertura:"15/05/2026",dtEntrega:"18/06/2026",hawb:"MSCUX1234567",resp:"Graziela",profit:null},
  {id:"CP250886",cliente:"Global Trade S.A.",modal:"Aéreo",origem:"Frankfurt, DE",destino:"GRU-SP",status:"Desembaraço",dtAbertura:"01/06/2026",dtEntrega:"05/06/2026",hawb:"020-12345678",resp:"Graziela",profit:null},
  {id:"CP250887",cliente:"Eletrônicos do Sul",modal:"Marítimo LCL",origem:"Roterdã, NL",destino:"Santos-SP",status:"Aguardando",dtAbertura:"03/06/2026",dtEntrega:"01/07/2026",hawb:"MRKU0891234",resp:"Graziela",profit:null},
  {id:"CP250888",cliente:"MedEquip Brasil",modal:"Aéreo",origem:"Boston, EUA",destino:"Confins-MG",status:"Em trânsito",dtAbertura:"05/06/2026",dtEntrega:"10/06/2026",hawb:"AA-9876543",resp:"Graziela",profit:null},
];

const OFERTAS = [
  {id:"OF-2026-021",cliente:"Fundação Coppetec",modal:"Aéreo",rota:"MIA → GIG",valor:"USD 1.181",validade:"14 dias",status:"Aprovada",data:"28/04/2026",profit:"USD 156"},
  {id:"OF-2026-020",cliente:"Global Trade S.A.",modal:"Marítimo FCL",rota:"SHA → SSZ",valor:"USD 2.450",validade:"7 dias",status:"Em análise",data:"02/06/2026",profit:"USD 320"},
  {id:"OF-2026-019",cliente:"TechImport Ltda",modal:"Aéreo",rota:"FRA → GRU",valor:"USD 980",validade:"10 dias",status:"Aguardando",data:"01/06/2026",profit:"USD 120"},
  {id:"OF-2026-018",cliente:"MedEquip Brasil",modal:"Marítimo LCL",rota:"RTM → SSZ",valor:"USD 1.650",validade:"7 dias",status:"Recusada",data:"28/05/2026",profit:"USD 210"},
];

const TARIFARIO = [
  {id:"TAR-001",agente:"Global Cargo Corp",modal:"Aéreo",origem:"MIA",destino:"GIG",taxa:"Frete kg",moeda:"USD",valor:"1,85",vigencia:"01/06/2026",vencimento:"31/08/2026",status:"Ativo"},
  {id:"TAR-002",agente:"MSC Brasil",modal:"Marítimo FCL",origem:"SHA",destino:"SSZ",taxa:"Frete 20'",moeda:"USD",valor:"1.200",vigencia:"01/05/2026",vencimento:"30/07/2026",status:"Ativo"},
  {id:"TAR-003",agente:"Frankfurt Air Cargo",modal:"Aéreo",origem:"FRA",destino:"GRU",taxa:"Frete kg",moeda:"EUR",valor:"2,10",vigencia:"15/05/2026",vencimento:"14/08/2026",status:"Ativo"},
  {id:"TAR-004",agente:"Rotterdam Consolidation",modal:"Marítimo LCL",origem:"RTM",destino:"SSZ",taxa:"Frete CBM",moeda:"USD",valor:"45",vigencia:"01/06/2026",vencimento:"31/08/2026",status:"Ativo"},
];

const FATURAS_FIN = [
  {id:"FAT-1117/26",processo:"CP250884",cliente:"Fundação Coppetec",tipo:"Frete Internacional",valor:10201.22,status:"Recebido",venc:"10/05/2026"},
  {id:"FAT-1118/26",processo:"CP250884",cliente:"Fundação Coppetec",tipo:"Frete Entrega",valor:2142.51,status:"Recebido",venc:"20/05/2026"},
  {id:"FAT-BOL-884",processo:"CP250884",cliente:"Fundação Coppetec",tipo:"Numerário",valor:18153.67,status:"A receber",venc:"12/06/2026"},
  {id:"FAT-1119/26",processo:"CP250885",cliente:"TechImport Ltda",tipo:"Frete Internacional",valor:12500.00,status:"A receber",venc:"20/06/2026"},
  {id:"FAT-1120/26",processo:"CP250886",cliente:"Global Trade S.A.",tipo:"Frete Internacional",valor:8200.00,status:"Em aberto",venc:"08/06/2026"},
];

const AGENDA_CRM = [
  {id:1,tipo:"Inside Sales",cliente:"Alimentos Tropicais",contato:"Roberto Lima",data:"09/06/2026",hora:"14:00",assunto:"Apresentação LCL Europa",status:"Agendado",resp:"Graziela"},
  {id:2,tipo:"Follow-up",cliente:"TechImport Ltda",contato:"Carlos Mendes",data:"10/06/2026",hora:"10:00",assunto:"Feedback proposta FCL",status:"Agendado",resp:"Graziela"},
  {id:3,tipo:"Pricing",cliente:"Global Trade S.A.",contato:"Ana Paula Costa",data:"11/06/2026",hora:"15:30",assunto:"Renovação tarifário aéreo",status:"Agendado",resp:"Graziela"},
  {id:4,tipo:"Inside Sales",cliente:"MedEquip Brasil",contato:"Dr. Fernando Souza",data:"08/06/2026",hora:"09:00",assunto:"Prospecção rota Boston",status:"Concluído",resp:"Graziela"},
];

const NUMERARIO_CP250884 = [
  {desc:"Frete Internacional",data:"10/05/2026",moeda:"USD",taxa:5.0462,brl:2421.42},
  {desc:"Fuel Surcharge",data:"10/05/2026",moeda:"USD",taxa:5.0462,brl:749.49},
  {desc:"Airport Transfer",data:"10/05/2026",moeda:"USD",taxa:5.0462,brl:277.54},
  {desc:"Handling at origin",data:"10/05/2026",moeda:"USD",taxa:5.0462,brl:605.54},
  {desc:"Sed Fee",data:"10/05/2026",moeda:"USD",taxa:5.0462,brl:277.54},
  {desc:"In/Out Fee",data:"10/05/2026",moeda:"USD",taxa:5.0462,brl:227.08},
  {desc:"Coleta",data:"10/05/2026",moeda:"USD",taxa:5.0462,brl:2296.02},
  {desc:"Fumigação",data:"10/05/2026",moeda:"USD",taxa:5.0462,brl:681.24},
  {desc:"Desconsolidação",data:"10/05/2026",moeda:"USD",taxa:5.0462,brl:504.62},
  {desc:"Seguro Internacional",data:"08/05/2026",moeda:"BRL",taxa:null,brl:863.56},
  {desc:"Taxa Siscomex",data:"14/05/2026",moeda:"BRL",taxa:null,brl:223.64},
  {desc:"Armazenagem DAI",data:"19/05/2026",moeda:"BRL",taxa:null,brl:4586.20},
  {desc:"Frete Entrega",data:"20/05/2026",moeda:"BRL",taxa:null,brl:2142.51},
  {desc:"SDA",data:"14/05/2026",moeda:"BRL",taxa:null,brl:440.00},
  {desc:"Honorários Despachante",data:"14/05/2026",moeda:"BRL",taxa:null,brl:560.00},
];

const DOCS_CP250884 = [
  {nome:"HAWB Final Original",tipo:"HAWB",ref:"HAWBG45821",data:"07/05/2026",status:"Recebido"},
  {nome:"DUIMP + Chave Acesso",tipo:"DUIMP",ref:"26BR00006181709",data:"14/05/2026",status:"Desembaraçada"},
  {nome:"Averbação Seguro",tipo:"Seguro",ref:"Averbação 2026000038",data:"08/05/2026",status:"Emitida"},
  {nome:"Extrato Armazenagem DAI",tipo:"DAI",ref:"237998110101",data:"14/05/2026",status:"Pago"},
  {nome:"Comprovante Pagamento DAI",tipo:"Comprovante",ref:"DAI 11699 25",data:"19/05/2026",status:"Pago"},
  {nome:"GLME",tipo:"GLME",ref:"26BR00006181709",data:"14/05/2026",status:"Emitida"},
  {nome:"Extrato SISCOMEX",tipo:"Siscomex",ref:"Taxa R$ 223,64",data:"14/05/2026",status:"Pago"},
  {nome:"SDA Sindicato Despachantes",tipo:"SDA",ref:"IMP.11699-25",data:"14/05/2026",status:"Pago"},
  {nome:"Comprovante Entrega Carga",tipo:"Entrega",ref:"DANFE NF 9686",data:"20/05/2026",status:"Entregue"},
  {nome:"NF Agenciamento",tipo:"NFS-e",ref:"NFS-e 573",data:"03/06/2026",status:"Emitida"},
  {nome:"Fatura Frete Internacional Nº 1117/26",tipo:"Fatura",ref:"R$ 10.201,22",data:"10/05/2026",status:"Recebido"},
  {nome:"Recibo Frete Internacional",tipo:"Recibo",ref:"R$ 10.201,22",data:"10/05/2026",status:"Assinado"},
  {nome:"Demonstrativo de Valores",tipo:"Demonstrativo",ref:"R$ 18.153,57",data:"03/06/2026",status:"Emitida"},
];

const TIMELINE_CP250884 = [
  {evento:"Abertura do Processo",data:"08/05/2026",detalhe:"Processo CP250884 criado — Allum Corp / Coppetec",done:true},
  {evento:"Embarque Realizado",data:"08/05/2026",detalhe:"HAWBG45821 — TAP Air Portugal — Miami → Galeão",done:true},
  {evento:"Chegada no Brasil",data:"10/05/2026",detalhe:"Aeroporto Internacional Galeão — 208,70 kg — 1 volume",done:true},
  {evento:"DUIMP Registrada",data:"14/05/2026",detalhe:"26BR00006181709 — Tributos pagos automaticamente",done:true},
  {evento:"Desembaraço Aduaneiro",data:"15/05/2026",detalhe:"RFB: Canal Verde — Desembaraço autorizado",done:true},
  {evento:"Pagamento DAI / Armazenagem",data:"19/05/2026",detalhe:"R$ 4.586,20 — Aeroporto Galeão (Período 003)",done:true},
  {evento:"Entrega ao Cliente",data:"20/05/2026",detalhe:"DANFE NF 9686 — LabTare UFRJ — Assinado e carimbado",done:true},
  {evento:"Faturamento Emitido",data:"03/06/2026",detalhe:"NFS-e 573 + Demonstrativo + Boleto R$ 18.153,67",done:true},
];

// ─── MÓDULO DASHBOARD ──────────────────────────────────────────────────────────
const Dashboard = ({onNav}) => {
  const totalReceber = FATURAS_FIN.filter(f=>f.status==="A receber"||f.status==="Em aberto").reduce((a,b)=>a+b.valor,0);
  const totalRecebido = FATURAS_FIN.filter(f=>f.status==="Recebido").reduce((a,b)=>a+b.valor,0);
  const processoAtivos = PROCESSOS.filter(p=>p.status!=="Entregue"&&p.status!=="Cancelado").length;
  return (
    <div>
      <div style={{marginBottom:20}}>
        <h2 style={{fontSize:20,fontWeight:800,margin:0,color:T.text}}>Dashboard</h2>
        <p style={{color:T.muted,fontSize:12,margin:"4px 0 0"}}>Junho 2026 — Conexus Partners Logística Internacional</p>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:20}}>
        <Stat label="Processos Ativos" value={processoAtivos} icon="package" trend="+2 esta semana" onClick={()=>onNav("operacional")}/>
        <Stat label="Recebido (mês)" value="R$ 52k" icon="dollar" color={T.green} trend="+12% vs mai" onClick={()=>onNav("financeiro")}/>
        <Stat label="A Receber" value={`R$ ${(totalReceber/1000).toFixed(1)}k`} icon="clock" color={T.orange} sub="3 faturas" onClick={()=>onNav("financeiro")}/>
        <Stat label="Ofertas Abertas" value={OFERTAS.filter(o=>o.status==="Em análise"||o.status==="Aguardando").length} icon="file" color={T.blue} sub="2 vencem hoje" onClick={()=>onNav("comercial")}/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14}}>
        {/* Processos em aberto */}
        <Card>
          <div style={{fontWeight:700,fontSize:13,marginBottom:12,display:"flex",alignItems:"center",gap:8}}><Icon n="package" s={14} c={T.gold}/>Processos em Andamento</div>
          {PROCESSOS.filter(p=>p.status!=="Entregue").map((p,i)=>(
            <div key={i} style={{padding:"8px 0",borderBottom:i<PROCESSOS.filter(x=>x.status!=="Entregue").length-1?`1px solid ${T.border}22`:"none"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                <div><span style={{color:T.gold,fontFamily:"monospace",fontSize:12,fontWeight:700}}>{p.id}</span><span style={{color:T.muted,fontSize:11,marginLeft:8}}>{p.cliente}</span></div>
                <Badge color={sc(p.status)} sm>{p.status}</Badge>
              </div>
              <div style={{fontSize:11,color:T.dim}}><Icon n={p.modal==="Aéreo"?"plane":"ship"} s={10} c={T.dim}/> {p.origem} → {p.destino} — {p.modal}</div>
            </div>
          ))}
        </Card>
        {/* Agenda CRM hoje */}
        <Card>
          <div style={{fontWeight:700,fontSize:13,marginBottom:12,display:"flex",alignItems:"center",gap:8}}><Icon n="calendar" s={14} c={T.blue}/>Agenda do Dia — 08/06/2026</div>
          {AGENDA_CRM.filter(a=>a.status==="Agendado").map((a,i)=>(
            <div key={i} style={{padding:"8px 0",borderBottom:i<2?`1px solid ${T.border}22`:"none",display:"flex",gap:10,alignItems:"flex-start"}}>
              <div style={{background:T.blue+"22",borderRadius:6,padding:"4px 8px",fontSize:11,color:T.blue,fontWeight:700,whiteSpace:"nowrap"}}>{a.hora}</div>
              <div>
                <div style={{fontSize:12,fontWeight:600,color:T.text}}>{a.assunto}</div>
                <div style={{fontSize:11,color:T.muted,marginTop:1}}>{a.cliente} — {a.tipo}</div>
              </div>
            </div>
          ))}
          {!AGENDA_CRM.filter(a=>a.status==="Agendado").length&&<div style={{color:T.dim,fontSize:12}}>Nenhum evento hoje</div>}
        </Card>
      </div>
      {/* KPIs Profit */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:14}}>
        <Card>
          <div style={{fontSize:10,color:T.muted,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>Profit Realizado (mês)</div>
          <div style={{fontSize:24,fontWeight:800,color:T.green}}>R$ 4.240,59</div>
          <div style={{fontSize:11,color:T.dim,marginTop:3}}>CP250884 concluído</div>
        </Card>
        <Card>
          <div style={{fontSize:10,color:T.muted,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>Profit Previsto</div>
          <div style={{fontSize:24,fontWeight:800,color:T.gold}}>USD 766</div>
          <div style={{fontSize:11,color:T.dim,marginTop:3}}>3 processos em aberto</div>
        </Card>
        <Card>
          <div style={{fontSize:10,color:T.muted,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:6}}>Inadimplência</div>
          <div style={{fontSize:24,fontWeight:800,color:T.orange}}>R$ 7.800</div>
          <div style={{fontSize:11,color:T.red,marginTop:3,display:"flex",alignItems:"center",gap:4}}><Icon n="alert" s={11} c={T.red}/>1 fatura vencida</div>
        </Card>
      </div>
      {/* Atividades recentes */}
      <Card>
        <div style={{fontWeight:700,fontSize:13,marginBottom:12}}>Atividades Recentes</div>
        {[
          {icon:"tag",color:T.green,text:"NFS-e nº 573 emitida — R$ 4.240,59 — CP250884",time:"03/06/2026"},
          {icon:"dollar",color:T.gold,text:"Boleto R$ 18.153,67 emitido — venc. 12/06/2026 — Coppetec",time:"03/06/2026"},
          {icon:"truck",color:T.green,text:"Carga entregue — DANFE NF 9686 — LabTare UFRJ",time:"20/05/2026"},
          {icon:"check",color:T.green,text:"Desembaraço Canal Verde — DUIMP 26BR00006181709",time:"15/05/2026"},
          {icon:"plane",color:T.blue,text:"Chegada GIG — HAWBG45821 — 208,70 kg",time:"10/05/2026"},
        ].map((a,i)=>(
          <div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:i<4?`1px solid ${T.border}22`:"none"}}>
            <div style={{width:26,height:26,borderRadius:"50%",background:a.color+"22",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}><Icon n={a.icon} s={11} c={a.color}/></div>
            <span style={{flex:1,fontSize:12,color:T.muted}}>{a.text}</span>
            <span style={{fontSize:10,color:T.dim,whiteSpace:"nowrap"}}>{a.time}</span>
          </div>
        ))}
      </Card>
    </div>
  );
};

// ─── MÓDULO COMERCIAL ──────────────────────────────────────────────────────────
const Comercial = ({onProposta}) => {
  const [tab,setTab] = useState("ofertas");
  const tabs = [
    {id:"ofertas",label:"Ofertas",icon:"file"},
    {id:"tarifario",label:"Tarifário",icon:"list"},
    {id:"crm",label:"CRM / Agenda",icon:"calendar"},
  ];
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20}}>
        <div><h2 style={{fontSize:20,fontWeight:800,margin:0}}>Comercial</h2><p style={{color:T.muted,fontSize:12,margin:"4px 0 0"}}>Ofertas, tarifário e CRM</p></div>
        <div style={{display:"flex",gap:8}}>
          <Btn icon="plus" onClick={onProposta}>Nova Oferta / Proposta</Btn>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:20}}>
        <Stat label="Ofertas Abertas" value="2" icon="file" color={T.blue}/>
        <Stat label="Taxa Conversão" value="64%" icon="trending" color={T.green} trend="+8% vs mês ant."/>
        <Stat label="Tarifários Ativos" value={TARIFARIO.filter(t=>t.status==="Ativo").length} icon="list" color={T.gold}/>
        <Stat label="Agenda Hoje" value={AGENDA_CRM.filter(a=>a.status==="Agendado").length} icon="calendar" color={T.orange}/>
      </div>
      <TabBar tabs={tabs} active={tab} onChange={setTab}/>
      {tab==="ofertas"&&(
        <Card>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}>
            <span style={{fontWeight:600,fontSize:13}}>Ofertas Comerciais</span>
            <Btn sm icon="plus" onClick={onProposta}>Nova Oferta</Btn>
          </div>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
            <thead><tr style={{borderBottom:`1px solid ${T.border}`}}>{["Nº Oferta","Cliente","Modal","Rota","Valor","Profit","Data","Status",""].map(h=><th key={h} style={{textAlign:"left",padding:"7px 9px",color:T.dim,fontWeight:600,fontSize:10,textTransform:"uppercase"}}>{h}</th>)}</tr></thead>
            <tbody>{OFERTAS.map((o,i)=>(
              <tr key={i} style={{borderBottom:`1px solid ${T.border}22`}} onMouseOver={e=>e.currentTarget.style.background="#ffffff06"} onMouseOut={e=>e.currentTarget.style.background="transparent"}>
                <td style={{padding:"10px 9px",color:T.gold,fontFamily:"monospace",fontWeight:700}}>{o.id}</td>
                <td style={{padding:"10px 9px",color:T.text,fontWeight:500}}>{o.cliente}</td>
                <td style={{padding:"10px 9px",color:T.muted}}>{o.modal}</td>
                <td style={{padding:"10px 9px",color:T.muted,fontSize:11}}>{o.rota}</td>
                <td style={{padding:"10px 9px",color:T.text,fontWeight:600}}>{o.valor}</td>
                <td style={{padding:"10px 9px",color:T.green,fontWeight:600}}>{o.profit}</td>
                <td style={{padding:"10px 9px",color:T.dim,fontSize:11}}>{o.data}</td>
                <td style={{padding:"10px 9px"}}><Badge color={sc(o.status)} sm>{o.status}</Badge></td>
                <td style={{padding:"10px 9px"}}><Btn sm v="ghost" icon="eye">Ver</Btn></td>
              </tr>
            ))}</tbody>
          </table>
        </Card>
      )}
      {tab==="tarifario"&&(
        <Card>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}>
            <span style={{fontWeight:600,fontSize:13}}>Tarifário de Agentes</span>
            <div style={{display:"flex",gap:6}}><Btn sm v="outline" icon="download">Importar Excel</Btn><Btn sm icon="plus">Nova Negociação</Btn></div>
          </div>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
            <thead><tr style={{borderBottom:`1px solid ${T.border}`}}>{["Cód.","Agente","Modal","Origem","Destino","Taxa","Moeda","Valor","Vigência","Vencimento","Status"].map(h=><th key={h} style={{textAlign:"left",padding:"7px 9px",color:T.dim,fontWeight:600,fontSize:10,textTransform:"uppercase"}}>{h}</th>)}</tr></thead>
            <tbody>{TARIFARIO.map((t,i)=>(
              <tr key={i} style={{borderBottom:`1px solid ${T.border}22`}} onMouseOver={e=>e.currentTarget.style.background="#ffffff06"} onMouseOut={e=>e.currentTarget.style.background="transparent"}>
                <td style={{padding:"9px 9px",color:T.gold,fontFamily:"monospace",fontSize:11}}>{t.id}</td>
                <td style={{padding:"9px 9px",color:T.text,fontWeight:500}}>{t.agente}</td>
                <td style={{padding:"9px 9px",color:T.muted}}>{t.modal}</td>
                <td style={{padding:"9px 9px",color:T.muted,fontFamily:"monospace"}}>{t.origem}</td>
                <td style={{padding:"9px 9px",color:T.muted,fontFamily:"monospace"}}>{t.destino}</td>
                <td style={{padding:"9px 9px",color:T.text}}>{t.taxa}</td>
                <td style={{padding:"9px 9px",color:T.muted}}>{t.moeda}</td>
                <td style={{padding:"9px 9px",color:T.gold,fontFamily:"monospace",fontWeight:700}}>{t.valor}</td>
                <td style={{padding:"9px 9px",color:T.dim,fontSize:11}}>{t.vigencia}</td>
                <td style={{padding:"9px 9px",color:T.dim,fontSize:11}}>{t.vencimento}</td>
                <td style={{padding:"9px 9px"}}><Badge color={sc(t.status)} sm>{t.status}</Badge></td>
              </tr>
            ))}</tbody>
          </table>
        </Card>
      )}
      {tab==="crm"&&(
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          <Card>
            <div style={{fontWeight:700,fontSize:13,marginBottom:12,display:"flex",alignItems:"center",gap:8}}><Icon n="calendar" s={14} c={T.blue}/>Agenda — Próximos Compromissos</div>
            {AGENDA_CRM.map((a,i)=>(
              <div key={i} style={{padding:"10px 0",borderBottom:i<AGENDA_CRM.length-1?`1px solid ${T.border}22`:"none",display:"flex",gap:10}}>
                <div style={{background:sc(a.status)+"22",borderRadius:6,padding:"4px 8px",fontSize:11,color:sc(a.status),fontWeight:700,whiteSpace:"nowrap",height:"fit-content"}}>{a.hora}</div>
                <div style={{flex:1}}>
                  <div style={{fontWeight:600,color:T.text,fontSize:12}}>{a.assunto}</div>
                  <div style={{fontSize:11,color:T.muted,marginTop:2}}>{a.cliente} — {a.contato}</div>
                  <div style={{fontSize:10,color:T.dim,marginTop:2}}>{a.data} — {a.tipo} — {a.resp}</div>
                </div>
                <Badge color={sc(a.status)} sm>{a.status}</Badge>
              </div>
            ))}
          </Card>
          <Card>
            <div style={{fontWeight:700,fontSize:13,marginBottom:12}}>Histórico de Contatos</div>
            {[
              {cliente:"Fundação Coppetec",tipo:"E-mail",assunto:"Envio proposta OF-2026-021",data:"28/04/2026",resp:"Graziela"},
              {cliente:"Global Trade S.A.",tipo:"Ligação",assunto:"Follow-up tarifário FCL",data:"02/06/2026",resp:"Graziela"},
              {cliente:"TechImport Ltda",tipo:"Reunião",assunto:"Apresentação novos serviços",data:"30/05/2026",resp:"Graziela"},
              {cliente:"Alimentos Tropicais",tipo:"E-mail",assunto:"Envio cotação LCL Rotterdam",data:"25/05/2026",resp:"Graziela"},
            ].map((h,i)=>(
              <div key={i} style={{padding:"8px 0",borderBottom:i<3?`1px solid ${T.border}22`:"none"}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                  <span style={{fontSize:12,fontWeight:600,color:T.text}}>{h.cliente}</span>
                  <span style={{fontSize:10,color:T.dim}}>{h.data}</span>
                </div>
                <div style={{fontSize:11,color:T.muted}}>{h.tipo}: {h.assunto}</div>
              </div>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
};

// ─── MÓDULO OPERACIONAL ────────────────────────────────────────────────────────
const Operacional = () => {
  const [tab,setTab] = useState("processos");
  const [selProc,setSelProc] = useState(null);
  const tabs = [
    {id:"processos",label:"Processos",icon:"package"},
    {id:"timeline",label:"Timeline",icon:"clock"},
    {id:"documentos",label:"Documentos",icon:"file"},
    {id:"numerario",label:"Numerário",icon:"numeric"},
  ];
  const totalNum = NUMERARIO_CP250884.reduce((a,b)=>a+b.brl,0);
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20}}>
        <div><h2 style={{fontSize:20,fontWeight:800,margin:0}}>Operacional</h2><p style={{color:T.muted,fontSize:12,margin:"4px 0 0"}}>Processos, timeline, documentos e numerário</p></div>
        <Btn icon="plus">Abrir Processo</Btn>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:20}}>
        <Stat label="Processos Ativos" value={PROCESSOS.filter(p=>p.status!=="Entregue").length} icon="package"/>
        <Stat label="Em Trânsito" value={PROCESSOS.filter(p=>p.status==="Em trânsito").length} icon="plane" color={T.blue}/>
        <Stat label="Em Desembaraço" value={PROCESSOS.filter(p=>p.status==="Desembaraço").length} icon="alert" color={T.orange}/>
        <Stat label="Entregues (mês)" value={PROCESSOS.filter(p=>p.status==="Entregue").length} icon="check" color={T.green}/>
      </div>
      <TabBar tabs={tabs} active={tab} onChange={setTab}/>
      {tab==="processos"&&(
        <Card>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}>
            <div style={{width:260}}><Inp placeholder="Buscar processo, cliente, HAWB..." value="" onChange={()=>{}}/></div>
            <Btn sm icon="plus">Novo Processo</Btn>
          </div>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
            <thead><tr style={{borderBottom:`1px solid ${T.border}`}}>{["Processo","Cliente","Modal","Rota","HAWB/BL","Abertura","Entrega Prev.","Responsável","Status",""].map(h=><th key={h} style={{textAlign:"left",padding:"7px 9px",color:T.dim,fontWeight:600,fontSize:10,textTransform:"uppercase"}}>{h}</th>)}</tr></thead>
            <tbody>{PROCESSOS.map((p,i)=>(
              <tr key={i} style={{borderBottom:`1px solid ${T.border}22`}} onMouseOver={e=>e.currentTarget.style.background="#ffffff06"} onMouseOut={e=>e.currentTarget.style.background="transparent"}>
                <td style={{padding:"10px 9px",color:T.gold,fontFamily:"monospace",fontWeight:700}}>{p.id}</td>
                <td style={{padding:"10px 9px",color:T.text,fontWeight:500}}>{p.cliente}</td>
                <td style={{padding:"10px 9px"}}><div style={{display:"flex",alignItems:"center",gap:5,color:T.muted}}><Icon n={p.modal==="Aéreo"?"plane":"ship"} s={12} c={T.gold}/>{p.modal}</div></td>
                <td style={{padding:"10px 9px"}}><div style={{fontSize:11,color:T.text}}>{p.origem}</div><div style={{fontSize:10,color:T.dim}}>→ {p.destino}</div></td>
                <td style={{padding:"10px 9px",color:T.muted,fontFamily:"monospace",fontSize:11}}>{p.hawb}</td>
                <td style={{padding:"10px 9px",color:T.dim,fontSize:11}}>{p.dtAbertura}</td>
                <td style={{padding:"10px 9px",color:T.text,fontSize:11}}>{p.dtEntrega}</td>
                <td style={{padding:"10px 9px",color:T.muted,fontSize:11}}>{p.resp}</td>
                <td style={{padding:"10px 9px"}}><Badge color={sc(p.status)} sm>{p.status}</Badge></td>
                <td style={{padding:"10px 9px"}}><Btn sm v="ghost" icon="eye" onClick={()=>setSelProc(p)}>Ver</Btn></td>
              </tr>
            ))}</tbody>
          </table>
        </Card>
      )}
      {tab==="timeline"&&(
        <Card>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16,paddingBottom:12,borderBottom:`1px solid ${T.border}`}}>
            <span style={{fontSize:13,fontWeight:600}}>Processo:</span>
            <span style={{color:T.gold,fontFamily:"monospace",fontWeight:700}}>CP250884</span>
            <span style={{color:T.muted,fontSize:12}}>— Fundação Coppetec</span>
            <Badge color={T.green}>Entregue</Badge>
          </div>
          {TIMELINE_CP250884.map((s,i)=>(
            <div key={i} style={{display:"flex",gap:14}}>
              <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:32}}>
                <div style={{width:32,height:32,borderRadius:"50%",background:T.gold,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,boxShadow:`0 0 12px ${T.gold}66`,zIndex:1}}><Icon n="check" s={13} c={T.darker}/></div>
                {i<TIMELINE_CP250884.length-1&&<div style={{width:2,flex:1,minHeight:28,background:T.gold+"55",margin:"2px 0"}}/>}
              </div>
              <div style={{flex:1,paddingBottom:20}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                  <div>
                    <div style={{fontWeight:700,color:T.text,fontSize:13}}>{s.evento}</div>
                    <div style={{color:T.muted,fontSize:11,marginTop:2}}>{s.detalhe}</div>
                  </div>
                  <span style={{fontSize:11,color:T.gold,fontFamily:"monospace",whiteSpace:"nowrap",marginLeft:16}}>{s.data}</span>
                </div>
              </div>
            </div>
          ))}
        </Card>
      )}
      {tab==="documentos"&&(
        <Card>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:14}}>
            <div><div style={{fontSize:13,fontWeight:600}}>Documentos — CP250884</div><div style={{color:T.muted,fontSize:11,marginTop:2}}>Fundação Coppetec — HAWBG45821</div></div>
            <div style={{display:"flex",gap:6}}><Btn sm v="outline" icon="send">Enviar Pacote PDF</Btn><Btn sm icon="attach">Anexar</Btn></div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
            {DOCS_CP250884.map((d,i)=>(
              <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 12px",background:T.card2,border:`1px solid ${T.border}`,borderRadius:8}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{background:T.gold+"22",borderRadius:5,padding:6}}><Icon n="file" s={12} c={T.gold}/></div>
                  <div>
                    <div style={{fontWeight:600,color:T.text,fontSize:12}}>{d.nome}</div>
                    <div style={{fontSize:10,color:T.dim,marginTop:1}}>{d.ref} — {d.data}</div>
                  </div>
                </div>
                <div style={{display:"flex",alignItems:"center",gap:6}}>
                  <Badge color={sc(d.status)} sm>{d.tipo}</Badge>
                  <Btn sm v="ghost" icon="download"/>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
      {tab==="numerario"&&(
        <Card>
          <div style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
            <div><div style={{fontSize:13,fontWeight:600}}>Numerário — CP250884</div><div style={{color:T.muted,fontSize:11,marginTop:2}}>Fundação Coppetec — Despesas do processo</div></div>
            <div style={{display:"flex",gap:6}}><Btn sm v="outline" icon="download">Demonstrativo PDF</Btn><Btn sm icon="plus">Adicionar Despesa</Btn></div>
          </div>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:12,marginBottom:14}}>
            <thead><tr style={{borderBottom:`1px solid ${T.border}`}}>{["Discriminação","Data Pgto.","Moeda","Taxa","Valor R$"].map(h=><th key={h} style={{textAlign:"left",padding:"7px 9px",color:T.dim,fontWeight:600,fontSize:10,textTransform:"uppercase"}}>{h}</th>)}</tr></thead>
            <tbody>{NUMERARIO_CP250884.map((n,i)=>(
              <tr key={i} style={{borderBottom:`1px solid ${T.border}22`}} onMouseOver={e=>e.currentTarget.style.background="#ffffff06"} onMouseOut={e=>e.currentTarget.style.background="transparent"}>
                <td style={{padding:"9px 9px",color:T.text,fontWeight:500}}>{n.desc}</td>
                <td style={{padding:"9px 9px",color:T.muted}}>{n.data}</td>
                <td style={{padding:"9px 9px"}}><Badge color={n.moeda==="USD"?T.blue:n.moeda==="EUR"?T.purple:T.green} sm>{n.moeda}</Badge></td>
                <td style={{padding:"9px 9px",color:T.dim,fontFamily:"monospace"}}>{n.taxa||"—"}</td>
                <td style={{padding:"9px 9px",color:T.gold,fontFamily:"monospace",fontWeight:700}}>R$ {n.brl.toLocaleString("pt-BR",{minimumFractionDigits:2})}</td>
              </tr>
            ))}</tbody>
            <tfoot><tr style={{background:T.gold+"0a",borderTop:`2px solid ${T.gold}44`}}>
              <td colSpan={4} style={{padding:"10px 9px",fontWeight:700,color:T.text}}>TOTAL DESPESAS (1)</td>
              <td style={{padding:"10px 9px",fontWeight:800,color:T.gold,fontFamily:"monospace",fontSize:14}}>R$ {totalNum.toLocaleString("pt-BR",{minimumFractionDigits:2})}</td>
            </tr></tfoot>
          </table>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}}>
            <div style={{padding:"10px 14px",background:T.card2,borderRadius:6}}>
              <div style={{fontSize:10,color:T.dim,textTransform:"uppercase"}}>Total Despesas (1)</div>
              <div style={{color:T.gold,fontWeight:700,fontSize:14,marginTop:3}}>R$ {totalNum.toLocaleString("pt-BR",{minimumFractionDigits:2})}</div>
            </div>
            <div style={{padding:"10px 14px",background:T.card2,borderRadius:6}}>
              <div style={{fontSize:10,color:T.dim,textTransform:"uppercase"}}>Adiantamento (2)</div>
              <div style={{color:T.muted,fontWeight:700,fontSize:14,marginTop:3}}>R$ —</div>
            </div>
            <div style={{padding:"10px 14px",background:T.gold+"18",border:`1px solid ${T.gold}44`,borderRadius:6}}>
              <div style={{fontSize:10,color:T.dim,textTransform:"uppercase"}}>Diferença a favor Conexus</div>
              <div style={{color:T.gold,fontWeight:800,fontSize:14,marginTop:3}}>R$ {totalNum.toLocaleString("pt-BR",{minimumFractionDigits:2})}</div>
            </div>
          </div>
        </Card>
      )}
      {selProc&&<Modal title={`Processo ${selProc.id}`} onClose={()=>setSelProc(null)}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
          {[["Cliente",selProc.cliente],["Modal",selProc.modal],["HAWB/BL",selProc.hawb],["Status",selProc.status],["Origem",selProc.origem],["Destino",selProc.destino],["Abertura",selProc.dtAbertura],["Entrega",selProc.dtEntrega]].map(([k,v])=>(
            <div key={k}><div style={{fontSize:10,color:T.dim,textTransform:"uppercase",letterSpacing:"0.05em",marginBottom:3}}>{k}</div><div style={{fontSize:13,color:T.text,fontWeight:500}}>{v}</div></div>
          ))}
        </div>
      </Modal>}
    </div>
  );
};

// ─── MÓDULO FINANCEIRO ─────────────────────────────────────────────────────────
const Financeiro = () => {
  const [tab,setTab] = useState("faturas");
  const tabs = [
    {id:"faturas",label:"Faturas",icon:"tag"},
    {id:"profit",label:"Profit por File",icon:"profit"},
    {id:"relatorios",label:"Relatórios",icon:"chart"},
  ];
  const totalAReceber = FATURAS_FIN.filter(f=>f.status==="A receber"||f.status==="Em aberto").reduce((a,b)=>a+b.valor,0);
  const totalRecebido = FATURAS_FIN.filter(f=>f.status==="Recebido").reduce((a,b)=>a+b.valor,0);
  return (
    <div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:20}}>
        <div><h2 style={{fontSize:20,fontWeight:800,margin:0}}>Financeiro</h2><p style={{color:T.muted,fontSize:12,margin:"4px 0 0"}}>Faturas, profit por file e relatórios</p></div>
        <div style={{display:"flex",gap:8}}><Btn v="outline" icon="download">Exportar</Btn><Btn icon="plus">Nova Fatura</Btn></div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:20}}>
        <Stat label="Recebido (mês)" value={`R$ ${(totalRecebido/1000).toFixed(1)}k`} icon="dollar" color={T.green} trend="+12%"/>
        <Stat label="A Receber" value={`R$ ${(totalAReceber/1000).toFixed(1)}k`} icon="clock" color={T.gold} sub="3 faturas"/>
        <Stat label="Inadimplência" value="R$ 7,8k" icon="alert" color={T.red} sub="1 vencida"/>
        <Stat label="Margem Média" value="71%" icon="trending" color={T.blue}/>
      </div>
      <TabBar tabs={tabs} active={tab} onChange={setTab}/>
      {tab==="faturas"&&(
        <Card>
          <table style={{width:"100%",borderCollapse:"collapse",fontSize:12}}>
            <thead><tr style={{borderBottom:`1px solid ${T.border}`}}>{["Fatura","Processo","Cliente","Tipo","Vencimento","Valor","Status",""].map(h=><th key={h} style={{textAlign:"left",padding:"7px 9px",color:T.dim,fontWeight:600,fontSize:10,textTransform:"uppercase"}}>{h}</th>)}</tr></thead>
            <tbody>{FATURAS_FIN.map((f,i)=>(
              <tr key={i} style={{borderBottom:`1px solid ${T.border}22`}} onMouseOver={e=>e.currentTarget.style.background="#ffffff06"} onMouseOut={e=>e.currentTarget.style.background="transparent"}>
                <td style={{padding:"10px 9px",color:T.gold,fontFamily:"monospace",fontSize:11,fontWeight:700}}>{f.id}</td>
                <td style={{padding:"10px 9px",color:T.muted,fontFamily:"monospace",fontSize:11}}>{f.processo}</td>
                <td style={{padding:"10px 9px",color:T.text,fontWeight:500}}>{f.cliente}</td>
                <td style={{padding:"10px 9px",color:T.muted}}>{f.tipo}</td>
                <td style={{padding:"10px 9px",color:f.status==="Vencido"?T.red:T.muted,fontSize:11}}>{f.venc}</td>
                <td style={{padding:"10px 9px",fontWeight:700,color:f.status==="Recebido"?T.green:T.text}}>R$ {f.valor.toLocaleString("pt-BR",{minimumFractionDigits:2})}</td>
                <td style={{padding:"10px 9px"}}><Badge color={sc(f.status)} sm>{f.status}</Badge></td>
                <td style={{padding:"10px 9px"}}><Btn sm v="ghost" icon="eye">Ver</Btn></td>
              </tr>
            ))}</tbody>
          </table>
          <div style={{marginTop:12,padding:"10px 9px",background:T.gold+"0a",borderRadius:6,display:"flex",justifyContent:"flex-end",gap:20}}>
            <span style={{fontSize:12,color:T.muted}}>Recebido: <strong style={{color:T.green}}>R$ {totalRecebido.toLocaleString("pt-BR",{minimumFractionDigits:2})}</strong></span>
            <span style={{fontSize:12,color:T.muted}}>A Receber: <strong style={{color:T.gold}}>R$ {totalAReceber.toLocaleString("pt-BR",{minimumFractionDigits:2})}</strong></span>
          </div>
        </Card>
      )}
      {tab==="profit"&&(
        <Card>
          <div style={{fontWeight:700,fontSize:13,marginBottom:14}}>Profit por File — Junho 2026</div>
          {[
            {proc:"CP250884",cliente:"Fundação Coppetec",receitaTotal:30497.40,custosNumerario:18153.57,honorarios:4240.59,profitBruto:8103.24,profitPct:26.6,status:"Concluído"},
            {proc:"CP250885",cliente:"TechImport Ltda",receitaTotal:12500,custosNumerario:null,honorarios:null,profitBruto:null,profitPct:null,status:"Em aberto"},
            {proc:"CP250886",cliente:"Global Trade S.A.",receitaTotal:8200,custosNumerario:null,honorarios:null,profitBruto:null,profitPct:null,status:"Em aberto"},
          ].map((r,i)=>(
            <div key={i} style={{padding:14,background:T.card2,borderRadius:8,marginBottom:10}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:10,alignItems:"center"}}>
                <div><span style={{color:T.gold,fontFamily:"monospace",fontWeight:700}}>{r.proc}</span><span style={{color:T.muted,fontSize:12,marginLeft:8}}>{r.cliente}</span></div>
                <Badge color={sc(r.status)} sm>{r.status}</Badge>
              </div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10}}>
                {[["Receita Total","R$ "+r.receitaTotal?.toLocaleString("pt-BR",{minimumFractionDigits:2})||"—",T.text],["Custos Numerário",r.custosNumerario?"R$ "+r.custosNumerario.toLocaleString("pt-BR",{minimumFractionDigits:2}):"—",T.red],["NF Agenciamento",r.honorarios?"R$ "+r.honorarios.toLocaleString("pt-BR",{minimumFractionDigits:2}):"—",T.blue],["Profit Bruto",r.profitBruto?"R$ "+r.profitBruto.toLocaleString("pt-BR",{minimumFractionDigits:2})+" ("+r.profitPct+"%)":"—",T.green]].map(([k,v,c])=>(
                  <div key={k}><div style={{fontSize:10,color:T.dim,textTransform:"uppercase",marginBottom:3}}>{k}</div><div style={{fontWeight:700,color:c,fontSize:13}}>{v}</div></div>
                ))}
              </div>
            </div>
          ))}
        </Card>
      )}
      {tab==="relatorios"&&(
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12}}>
          {[
            {title:"DRE — Demonstrativo de Resultado",desc:"Receitas, custos e lucro por período",icon:"chart"},
            {title:"Contas a Receber",desc:"Inadimplência e vencimentos detalhados",icon:"dollar"},
            {title:"Profit por Processo",desc:"Análise de rentabilidade por file",icon:"profit"},
            {title:"Receita por Cliente",desc:"Ranking de faturamento por cliente",icon:"users"},
            {title:"Receita por Modal",desc:"Distribuição aéreo, marítimo, rodoviário",icon:"ship"},
            {title:"Fluxo de Caixa",desc:"Projeção entradas e saídas 60 dias",icon:"trending"},
          ].map((r,i)=>(
            <Card key={i} style={{cursor:"pointer"}} onClick={()=>{}}>
              <div style={{background:T.gold+"18",borderRadius:8,padding:10,display:"inline-block",marginBottom:10}}><Icon n={r.icon} s={18} c={T.gold}/></div>
              <div style={{fontWeight:700,fontSize:13,marginBottom:5}}>{r.title}</div>
              <div style={{fontSize:11,color:T.muted,marginBottom:12}}>{r.desc}</div>
              <Btn sm v="outline" icon="download">Gerar Relatório</Btn>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── MÓDULO DIRETORIA ──────────────────────────────────────────────────────────
const Diretoria = () => {
  const months = ["Jan","Fev","Mar","Abr","Mai","Jun"];
  const rec = [38,52,44,61,58,74];
  const cus = [22,31,26,38,35,45];
  const maxV = Math.max(...rec);
  return (
    <div>
      <div style={{marginBottom:20}}><h2 style={{fontSize:20,fontWeight:800,margin:0}}>Diretoria</h2><p style={{color:T.muted,fontSize:12,margin:"4px 0 0"}}>Painel executivo — KPIs em tempo real</p></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12,marginBottom:20}}>
        <Stat label="Receita Acumulada 2026" value="R$ 327k" icon="dollar" color={T.gold} trend="+18% vs 2025"/>
        <Stat label="Margem Bruta Média" value="71%" icon="profit" color={T.green}/>
        <Stat label="Processos no Ano" value="87" icon="package" color={T.blue}/>
        <Stat label="Clientes Ativos" value="38" icon="users" color={T.purple} trend="+3 este mês"/>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"2fr 1fr",gap:14,marginBottom:14}}>
        <Card>
          <div style={{fontWeight:700,fontSize:13,marginBottom:16}}>Receita vs Custos — 2026</div>
          <div style={{display:"flex",gap:6,alignItems:"flex-end",height:160}}>
            {months.map((m,i)=>(
              <div key={m} style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:3}}>
                <div style={{display:"flex",gap:3,width:"100%",alignItems:"flex-end",justifyContent:"center"}}>
                  <div title={`Receita: R$ ${rec[i]}k`} style={{width:"45%",background:T.gold,height:`${(rec[i]/maxV)*140}px`,borderRadius:"3px 3px 0 0",opacity:i===5?1:0.7}}/>
                  <div title={`Custo: R$ ${cus[i]}k`} style={{width:"45%",background:T.red,height:`${(cus[i]/maxV)*140}px`,borderRadius:"3px 3px 0 0",opacity:0.7}}/>
                </div>
                <div style={{fontSize:10,color:T.dim}}>{m}</div>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:14,marginTop:10}}>
            {[["Receita",T.gold],["Custo",T.red]].map(([l,c])=><div key={l} style={{display:"flex",alignItems:"center",gap:5}}><div style={{width:9,height:9,background:c,borderRadius:2}}/><span style={{fontSize:10,color:T.muted}}>{l}</span></div>)}
          </div>
        </Card>
        <div style={{display:"flex",flexDirection:"column",gap:12}}>
          <Card>
            <div style={{fontSize:10,color:T.muted,textTransform:"uppercase",marginBottom:4}}>Receita Jun/26</div>
            <div style={{fontSize:26,fontWeight:800,color:T.gold}}>R$ 74k</div>
            <div style={{fontSize:11,color:T.green,marginTop:3}}>↑ 27% vs mai</div>
          </Card>
          <Card>
            <div style={{fontSize:10,color:T.muted,textTransform:"uppercase",marginBottom:6}}>Por Modal</div>
            {[["Marítimo FCL",45,T.blue],["Aéreo",32,T.gold],["LCL",18,T.purple],["Rodoviário",5,T.muted]].map(([m,p,c])=>(
              <div key={m} style={{marginBottom:7}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:3}}>
                  <span style={{fontSize:11,color:T.muted}}>{m}</span>
                  <span style={{fontSize:11,color:c,fontWeight:600}}>{p}%</span>
                </div>
                <div style={{height:3,background:T.border,borderRadius:2}}><div style={{height:"100%",background:c,width:`${p}%`,borderRadius:2,opacity:0.8}}/></div>
              </div>
            ))}
          </Card>
        </div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
        <Card>
          <div style={{fontWeight:700,fontSize:13,marginBottom:12}}>Top Clientes — Volume 2026</div>
          {[["Global Trade S.A.","R$ 1.200.000","Exportador",T.green],["Fundação Coppetec","R$ 480.000","Importador",T.blue],["TechImport Ltda","R$ 320.000","Importador",T.gold],["Eletrônicos do Sul","R$ 210.000","Importador",T.orange]].map(([c,v,t,col],i)=>(
            <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:i<3?`1px solid ${T.border}22`:"none"}}>
              <div><div style={{fontSize:12,fontWeight:600,color:T.text}}>{c}</div><div style={{fontSize:10,color:T.dim,marginTop:1}}>{t}</div></div>
              <div style={{textAlign:"right"}}><div style={{fontSize:12,fontWeight:700,color:col}}>{v}</div></div>
            </div>
          ))}
        </Card>
        <Card>
          <div style={{fontWeight:700,fontSize:13,marginBottom:12}}>Cumprimento de Tarefas</div>
          {[["Propostas enviadas no prazo","92%",T.green],["Processos sem pendência","87%",T.gold],["Faturas emitidas no prazo","95%",T.blue],["Follow-up CRM em dia","78%",T.orange]].map(([label,pct,c],i)=>(
            <div key={i} style={{marginBottom:12}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                <span style={{fontSize:11,color:T.muted}}>{label}</span>
                <span style={{fontSize:11,fontWeight:700,color:c}}>{pct}</span>
              </div>
              <div style={{height:4,background:T.border,borderRadius:2}}><div style={{height:"100%",background:c,width:pct,borderRadius:2}}/></div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

// ─── APP PRINCIPAL ─────────────────────────────────────────────────────────────
export default function Skyline({ onProposta }) {
  const { usuario, logout } = useAuth();
  const [mod, setMod] = useState("dashboard");
  // proposta handled by parent via onProposta prop

  const nav = [
    {id:"dashboard",label:"Dashboard",icon:"home"},
    {id:"comercial",label:"Comercial",icon:"briefcase"},
    {id:"operacional",label:"Operacional",icon:"package"},
    {id:"financeiro",label:"Financeiro",icon:"dollar"},
    {id:"diretoria",label:"Diretoria",icon:"chart"},
  ];

  return (
    <div style={{display:"flex",minHeight:"100vh",background:T.darker,color:T.text,fontFamily:"'Inter','Segoe UI',sans-serif",fontSize:13}}>
      {/* SIDEBAR */}
      <aside style={{width:210,background:T.dark,borderRight:`1px solid ${T.border}`,display:"flex",flexDirection:"column",flexShrink:0,position:"sticky",top:0,height:"100vh"}}>
        {/* Logo */}
        <div style={{padding:"16px 14px 14px",borderBottom:`1px solid ${T.border}`,display:"flex",alignItems:"center",gap:10}}>
          <img src={LOGO_B64} alt="Conexus Partners" style={{height:42,width:"auto",objectFit:"contain"}}/>
        </div>
        {/* Nav */}
        <nav style={{flex:1,padding:"12px 8px"}}>
          <div style={{fontSize:9,color:T.dim,letterSpacing:"0.1em",textTransform:"uppercase",padding:"0 8px",marginBottom:6}}>Módulos</div>
          {nav.map(item=>{
            const a=mod===item.id;
            return <button key={item.id} onClick={()=>setMod(item.id)} style={{width:"100%",textAlign:"left",display:"flex",alignItems:"center",gap:8,padding:"8px 10px",borderRadius:7,marginBottom:1,cursor:"pointer",background:a?T.gold+"20":"transparent",color:a?T.gold:T.muted,border:a?`1px solid ${T.gold}33`:"1px solid transparent",fontWeight:a?600:400,fontSize:12,fontFamily:"inherit"}}>
              <Icon n={item.icon} s={14} c={a?T.gold:T.dim}/>{item.label}
            </button>;
          })}
          <div style={{fontSize:9,color:T.dim,letterSpacing:"0.1em",textTransform:"uppercase",padding:"10px 8px 6px"}}>Acesso Rápido</div>
          <button onClick={()=>onProposta()} style={{width:"100%",textAlign:"left",display:"flex",alignItems:"center",gap:8,padding:"8px 10px",borderRadius:7,cursor:"pointer",background:"transparent",color:T.muted,border:"1px solid transparent",fontSize:12,fontFamily:"inherit",fontWeight:400}} onMouseOver={e=>{e.currentTarget.style.background=T.gold+"12";e.currentTarget.style.color=T.gold;}} onMouseOut={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color=T.muted;}}>
            <Icon n="file" s={14} c={T.gold}/>Proposta Comercial
          </button>
        </nav>
        {/* Footer */}
        <div style={{padding:"10px 14px",borderTop:`1px solid ${T.border}`}}>
          <div style={{fontSize:11,color:T.dim}}>Santo André — SP</div>
          <div style={{fontSize:10,color:T.dim,marginTop:1}}>CNPJ: 22.627.918/0001-06</div>
        </div>
      </aside>

      {/* MAIN */}
      <div style={{flex:1,display:"flex",flexDirection:"column",minWidth:0}}>
        {/* Topbar */}
        <header style={{background:T.dark,borderBottom:`1px solid ${T.border}`,padding:"0 20px",height:50,display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:100}}>
          <div style={{fontSize:12,color:T.muted,display:"flex",alignItems:"center",gap:6}}>
            <span style={{color:T.dim}}>Conexus /</span>
            <span style={{color:T.gold,fontWeight:600,textTransform:"capitalize"}}>{mod}</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:12}}>
            <div style={{position:"relative",cursor:"pointer"}}><Icon n="bell" s={16} c={T.muted}/><span style={{position:"absolute",top:-3,right:-3,width:7,height:7,background:T.red,borderRadius:"50%",border:`2px solid ${T.dark}`}}/></div>
            <button onClick={logout} title="Sair do sistema" style={{background:"transparent",border:`1px solid ${T.border}`,borderRadius:6,color:T.muted,padding:"4px 10px",fontSize:11,cursor:"pointer",fontFamily:"inherit"}} onMouseOver={e=>{e.currentTarget.style.color=T.red;e.currentTarget.style.borderColor=T.red+"55"}} onMouseOut={e=>{e.currentTarget.style.color=T.muted;e.currentTarget.style.borderColor=T.border}}>Sair</button>
            <div style={{display:"flex",alignItems:"center",gap:7}}>
              <div style={{width:26,height:26,background:T.gold,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:10,color:T.darker}}>G</div>
              <div><div style={{fontSize:12,fontWeight:600}}>Graziela Rossato</div><div style={{fontSize:9,color:T.dim}}>Operações</div></div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main style={{flex:1,padding:20,overflowY:"auto"}}>
          {mod==="dashboard"&&<Dashboard onNav={setMod}/>}
          {mod==="comercial"&&<Comercial onProposta={()=>onProposta()}/>}
          {mod==="operacional"&&<Operacional/>}
          {mod==="financeiro"&&<Financeiro/>}
          {mod==="diretoria"&&<Diretoria/>}
        </main>
      </div>

    </div>
  );
}
