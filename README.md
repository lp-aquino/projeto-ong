# Plataforma ONG Impacto (Entrega Final)

**Status do Projeto:** 🚀 Concluído

Versão final do projeto de desenvolvimento front-end, focado na criação de uma plataforma web completa, responsiva, acessível e otimizada para uma ONG fictícia.

## 📖 Tabela de Conteúdos

1.  [Sobre o Projeto](#1-sobre-o-projeto)
2.  [Personas e Casos de Uso](#2-personas-e-casos-de-uso)
3.  [Funcionalidades Implementadas](#3-funcionalidades-implementadas)
4.  [Tecnologias Utilizadas](#4-tecnologias-utilizadas)
5.  [Destaques Técnicos (Entregas)](#5-destaques-técnicos-por-entrega)
6.  [Acessibilidade (WCAG 2.1)](#6-acessibilidade-wcag-21)
7.  [Otimização e Performance](#7-otimização-e-performance)
8.  [Controle de Versão (Git)](#8-controle-de-versão)
9.  [Como Executar o Projeto](#9-como-executar-o-projeto)

---
### 1. Sobre o Projeto

A plataforma **ONG Impacto** é um sistema web SPA (Single Page Application) que oferece a ONGs uma presença digital profissional e funcional. O sistema foi projetado para engajar diferentes perfis de usuários, desde visitantes até administradores, facilitando o gerenciamento de projetos, voluntariado e doações.

## 2. Personas e Casos de Uso

* **Visitante:** Conhecer a organização, seus projetos e acessar informações de contato.
* **Voluntário:** Descobrir oportunidades, candidatar-se a projetos e acompanhar seu histórico.
* **Doador:** Conhecer projetos, realizar doações on-line e acompanhar a aplicação de recursos.
* **Administrador:** Gerenciar informações, cadastrar projetos, gerenciar voluntários e acompanhar métricas.

## 3. Funcionalidades Implementadas

* **Área Institucional:** Página inicial com missão, visão e informações de contato.
* **Gestão de Projetos:** Listagem de projetos sociais com sistema de *cards*.
* **Engajamento:** Formulário de cadastro de voluntários com validação avançada em JavaScript.
* **Navegação SPA:** Sistema de roteamento baseado em Hash (`#`) que carrega conteúdo dinamicamente sem recarregar a página, utilizando `<template>` HTML.
* **Responsividade Completa:** Design *mobile-first* adaptável a tablets e desktops.
* **Acessibilidade:** Seletor de tema com modos **Claro**, **Escuro** e **Alto Contraste**, e navegação completa por teclado.

## 4. Tecnologias Utilizadas

* **HTML5 Semântico**
* **CSS3 Moderno**
    * Variáveis CSS (Design System)
    * Flexbox e CSS Grid
    * Metodologia BEM/Modular (organização em `base/`, `layout/`, `components/`)
* **JavaScript (ES6+)**
    * Manipulação avançada do DOM
    * Roteador SPA (Single Page Application)
    * Validação de formulários (consistência de dados)
    * `localStorage` para persistência de tema
* **Git e GitHub**
    * Controle de versão
    * Estratégia GitFlow (branches `main`, `develop`, `feature/*`)
    * Commits Semânticos
    * GitHub Issues, Milestones, PRs e Releases

## 5. Destaques Técnicos por Entrega

####  entrega I: Estrutura Semântica
* Fundação do projeto com HTML5 semântico (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`), garantindo acessibilidade básica e SEO.

#### entrega II: Design System e Responsividade
* Implementação de um **Design System** completo com variáveis CSS para cores, tipografia (5+ tamanhos) e espaçamento modular (base 8px).
* Criação de um **Grid de 12 colunas** customizado.
* Desenvolvimento de componentes reutilizáveis (botões com estados, *cards* responsivos, *badges*).
* Implementação de **5 breakpoints** (`xs`, `md`, `lg`, `xl`, `xxl`) em *mobile-first*.

#### entrega III: Aplicação SPA (JavaScript)
* Transformação do site estático em uma **Single Page Application (SPA)**.
* Criação de um **roteador** JavaScript que lê a `location.hash` para carregar conteúdo dinamicamente.
* Uso de **templates HTML (`<template>`)** para armazenar o conteúdo das páginas "Home", "Projetos" e "Cadastro".
* Implementação de **validação de consistência de dados** no formulário de cadastro, com mensagens de erro customizadas, sem o uso de bibliotecas.

#### entrega IV: Acessibilidade, Otimização e Deploy
* **Controle de Versão:** Uso de GitFlow, Commits Semânticos, Issues e Releases (v1.0.0).
* **Acessibilidade (WCAG 2.1 AA):** Implementação de seletor de tema com modos **Escuro** e **Alto Contraste**, garantindo contraste de cores 4.5:1 e navegação total por teclado.
* **Otimização para Produção:** **Minificação** de arquivos CSS e JS (redução de ~40% no tamanho) e **compressão de imagens** (redução de ~70% no tamanho).

## 6. Acessibilidade (WCAG 2.1)

O projeto foi desenvolvido com foco total em acessibilidade, atendendo aos critérios do Nível AA:

* **Contraste de Cores:** Todos os temas (Claro, Escuro, Alto Contraste) atendem ao requisito mínimo de 4.5:1.
* **Navegação por Teclado:** Todos os elementos interativos (links, botões, formulários, seletor de tema) são acessíveis e focáveis via tecla `Tab`.
* **Suporte a Leitores de Tela:** Uso correto de tags semânticas, `aria-label` para ícones e `role="alert"` para mensagens de erro.
* **`localStorage`**: A preferência de tema do usuário é salva, respeitando sua escolha em visitas futuras.

## 7. Otimização e Performance

| Recurso | Técnica Aplicada |
| :--- | :--- |
| **CSS** | Minificação (`style.css` -> `style.min.css`) |
| **JavaScript** | Minificação (`main.js` -> `main.min.js`) |
| **Imagens** | Compressão (JPEG/PNG otimizados) |
| **Carregamento** | Atributo `defer` no script JS |

## 8. Controle de Versão

O projeto utilizou uma estratégia de **GitFlow** simplificada:
* `main`: Branch de produção. Contém apenas código estável e otimizado (minificado).
* `develop`: Branch de desenvolvimento. Agrega novas funcionalidades.
* `feature/*`: Branches para novas funcionalidades (ex: `feature/acessibilidade-dark-mode`).
* `release/*`: Branches para preparar uma nova versão de produção (ex: `release/v1.0.0`), onde a minificação é realizada.

O histórico de commits segue o padrão de [Commits Semânticos](https://www.conventionalcommits.org/en/v1.0.0/).

## 9. Como Executar o Projeto

1.  Clone o repositório:
    ```bash
    git clone https://github.com/lp-aquino/projeto-ong
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd projeto-ong
    ```
3.  Abra o arquivo `index.html` em seu navegador de preferência.