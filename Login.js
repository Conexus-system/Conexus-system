/* eslint-disable */
import { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const G = "#bd914c";
const LOGO = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAAABmJLR0QA/wD/AP+gvaeTAAAgAElEQVR4nOzdd3xT1f8/8Ju90673oHROoCBYQUMTVAIjHmIiOhiMMRodnN0lThozBwcToyZGd0cnY8aoIyZGBx2IRi+oqoB4wIrhYCknQZdSFwYGoFTaPnj3upJve55327/ne57X97f9o//dvfe+SXJ+773OuecQQgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgSoR2dgGAa13YtbCzi3BvG3Ra3f6dnN32ikGnNujUOnWTQa8hWozt32d7sNgcgsVic3gZL+zs3JKA83A7uwDgRMeyJqsaKkRu/p1dkAfL6c1ztMo6o16n1zaTS5pryySewQadusVo6PTIThBEi9HA4Ys6uxTgXAjuZzMWm9ti1NffvtLZBbn3cAUSocyXK5DYuf2pTS9qlfVGg86gVaoaykVuAU01t6i1Bp2qsfK6c0rqIBbBaiFaOrsU4EQI7vczNodHcHidXYp7j2dIUnNdqVpRlT5pu+0tD654lPyHvEJqvltMEIRBpzaN7C6LhVbZ+xqC+/2MzeGxuQjubcMVSFUNFRKPkOSxH9jYjArrJKNeQ0Z2ABeB4H4/Y3N5zbVlnV2KewaXLzboNXpNU/qsbda2ObP1FU3zXaNeq9c0dWTZANqK3dkFACfqM/ELg07V2aW4NwhlPgRBcLiCoXP3Wtvm4IpHVQ3lAokXIju4PtTcAQieSK7XKrkCycCp62g3oBph9JomRZVr3RoFoIXgfp9jc/hGg7azS+HSOFyBQafh8AS0kf3Cj4tVjZV6TZNe09zxZQNwGJpl7nMsNkcg8ezsUrg0o0HHIohBz2+xXHX0+0xl/R2R3A+RHe45CO73OS5fpFU1dnYpXFpLizHjxR8tlx9c8ahe09xi1NeVXe74UgG0E4L7fS51+kZX6BLpmshemrR3UMlGdqNBp1XWd3SxAJiA4P4AYLE5PGFnF8LlyP27cvliG5Ed4J6G4H7/Y3O4Bj3uqf4PvshNragWSL0tVyGyw/0Bwf3+lzF7F1pmzOi1SsJo6DPhM7Plh1aOJVj4UsD9AOcxPHhYLKNBl/b8ZrPFR79/hiBYbA7yg+F+gOD+QLDR6/JBw+EKWCy25RtyZus8giC4fLERTVhwX0Bwf5CgwYEgWgiCzaapm2uaawVSL62yruOLBOAM+LY/KIbO3ctisx/wKRqEMh82m2OZ1X5wxaMGrUpRdaNTSgXgDAjuDxA2h/eAtznoNc2W82+c3f4qVyjDCGtwn0Fwf4BkvLCzxWhgPajTd5DjPloOIKNpqhG7B3ZGiQCcCMH9wTJ07l42h0eb333fo622H82abNTrGisKOqVIAM6D4P7A4fLFeq2Sy7d3dtD7g1DmTdBV2w1aFQu5j3A/wmn9wEmdtv7wtxOMBu0DNRqwVtnAF7uZLTyxYYZW2aBtru2AAnC4AqlPBIsuUadTKOvvGHXqzi4FOBFq7g+i9Be2EwTLaNR3dkE6jtGgGzh1vdlCnVphGfEZJPEMYXMFBEGwWGwOT6jXKFtcpquw2D0w/YUdnV0KcCJMf/7gOrjiUYLFZnO4D0gKjVnHpTNbX1ErqnSqBicdjsMXsTk8vsit3zPfOukQADYguD/QDq0cSxAsDk/ovBjnClhszpA5P5stPJo1WSDxYnzOPKl3hLqxSq9tRq9g6FxolnmgDX5xN4cnNOjULDans8viLFy+hEXXNdeo1zIe2Tk8oVZZJ5T7IrJDp0PNHQiAAA=";

export default function Login() {
  const [email, setEmail]       = useState("");
  const [senha, setSenha]       = useState("");
  const [erro, setErro]         = useState("");
  const [loading, setLoading]   = useState(false);
  const [resetMode, setReset]   = useState(false);
  const [resetMsg, setResetMsg] = useState("");

  const traducaoErro = (code) => {
    const erros = {
      "auth/user-not-found":    "E-mail não cadastrado.",
      "auth/wrong-password":    "Senha incorreta.",
      "auth/invalid-email":     "E-mail inválido.",
      "auth/too-many-requests": "Muitas tentativas. Aguarde alguns minutos.",
      "auth/invalid-credential":"E-mail ou senha incorretos.",
    };
    return erros[code] || "Erro ao entrar. Tente novamente.";
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setErro(""); setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, senha);
    } catch (err) {
      setErro(traducaoErro(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async (e) => {
    e.preventDefault();
    setErro(""); setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setResetMsg("E-mail de redefinição enviado! Verifique sua caixa de entrada.");
    } catch (err) {
      setErro(traducaoErro(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f1013 0%, #16181c 50%, #1a1d24 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Inter','Segoe UI',sans-serif",
    }}>
      {/* Fundo decorativo */}
      <div style={{ position:"fixed", inset:0, overflow:"hidden", pointerEvents:"none" }}>
        <div style={{ position:"absolute", top:"-20%", right:"-10%", width:500, height:500, borderRadius:"50%", background: G+"08", filter:"blur(80px)" }}/>
        <div style={{ position:"absolute", bottom:"-20%", left:"-10%", width:400, height:400, borderRadius:"50%", background: G+"06", filter:"blur(60px)" }}/>
      </div>

      <div style={{
        width: "100%", maxWidth: 420, padding: "0 20px",
        position: "relative", zIndex: 1,
      }}>
        {/* Card */}
        <div style={{
          background: "#1e2028",
          border: `1px solid #2c2f3a`,
          borderRadius: 16,
          padding: "40px 36px",
          boxShadow: "0 24px 64px #00000088",
        }}>
          {/* Logo */}
          <div style={{ textAlign:"center", marginBottom: 32 }}>
            <img src={LOGO} alt="Conexus Partners" style={{ height: 64, width:"auto", objectFit:"contain" }}/>
            <div style={{ marginTop: 14, fontSize: 11, color: "#5e5a55", letterSpacing:"0.12em", textTransform:"uppercase" }}>
              Sistema de Gestão
            </div>
          </div>

          {/* Título */}
          <div style={{ marginBottom: 24, textAlign:"center" }}>
            <h1 style={{ fontSize: 20, fontWeight: 700, color: "#eceaf4", margin: 0 }}>
              {resetMode ? "Recuperar Senha" : "Entrar"}
            </h1>
            <p style={{ fontSize: 12, color: "#8b8fa8", marginTop: 6 }}>
              {resetMode ? "Digite seu e-mail para receber o link de redefinição" : "Acesse o sistema com seu e-mail e senha"}
            </p>
          </div>

          {/* Mensagem de sucesso (reset) */}
          {resetMsg && (
            <div style={{ background: "#3ecf8e22", border:"1px solid #3ecf8e44", borderRadius:8, padding:"10px 14px", marginBottom:18, fontSize:12, color:"#3ecf8e" }}>
              {resetMsg}
            </div>
          )}

          {/* Erro */}
          {erro && (
            <div style={{ background:"#e05c7222", border:"1px solid #e05c7244", borderRadius:8, padding:"10px 14px", marginBottom:18, fontSize:12, color:"#e05c72" }}>
              {erro}
            </div>
          )}

          {/* Formulário */}
          <form onSubmit={resetMode ? handleReset : handleLogin}>
            {/* E-mail */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ display:"block", fontSize:11, fontWeight:600, color:"#8b8fa8", marginBottom:6, textTransform:"uppercase", letterSpacing:"0.05em" }}>
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="graziela@conexuspartners.com.br"
                required
                style={{
                  width:"100%", boxSizing:"border-box",
                  background:"#13151a", border:`1px solid #2c2f3a`,
                  borderRadius:8, color:"#eceaf4",
                  padding:"11px 14px", fontSize:13, outline:"none",
                  fontFamily:"inherit",
                  transition:"border-color 0.15s",
                }}
                onFocus={e => e.target.style.borderColor = G+"88"}
                onBlur={e => e.target.style.borderColor = "#2c2f3a"}
              />
            </div>

            {/* Senha (só no modo login) */}
            {!resetMode && (
              <div style={{ marginBottom: 20 }}>
                <label style={{ display:"block", fontSize:11, fontWeight:600, color:"#8b8fa8", marginBottom:6, textTransform:"uppercase", letterSpacing:"0.05em" }}>
                  Senha
                </label>
                <input
                  type="password"
                  value={senha}
                  onChange={e => setSenha(e.target.value)}
                  placeholder="••••••••"
                  required
                  style={{
                    width:"100%", boxSizing:"border-box",
                    background:"#13151a", border:`1px solid #2c2f3a`,
                    borderRadius:8, color:"#eceaf4",
                    padding:"11px 14px", fontSize:13, outline:"none",
                    fontFamily:"inherit",
                  }}
                  onFocus={e => e.target.style.borderColor = G+"88"}
                  onBlur={e => e.target.style.borderColor = "#2c2f3a"}
                />
              </div>
            )}

            {/* Botão principal */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width:"100%", background: loading ? G+"88" : G,
                color:"#111", border:"none", borderRadius:8,
                padding:"12px", fontSize:14, fontWeight:700,
                cursor: loading ? "not-allowed" : "pointer",
                fontFamily:"inherit", letterSpacing:"0.03em",
                transition:"opacity 0.15s",
              }}
              onMouseOver={e => !loading && (e.target.style.opacity="0.85")}
              onMouseOut={e => (e.target.style.opacity="1")}
            >
              {loading ? "Aguarde..." : (resetMode ? "Enviar link de recuperação" : "Entrar no Sistema")}
            </button>
          </form>

          {/* Link recuperar/voltar */}
          <div style={{ textAlign:"center", marginTop:18 }}>
            <button
              onClick={() => { setReset(!resetMode); setErro(""); setResetMsg(""); }}
              style={{ background:"none", border:"none", color: G, fontSize:12, cursor:"pointer", fontFamily:"inherit", textDecoration:"underline" }}
            >
              {resetMode ? "← Voltar ao login" : "Esqueci minha senha"}
            </button>
          </div>

          {/* Rodapé */}
          <div style={{ marginTop:28, paddingTop:20, borderTop:"1px solid #2c2f3a", textAlign:"center" }}>
            <div style={{ fontSize:10, color:"#5e5a55" }}>
              Conexus Partners Ltda · CNPJ 22.627.918/0001-06
            </div>
            <div style={{ fontSize:10, color:"#5e5a55", marginTop:3 }}>
              Santo André — SP · www.conexuspartners.com.br
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
