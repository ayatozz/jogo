// Seletor para o link "Iniciar Jogo" e para o menu
const iniciarJogo = document.getElementById('iniciar');
const caixaFala = document.getElementById('caixa-fala');
const textoFala = document.getElementById('texto-fala');
const menu = document.querySelector('.menu');  // Seleciona o menu

// Função para exibir o texto com efeito de digitação
function escreverTexto(texto, elemento, callback) {
    let index = 0;
    elemento.textContent = '';  // Limpa o conteúdo da caixa de fala
    caixaFala.style.display = 'block';  // Exibe a caixa de fala

    // Função para adicionar uma letra de cada vez
    const intervalo = setInterval(() => {
        elemento.textContent += texto[index];
        index++;
        if (index === texto.length) {
            clearInterval(intervalo);  // Para o intervalo quando o texto estiver completo
            if (callback) callback();  // Chama a função de callback quando o texto estiver completo
        }
    }, 50);  // 50ms de intervalo entre cada letra
}

// Função para esconder o menu e começar o jogo
function iniciarJogoFunc() {
    menu.style.display = 'none';  // Esconde o menu
    escreverTexto("Você está dormindo tranquilamente, no segundo andar de sua casa, e escuta a porta de trás abrindo.", textoFala, () => {
        exibirOpcoes();
    });
}

// Função para exibir as opções de escolha
function exibirOpcoes() {
    const caixaEscolha = document.getElementById('caixa-escolha');
    caixaEscolha.style.display = 'block';  // Exibe a caixa de escolhas

    const opcao1 = document.getElementById('opcao-1');
    const opcao2 = document.getElementById('opcao-2');

    opcao1.textContent = "Continuar dormindo";
    opcao2.textContent = "Investigar o barulho";

    opcao1.onclick = () => {
        continuarDormindo();
    };

    opcao2.onclick = () => {
        investigar();
    };
}

// Função para continuar dormindo
function continuarDormindo() {
    caixaFala.style.display = 'none';
    escreverTexto("Você foi pego enquanto dormia! FIM DE JOGO.", textoFala, () => {
        fimDeJogo("Você perdeu! Uma criatura misteriosa o pegou.");
    });
}

// Função para investigar o barulho
function investigar() {
    caixaFala.style.display = 'none';
    escreverTexto("Você se levanta e começa a investigar. No corredor, você vê uma sombra estranha.", textoFala, () => {
        exibirOpcoesInvestigacao();
    });
}

// Função para exibir opções após investigar
function exibirOpcoesInvestigacao() {
    const caixaEscolha = document.getElementById('caixa-escolha');
    caixaEscolha.style.display = 'block';  // Exibe a caixa de escolhas

    const opcao1 = document.getElementById('opcao-1');
    const opcao2 = document.getElementById('opcao-2');

    opcao1.textContent = "Aproximar-se da sombra";
    opcao2.textContent = "Voltar para o quarto e se esconder";

    opcao1.onclick = () => {
        aproximarSombra();
    };

    opcao2.onclick = () => {
        esconderNoQuarto();
    };
}

// Função para aproximar-se da sombra
function aproximarSombra() {
    caixaFala.style.display = 'none';
    escreverTexto("Você se aproxima da sombra e é um peru gigante que diz: gulu gulu: meu pau no seu cu. A figura avança em sua direção!", textoFala, () => {
        escreverTexto("Você tenta fugir, mas é pego. FIM DE JOGO.", textoFala, () => {
            fimDeJogo("Você perdeu! A figura era nath, o peru.");
        });
    });
}

// Função para voltar para o quarto e se esconder
function esconderNoQuarto() {
    caixaFala.style.display = 'none';
    escreverTexto("Você corre de volta para o quarto e se esconde no armário.", textoFala, () => {
        exibirOpcoesEsconderijo();
    });
}

// Função para exibir opções ao se esconder
function exibirOpcoesEsconderijo() {
    const caixaEscolha = document.getElementById('caixa-escolha');
    caixaEscolha.style.display = 'block';  // Exibe a caixa de escolhas

    const opcao1 = document.getElementById('opcao-1');
    const opcao2 = document.getElementById('opcao-2');

    opcao1.textContent = "Esperar até o amanhecer";
    opcao2.textContent = "Sair furtivamente e tentar escapar";

    opcao1.onclick = () => {
        esperarAmanhecer();
    };

    opcao2.onclick = () => {
        sairFurtivamente();
    };
}

// Função para esperar até o amanhecer
function esperarAmanhecer() {
    caixaFala.style.display = 'none';
    escreverTexto("Você espera até o amanhecer, mas a figura volta e lhe pega enquanto você dormia. FIM DE JOGO.", textoFala, () => {
        fimDeJogo("Você perdeu! A criatura encontrou você.");
    });
}

// Função para sair furtivamente e tentar escapar
function sairFurtivamente() {
    caixaFala.style.display = 'none';
    escreverTexto("Você sai furtivamente e consegue escapar da casa! Mas você se perde na floresta.", textoFala, () => {
        exibirOpcoesFloresta();
    });
}

// Função para exibir opções na floresta
function exibirOpcoesFloresta() {
    const caixaEscolha = document.getElementById('caixa-escolha');
    caixaEscolha.style.display = 'block';  // Exibe a caixa de escolhas

    const opcao1 = document.getElementById('opcao-1');
    const opcao2 = document.getElementById('opcao-2');

    opcao1.textContent = "Seguir pela trilha da floresta";
    opcao2.textContent = "Ficar parado e esperar ajuda";

    opcao1.onclick = () => {
        trilhaFloresta();
    };

    opcao2.onclick = () => {
        esperarAjuda();
    };
}

// Função para seguir pela trilha da floresta
function trilhaFloresta() {
    caixaFala.style.display = 'none';
    escreverTexto("Você segue pela trilha e encontra um abrigo. joga mt slk!", textoFala, () => {
        fimDeJogo("Você venceu! Você escapou e se abrigou na floresta.");
    });
}

// Função para esperar ajuda na floresta
function esperarAjuda() {
    caixaFala.style.display = 'none';
    escreverTexto("Você espera por horas, mas ninguém aparece. A criatura te encontra, ela se aproxima atras de você, sem que perceba, voce escuta: gulu gulu?. FIM DE JOGO.", textoFala, () => {
        fimDeJogo("Você perdeu! Ninguém veio te ajudar.");
    });
}

// Função para mostrar o fim do jogo
function fimDeJogo(mensagem) {
    const caixaEscolha = document.getElementById('caixa-escolha');
    caixaEscolha.style.display = 'none';
    escreverTexto(mensagem, textoFala, () => {
        setTimeout(() => {
            menu.style.display = 'block';  // Volta ao menu principal
        }, 2000);  // Espera 2 segundos antes de voltar ao menu
    });
}

// Evento de clique no link "Iniciar Jogo"
iniciarJogo.addEventListener('click', function(event) {
    event.preventDefault();  // Impede o comportamento padrão do link
    iniciarJogoFunc();  // Chama a função para iniciar o jogo
});
