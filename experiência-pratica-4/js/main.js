// ===================================================================
// 1. Funções de Máscara de Input
// ===================================================================

function mascaraCPF(e) {
  let t = e.target.value.replace(/\D/g, "");
  t = (t = (t = t.replace(/(\d{3})(\d)/, "$1.$2")).replace(/(\d{3})(\d)/, "$1.$2")).replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  e.target.value = t.slice(0, 14);
}

function mascaraTelefone(e) {
  let t = e.target.value.replace(/\D/g, "");
  t = (t = t.replace(/^(\d{2})(\d)/g, "($1) $2")).replace(/(\d{5})(\d)/, "$1-$2");
  e.target.value = t.slice(0, 15);
}

function mascaraCEP(e) {
  let t = e.target.value.replace(/\D/g, "");
  t = t.replace(/^(\d{5})(\d)/, "$1-$2");
  e.target.value = t.slice(0, 9);
}

// ===================================================================
// 2. Lógica Principal (Executa quando o DOM está pronto)
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
  // --- Lógica do Navbar (Menu Hamburger) ---
  let e = document.getElementById("navbarToggle"),
    t = document.getElementById("navbarMenu");
  
  e && t && e.addEventListener("click", () => {
    t.classList.toggle("is-active");
    let a = t.classList.contains("is-active");
    e.setAttribute("aria-expanded", a ? "true" : "false");
  });

  // --- Lógica de Dropdown Mobile ---
  document.querySelectorAll(".nav-item-dropdown > a").forEach(e => {
    e.addEventListener("click", t => {
      if (window.innerWidth < 768 && e.nextElementSibling && e.nextElementSibling.classList.contains("dropdown-menu")) {
        t.preventDefault();
        e.parentElement.classList.toggle("is-active");
      }
    });
  });

  // --- Lógica de Roteamento SPA (Single Page Application) ---
  let a = document.getElementById("app-content"),
    n = {
      "/": "template-home",
      "/projetos": "template-projetos",
      "/cadastro": "template-cadastro"
    };

  function r() { // Função de Roteamento
    let e = location.hash.substring(1) || "/",
      t = n[e] || n["/"],
      r = document.getElementById(t);
    
    if (r) {
      let i = r.content.cloneNode(!0);
      a.innerHTML = "";
      a.appendChild(i);
      if ("/cadastro" === e) {
        l(); // Chama a função de listeners do formulário
      }
    } else {
      a.innerHTML = "<h2>Erro 404: P&aacute;gina n&atilde;o encontrada</h2>";
    }
  }

  // --- Lógica do Formulário de Cadastro ---
  function l() { // Adiciona listeners ao formulário
    let e = document.getElementById("form-cadastro");
    if (!e) return;

    e.querySelector("#cpf")?.addEventListener("input", mascaraCPF);
    e.querySelector("#telefone")?.addEventListener("input", mascaraTelefone);
    e.querySelector("#cep")?.addEventListener("input", mascaraCEP);

    e.addEventListener("submit", t => {
      t.preventDefault();
      let a = i(e); // Valida o formulário
      if (a) {
        alert("Cadastro enviado com sucesso! (simula\xe7\xe3o)");
      } else {
        alert("Por favor, corrija os campos destacados em vermelho.");
      }
    });
  }

  // --- Funções de Validação de Formulário ---
  function i(e) { // Função principal de validação
    let t = !0;
    o(e); // Limpa erros antigos
    
    let a = e.querySelectorAll("input[required], select[required]");
    
    a.forEach(e => {
      let a = e.value.trim();
      if ("" === a) {
        t = !1;
        s(e, "Este campo \xe9 obrigat\xf3rio.");
      } else if (e.pattern) {
        let n = RegExp(e.pattern);
        if (!n.test(a)) {
          t = !1;
          let r = e.title || "Formato inv\xe1lido.";
          s(e, r);
        }
      } else if ("email" === e.type && !c(a)) {
        t = !1;
        s(e, "Por favor, insira um e-mail v\xe1lido.");
      }
    });
    return t;
  }

  function s(e, t) { // Mostra o erro
    e.classList.add("invalid");
    let a = e.parentElement.querySelector(".error-message");
    if (a) {
      a.textContent = t;
    }
  }

  function o(e) { // Limpa os erros
    e.querySelectorAll(".invalid").forEach(e => {
      e.classList.remove("invalid");
    });
    e.querySelectorAll(".error-message").forEach(e => {
      e.textContent = "";
    });
  }

  function c(e) { // Valida email (Regex simples)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
  }

  // --- Inicialização do Roteamento ---
  window.addEventListener("hashchange", r);
  r(); // Carrega a rota inicial

  // --- Lógica do Seletor de Tema (Light/Dark Mode) ---
  let d = document.getElementById("theme-select"),
    u = localStorage.getItem("theme");

  function m(e) { // Aplica o tema
    document.documentElement.setAttribute("data-theme", e);
    if (d) {
      d.value = e;
    }
    localStorage.setItem("theme", e);
  }

  if (d) {
    d.addEventListener("change", e => {
      m(e.target.value);
    });
  }
  
  m(u || "light"); // Aplica o tema salvo ou o padrão "light"
});
