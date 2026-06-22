/* eslint-disable */
// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURAÇÃO DO FIREBASE — CONEXUS PARTNERS
// ─────────────────────────────────────────────────────────────────────────────
// INSTRUÇÕES:
// 1. Acesse https://console.firebase.google.com
// 2. Clique em "Adicionar projeto" → dê o nome "conexus-partners"
// 3. Desative o Google Analytics (não é necessário) → clique em "Criar projeto"
// 4. No menu lateral, clique em "Configurações do projeto" (ícone de engrenagem)
// 5. Em "Seus apps", clique em "</>" (Web)
// 6. Registre o app com o nome "conexus-web"
// 7. Copie os valores do firebaseConfig e cole abaixo substituindo os placeholders
// ─────────────────────────────────────────────────────────────────────────────

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:            "AIzaSyBckOhqwBg33Yxu05p5k54bmSXyzcKlnTg",
  authDomain:        "conexus-partners.firebaseapp.com",
  projectId:         "conexus-partners",
  storageBucket:     "conexus-partners.firebasestorage.app",
  messagingSenderId: "702459427973",
  appId:             "1:702459427973:web:ae2ba46e3c354f5c387dec",
};

const app  = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
