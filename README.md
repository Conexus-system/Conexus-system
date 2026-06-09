# Conexus Partners — Sistema com Login Firebase

## PASSO A PASSO COMPLETO PARA COLOCAR NO AR

---

## ETAPA 1 — Criar o projeto no Firebase (10 minutos)

1. Acesse https://console.firebase.google.com
2. Clique em "Criar um projeto"
3. Nome do projeto: conexus-partners → clique em "Continuar"
4. Desative o Google Analytics → clique em "Criar projeto"
5. Aguarde criar e clique em "Continuar"

### Ativar o Login por E-mail e Senha:
1. No menu lateral, clique em "Authentication"
2. Clique em "Começar"
3. Clique em "E-mail/senha"
4. Ative a primeira opção "E-mail/senha" → clique em "Salvar"

### Pegar as chaves do Firebase:
1. Clique na engrenagem (⚙️) → "Configurações do projeto"
2. Role até "Seus apps" → clique em "</>  Web"
3. Nome do app: conexus-web → clique em "Registrar app"
4. COPIE todo o bloco firebaseConfig que aparece (tem apiKey, authDomain, etc.)
5. Abra o arquivo src/firebase.js e cole os valores nos campos indicados

### Criar banco de dados Firestore:
1. No menu lateral, clique em "Firestore Database"
2. Clique em "Criar banco de dados"
3. Selecione "Iniciar no modo de produção" → clique em "Avançar"
4. Selecione região "southamerica-east1 (São Paulo)" → clique em "Ativar"
5. Depois que criar, clique em "Regras" e substitua o conteúdo por:

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}

6. Clique em "Publicar"

---

## ETAPA 2 — Criar os usuários do sistema

1. No Firebase Console, vá em "Authentication" → "Users"
2. Clique em "Adicionar usuário"
3. Preencha:
   - E-mail: graziela@conexuspartners.com.br
   - Senha: (defina uma senha segura)
4. Repita para cada usuário da equipe (máximo 5)

---

## ETAPA 3 — Instalar e testar localmente

1. Instale o Node.js: https://nodejs.org (versão LTS)
2. Abra o terminal na pasta do projeto e execute:

   npm install
   npm start

3. Acesse http://localhost:3000
4. Faça login com os e-mails cadastrados no Firebase
5. Se funcionar, prossiga para publicar na Vercel

---

## ETAPA 4 — Publicar na Vercel

### Opção A — Via GitHub (Recomendado)
1. Crie conta no GitHub: https://github.com
2. Crie repositório novo: "conexus-system"
3. Faça upload desta pasta para o repositório
4. Acesse https://vercel.com → "Add New Project"
5. Conecte o GitHub → selecione o repositório → clique "Deploy"
6. Pronto! Link tipo: https://conexus-partners.vercel.app

### Opção B — Via terminal
   npm install -g vercel
   vercel --prod

---

## COMO FAZER ALTERAÇÕES NO SISTEMA

### Via chat com Claude (mais fácil):
1. Acesse claude.ai
2. Faça upload do arquivo que quer mudar (Skyline.js ou Proposta.js)
3. Diga o que quer alterar
4. Baixe o arquivo atualizado e substitua na pasta
5. Republique na Vercel

### Arquivos principais:
- src/firebase.js          → Configuração do Firebase (chaves)
- src/modules/Login.js     → Tela de login
- src/modules/Skyline.js   → Sistema principal (todos os módulos)
- src/modules/Proposta.js  → Editor de proposta comercial
- src/context/AuthContext.js → Gerenciamento de sessão

---

## ESTRUTURA DE USUÁRIOS SUGERIDA

| E-mail                                | Perfil       |
|---------------------------------------|--------------|
| graziela@conexuspartners.com.br       | Operações    |
| diretoria@conexuspartners.com.br      | Diretoria    |
| comercial@conexuspartners.com.br      | Comercial    |

---

## SUPORTE TÉCNICO
Desenvolvido com Claude (Anthropic)
Para revisões: claude.ai
