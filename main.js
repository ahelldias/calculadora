const butao = document.querySelectorAll('button');
const screen = document.getElementById('tela');
let atual = '';

butao.forEach(button => {
    button.addEventListener('click', () => {
        const valor = button.textContent;
        
        if (valor == '='){
        screen.value = eval(atual);
        atual = ''; 

    } else if (valor == 'del') {
        screen.value = '';

    } else {

        atual += valor; 
        screen.value = atual;
    }

    });
});

    