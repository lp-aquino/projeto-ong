/**
 * ARQUIVO JAVASCRIPT MODULAR - ONG IMPACTO (ENTREGA III)
 *
 * Organizado por funcionalidade:
 * 1. Lógica do Menu Mobile (Header)
 * 2. Roteador SPA e Sistema de Templates
 * 3. Validação de Formulário (Requisito Específico)
 * 4. Máscaras de Formulário (Auxiliar)
 */

// Executa o script principal quando o DOM estiver totalmente carregado
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÓGICA DO MENU MOBILE (HEADER) ---
    // Esta lógica funciona imediatamente, pois o header é fixo.
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', () => {
            navbarMenu.classList.toggle('is-active');
            const isActive = navbarMenu.classList.contains('is-active');
            navbarToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });
    }

    // Lógica para dropdowns no mobile
    document.querySelectorAll('.nav-item-dropdown > a').forEach(item => {
        item.addEventListener('click', (e) => {
            if (window.innerWidth < 768) {
                if (item.nextElementSibling && item.nextElementSibling.classList.contains('dropdown-menu')) {
                    e.preventDefault();
                    item.parentElement.classList.toggle('is-active');
                }
            }
        });
    });

    // --- 2. ROTEADOR SPA E SISTEMA DE TEMPLATES ---
    // (Requisitos: SPA Básico e Sistema de Templates)
    
    const appContent = document.getElementById('app-content');
    const routes = {
        '/': 'template-home',
        '/projetos': 'template-projetos',
        '/cadastro': 'template-cadastro'
    };

    /**
     * Carrega o conteúdo da página com base na hash da URL
     */
    function loadContent() {
        // Pega a hash (ex: #/projetos) e remove o '#'
        // Garante que o padrão seja '/' (home) se não houver hash
        const hash = location.hash.substring(1) || '/'; 
        
        // Encontra o ID da template no objeto 'routes'
        const templateId = routes[hash] || routes['/']; // 'template-home' como fallback
        
        // Pega o elemento template
        const template = document.getElementById(templateId);

        if (template) {
            // Clona o conteúdo do template
            const clone = template.content.cloneNode(true);
            
            // Limpa o conteúdo atual e injeta o novo
            appContent.innerHTML = '';
            appContent.appendChild(clone);
            
            // ATIVAÇÃO PÓS-CARGA:
            // Se a página de cadastro foi carregada, ativa os scripts dela
            if (hash === '/cadastro') {
                initCadastroPage();
            }
        } else {
            appContent.innerHTML = '<h2>Erro 404: Página não encontrada</h2>';
        }
    }

    // "Escuta" mudanças na hash (cliques nos links do menu)
    window.addEventListener('hashchange', loadContent);
    
    // Carrega o conteúdo correto na primeira visita à página
    loadContent();


    // --- 3. VALIDAÇÃO DE FORMULÁRIO (REQUISITO OBRIGATÓRIO) ---
    // (Sistema de verificação de consistência de dados)
    
    /**
     * Esta função é chamada DEPOIS que a template de cadastro é carregada.
     */
    function initCadastroPage() {
        const form = document.getElementById('form-cadastro');
        if (!form) return;

        // Anexa as máscaras aos inputs corretos
        form.querySelector('#cpf')?.addEventListener('input', mascaraCPF);
        form.querySelector('#telefone')?.addEventListener('input', mascaraTelefone);
        form.querySelector('#cep')?.addEventListener('input', mascaraCEP);

        // Anexa o "escutador" de submit do formulário
        form.addEventListener('submit', (event) => {
            // Previne o envio padrão para fazermos a validação JS
            event.preventDefault(); 
            
            const isFormValid = validateForm(form);
            
            if (isFormValid) {
                // Se tudo estiver OK, exibe um sucesso e (opcionalmente) envia
                alert('Cadastro enviado com sucesso! (simulação)');
                // form.submit(); // Descomente para enviar de verdade
            } else {
                // Se houver erros, avisa o usuário
                alert('Por favor, corrija os campos destacados em vermelho.');
            }
        });
    }

    /**
     * Valida todos os campos de um formulário.
     * @param {HTMLFormElement} form - O formulário a ser validado
     * @returns {boolean} - True se o formulário for válido, False caso contrário
     */
    function validateForm(form) {
        let isValid = true;
        
        // Limpa todos os erros antigos antes de validar novamente
        clearAllErrors(form);

        const fieldsToValidate = form.querySelectorAll('input[required], select