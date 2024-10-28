function inicializarMovimentoBotaoNao() {
    const botaoNao = document.querySelectorAll("button")[1];

    document.addEventListener("mousemove", (event) => {
        const posicaoMouseX = event.clientX;
        const posicaoMouseY = event.clientY;

        botaoNao.addEventListener("mouseover", () => {
            const maxWidth = window.innerWidth - botaoNao.offsetWidth;
            const maxHeight = window.innerHeight - botaoNao.offsetHeight;

            let novaPosicaoX;
            let novaPosicaoY;

            do {
                novaPosicaoX = Math.random() * maxWidth;
                novaPosicaoY = Math.random() * maxHeight;
            } while (
                Math.abs(novaPosicaoX - posicaoMouseX) < 100 && 
                Math.abs(novaPosicaoY - posicaoMouseY) < 100
            );

            botaoNao.style.position = "absolute";
            botaoNao.style.left = `${novaPosicaoX}px`;
            botaoNao.style.top = `${novaPosicaoY}px`;
        });
    });
}

function resposta(opcao) {
    const mensagem = document.getElementById("mensagem");
    const loveSound = document.getElementById("loveSound");
    const coracaoContainer = document.getElementById("coracao-container");
    const ditto = document.getElementById("ditto");
    const botaoNao = document.querySelectorAll("button")[1];

    if (opcao === 'sim') {
        // Toca a música
        loveSound.play();
        // Exibe e anima o coração
        coracaoContainer.style.display = "block";

        // Aguarda o fim da animação e da música para abrir o link
        setTimeout(() => {
            window.open("https://wa.me/5563991036533?text=Oiie.%20Que%20horas%20vc%20me%20pega?", "_self");
            coracaoContainer.style.display = "none";
            //location.reload(); // Reinicia a página
        }, 5000); // 5 segundos para a animação
        mensagem.textContent = ""; // Limpa a mensagem

    } else {
        // (O restante do código para a opção "não" permanece inalterado)

        const rect = botaoNao.getBoundingClientRect();

        const dittoWidth = 100; // Largura do Ditto
        const dittoHeight = 100; // Altura do Ditto
        
        ditto.style.left = `${rect.left + (rect.width / 2) - (dittoWidth / 2)}px`;
        ditto.style.top = `${rect.top + (rect.height / 2) - (dittoHeight / 2)}px`;
        ditto.style.display = "block"; // Mostra o Ditto

        // Inicia a animação
        ditto.classList.add("animar");

        setTimeout(() => {
            botaoNao.textContent = "Sim"; 
            botaoNao.style.backgroundColor = "green"; // Muda a cor para verde
            botaoNao.classList.add("transformar"); // Adiciona a classe de transformação ao botão
        }, 1000); // 1 segundo de delay

        setTimeout(() => {
            ditto.style.display = "none"; // Oculta o Ditto após 2 segundos
            botaoNao.classList.remove("transformar"); // Remove a transformação do botão

            setTimeout(() => {
                loveSound.play();
                coracaoContainer.style.display = "block";

                setTimeout(() => {
                    window.open("https://wa.me/5563991036533?text=Oiie.%20Que%20horas%20vc%20me%20pega?", "_self");
                    coracaoContainer.style.display = "none"; // Oculta o coração após a animação
                    //location.reload(); // Reinicia a página
                }, 5000); // 5 segundos para a animação
            }, 0); // 1 segundo após o fim da animação do Ditto
        }, 3000); // 3 segundos para mostrar o Ditto
    }
}

// Chama a função para inicializar o movimento do botão "Não"
inicializarMovimentoBotaoNao();
