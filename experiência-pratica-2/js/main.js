// Aguarda o DOM carregar
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO MENU HAMBÚRGUER (Requisito da tarefa) ---
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', () => {
            // Adiciona/remove a classe 'is-active' no menu
            navbarMenu.classList.toggle('is-active');
            
            // Acessibilidade: Atualiza o aria-expanded
            const isActive = navbarMenu.classList.contains('is-active');
            navbarToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });
    }
    
    // Lógica para clique em dropdowns no mobile
    document.querySelectorAll('.nav-item-dropdown > a').forEach(item => {
        item.addEventListener('click', (e) => {
            // Previne o link de navegar se for mobile (para abrir o submenu)
            if (window.innerWidth < 768) {
                // Só previne se tiver um submenu
                if (item.nextElementSibling && item.nextElementSibling.classList.contains('dropdown-menu')) {
                    e.preventDefault();
                    item.parentElement.classList.toggle('is-active');
                }
            }
        });
    });


    // --- SUAS MÁSCARAS DE FORMULÁRIO (de cadastro.html) ---
    const cpfInput = document.getElementById('cpf');
    const telInput = document.getElementById('telefone');
    const cepInput = document.getElementById('cep');

    if (cpfInput) {
        cpfInput.addEventListener('input', mascaraCPF);
    }
    if (telInput) {
        telInput.addEventListener('input', mascaraTelefone);
    }
    if (cepInput) {
        cepInput.addEventListener('input', mascaraCEP);
    }
});

/* Funções de máscara (movidas para cá) */

function mascaraCPF(e) {
    let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto após o 3º dígito
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca ponto após o 6º dígito
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca hífen após o 9º dígito
    e.target.value = valor.slice(0, 14); // Limita ao tamanho máximo do CPF
}

function mascaraTelefone(e) {
    let valor = e.target.value.replace(/\D/g, '');
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2'); // Coloca parênteses nos dois primeiros dígitos
    valor = valor.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen após o 5º dígito (para celular)
    e.target.value = valor.slice(0, 15); // Limita ao tamanho (00) 00000-0000
}

function mascaraCEP(e) {
    let valor = e.target.value.replace(/\D/g, '');
    valor = valor.replace(/^(\d{5})(\d)/, '$1-$2'); // Coloca hífen após o 5º dígito
    e.target.value = valor.slice(0, 9); // Limita ao tamanho 00000-000
}