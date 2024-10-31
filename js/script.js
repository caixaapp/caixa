
                        const inicioDiv = document.getElementById('inicio');
                        const saqueDiv = document.getElementById('saque');
                        const loginDiv = document.getElementById('login');
                        const bonusDiv = document.getElementById('bonus');
                        var audio = document.getElementById("click-money"); // Referência ao áudio
                            


                        // Função para definir um cookie
                        function setCookie(cname, cvalue, exdays) {
                            const d = new Date();
                            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                            const expires = `expires=${d.toUTCString()}`;
                            document.cookie = `${cname}=${cvalue}; ${expires}; path=/`;
                        }

                        // Função para obter o valor de um cookie
                        function getCookie(cname) {
                            const name = `${cname}=`;
                            const decodedCookie = decodeURIComponent(document.cookie);
                            const ca = decodedCookie.split(';');
                            for (let i = 0; i < ca.length; i++) {
                                let c = ca[i];
                                while (c.charAt(0) === ' ') {
                                    c = c.substring(1);
                                }
                                if (c.indexOf(name) === 0) {
                                    return c.substring(name.length, c.length);
                                }
                            }
                            return '';
                        }

                        let valor = parseFloat(getCookie('valor')) || 0.0;
                        const valorSpan = document.getElementById('valor');
                        const valorSpanSaque = document.getElementById('valor-saque');

                        function atualizarValor() {
                            valorSpan.textContent = `R$ ${valor.toFixed(2)}`;
                            valorSpanSaque.textContent = `R$ ${valor.toFixed(2)}`;
                            setCookie('valor', valor.toFixed(2), 365); // Armazena o valor como um cookie válido por 1 ano
                        }

                        atualizarValor(); // Atualiza o valor inicial na caixa de valor

                        // Função para animar o incremento do valor
                        function animarIncremento(valorAtual, valorFinal, duracao) {
                            const diferenca = valorFinal - valorAtual;
                            const passos = 60; // Número de quadros por segundo
                            const incrementoPorPasso = diferenca / passos;
                            const intervalo = duracao / passos;

                            let contador = 0;
                            
                            function animacao() {
                                if (contador < passos) {
                                    valorAtual += incrementoPorPasso;
                                    valorSpan.textContent = `R$ ${valorAtual.toFixed(2)}`;
                                    valorSpanSaque.textContent = `R$ ${valorAtual.toFixed(2)}`;
                                    contador++;
                                    setTimeout(animacao, intervalo);
                                } else {
                                    // Garante que o valor final seja o correto no fim da animação
                                    valor = valorFinal;
                                    atualizarValor();
                                }
                            }

                            animacao();
                        }

                        // Função para aumentar o valor com animação
                        function aumentarValor() {
                            const incremento = [83.00];
                            const indiceAleatorio = Math.floor(Math.random() * incremento.length);
                            const valorIncremento = incremento[indiceAleatorio];

                            const valorFinal = valor + valorIncremento;
                            animarIncremento(valor, valorFinal, 1000); // A duração da animação é 1000ms (1 segundo)
                            verificarValor();
                        }


                        function mostrarPagina(pagina) {
                            inicioDiv.style.display = pagina === 'inicio' ? 'block' : 'none';
                            saqueDiv.style.display = pagina === 'saque' ? 'block' : 'none';
                            loginDiv.style.display = pagina === 'login' ? 'block' : 'none';
                            bonusDiv.style.display = pagina === 'bonus' ? 'block' : 'none';
                        }

                        function trocarDiv(esconderId, mostrarId) {
                            document.getElementById(esconderId).style.display = 'none';
                            document.getElementById(mostrarId).style.display = 'block';
                        }

                        // Atualizar o valor exibido inicialmente
                        atualizarValor();

                        //--------------------------------- Começar ---------------------------------


                        function showPopupComecar() {
                            document.getElementById('comecar').disabled = true;
                            document.getElementById('popupComecar').style.display = 'block';
                        }

                        function closePopupComecar() {
                            document.getElementById('popupComecar').style.display = 'none';
                            document.getElementById('comecar').disabled = true;
                        }

                        function comecar() {
                            var button = document.getElementById("B1");
                            showPopupComecar();
                            // Simulando um atraso de 3 segundos para o showPopup2()
                            setTimeout(function() {
                                closePopupComecar();
                                trocarDiv('comecar', 'ad1');
                            }, 4000); // 3 segundos
                        }


                        //--------------------------------- Ad 1 ---------------------------------


                        function showPopupB1() {
                            document.getElementById('B1').disabled = true;
                            document.getElementById('popupB1').style.display = 'block';
                        }

                        function closePopupB1() {
                            document.getElementById('popupB1').style.display = 'none';
                            document.getElementById('B1').disabled = true;
                        }

                        function verificaCampoVazio1() {
                            var chatId = document.getElementById("chatId1").value;
                    
                            // Se o campo estiver vazio, exiba um alerta
                            if (chatId === "") {
                                alert("Por favor, insira o código gerado antes de enviar.");
                            } else {
                                // Se o campo estiver preenchido, chama a função de carregamento
                                showLoadingB1();
                            }
                        }

                        // Carregando B1
                        function showLoadingB1() {
                            var button = document.getElementById("B1");
                            showPopupB1();
                            audio.play();
                            
                            // Simulando um atraso de 3 segundos para o showPopup2()
                            setTimeout(function() {
                                closePopupB1();
                                aumentarValor();
                                trocarDiv('ad1', 'ad2');
                            }, 4000); // 3 segundos
                        }

                        // Gerar codigo aleatorio

                        document.getElementById("gerarCodigo").addEventListener("click", function() {
                            // Gere um código aleatório de 7 caracteres
                            const codigoAleatorio = generateRandomCode(7);

                            // Exiba o código gerado na página
                            document.getElementById("codigoAleatorio").textContent = codigoAleatorio;

                            // Mostre a seção do código gerado
                            document.getElementById("codigoGerado").style.display = "block";
                        });

                        function generateRandomCode(length) {
                            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                            let codigo = "";
                            for (let i = 0; i < length; i++) {
                                const randomIndex = Math.floor(Math.random() * characters.length);
                                codigo += characters.charAt(randomIndex);
                            }
                            return codigo;
                        }


                        //--------------------------------- Ad 2 ---------------------------------


                        function showPopupB2() {
                            document.getElementById('popupB2').style.display = 'block';
                            document.getElementById('B2').disabled = true;
                        }

                        function closePopupB2() {
                            document.getElementById('popupB2').style.display = 'none';
                            document.getElementById('B2').disabled = true;
                        }

                        function verificaCampoVazio2() {
                            var chatId = document.getElementById("chatId2").value;
                    
                            // Se o campo estiver vazio, exiba um alerta
                            if (chatId === "") {
                                alert("Por favor, insira o código gerado antes de enviar.");
                            } else {
                                // Se o campo estiver preenchido, chama a função de carregamento
                                showLoadingB2();
                            }
                        }

                        // Carregando B2
                        function showLoadingB2() {
                            var button = document.getElementById("B2");
                            showPopupB2();
                            audio.play();
                            
                            // Simulando um atraso de 3 segundos para o showPopup2()
                            setTimeout(function() {
                                closePopupB2();
                                aumentarValor();
                                trocarDiv('ad2', 'ad3');
                            }, 4000); // 3 segundos
                        }

                        // Gerar codigo aleatorio

                        document.getElementById("gerarCodigo2").addEventListener("click", function() {
                            // Gere um código aleatório de 7 caracteres
                            const codigoAleatorio2 = generateRandomCode(7);

                            // Exiba o código gerado na página
                            document.getElementById("codigoAleatorio2").textContent = codigoAleatorio2;

                            // Mostre a seção do código gerado
                            document.getElementById("codigoGerado2").style.display = "block";
                        });

                        function generateRandomCode(length) {
                            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                            let codigo = "";
                            for (let i = 0; i < length; i++) {
                                const randomIndex = Math.floor(Math.random() * characters.length);
                                codigo += characters.charAt(randomIndex);
                            }
                            return codigo;
                        }

                        //--------------------------------- Ad 3 ---------------------------------


                        function showPopupB3() {
                            document.getElementById('popupB3').style.display = 'block';
                            document.getElementById('B3').disabled = true;
                        }

                        function closePopupB3() {
                            document.getElementById('popupB3').style.display = 'none';
                            document.getElementById('B3').disabled = true;
                        }

                        function verificaCampoVazio3() {
                            var chatId = document.getElementById("chatId3").value;
                    
                            // Se o campo estiver vazio, exiba um alerta
                            if (chatId === "") {
                                alert("Por favor, insira o código gerado antes de enviar.");
                            } else {
                                // Se o campo estiver preenchido, chama a função de carregamento
                                showLoadingB3();
                            }
                        }


                        function showLoadingB3() {
                            var button = document.getElementById("B3");
                            showPopupB3();
                            audio.play();

                            setTimeout(function() {
                                closePopupB3();
                                aumentarValor();
                                trocarDiv('ad3', 'ad4');
                            }, 4000);
                        }



                        document.getElementById("gerarCodigo3").addEventListener("click", function() {

                            const codigoAleatorio3 = generateRandomCode(7);

                            document.getElementById("codigoAleatorio3").textContent = codigoAleatorio3;

                            document.getElementById("codigoGerado3").style.display = "block";
                        });

                        function generateRandomCode(length) {
                            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                            let codigo = "";
                            for (let i = 0; i < length; i++) {
                                const randomIndex = Math.floor(Math.random() * characters.length);
                                codigo += characters.charAt(randomIndex);
                            }
                            return codigo;
                        }


                        //--------------------------------- Ad 4 ---------------------------------


                        function showPopupB4() {
                            document.getElementById('popupB4').style.display = 'block';
                            document.getElementById('B4').disabled = true;
                        }

                        function closePopupB4() {
                            document.getElementById('popupB4').style.display = 'none';
                            document.getElementById('B4').disabled = true;
                        }

                        function verificaCampoVazio4() {
                            var chatId = document.getElementById("chatId4").value;
                    
                            // Se o campo estiver vazio, exiba um alerta
                            if (chatId === "") {
                                alert("Por favor, insira o código gerado antes de enviar.");
                            } else {
                                // Se o campo estiver preenchido, chama a função de carregamento
                                showLoadingB4();
                            }
                        }


                        function showLoadingB4() {
                            var button = document.getElementById("B4");
                            showPopupB4();
                            audio.play();

                            setTimeout(function() {
                                closePopupB4();
                                aumentarValor();
                                trocarDiv('ad4', 'ad5');
                            }, 4000);
                        }



                        document.getElementById("gerarCodigo4").addEventListener("click", function() {

                            const codigoAleatorio4 = generateRandomCode(7);

                            document.getElementById("codigoAleatorio4").textContent = codigoAleatorio4;

                            document.getElementById("codigoGerado4").style.display = "block";
                        });

                        function generateRandomCode(length) {
                            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                            let codigo = "";
                            for (let i = 0; i < length; i++) {
                                const randomIndex = Math.floor(Math.random() * characters.length);
                                codigo += characters.charAt(randomIndex);
                            }
                            return codigo;
                        }


                        //--------------------------------- Ad 5 ---------------------------------


                        function showPopupB5() {
                            document.getElementById('popupB5').style.display = 'block';
                            document.getElementById('B5').disabled = true;
                        }

                        function closePopupB5() {
                            document.getElementById('popupB5').style.display = 'none';
                            document.getElementById('B5').disabled = true;
                        }

                        function verificaCampoVazio5() {
                            var chatId = document.getElementById("chatId5").value;
                    
                            // Se o campo estiver vazio, exiba um alerta
                            if (chatId === "") {
                                alert("Por favor, insira o código gerado antes de enviar.");
                            } else {
                                // Se o campo estiver preenchido, chama a função de carregamento
                                showLoadingB5();
                            }
                        }


                        function showLoadingB5() {
                            var button = document.getElementById("B5");
                            showPopupB5();
                            audio.play();

                            setTimeout(function() {
                                closePopupB5();
                                aumentarValor();
                                trocarDiv('ad5', 'ad6');
                            }, 4000);
                        }



                        document.getElementById("gerarCodigo5").addEventListener("click", function() {

                            const codigoAleatorio5 = generateRandomCode(7);

                            document.getElementById("codigoAleatorio5").textContent = codigoAleatorio5;

                            document.getElementById("codigoGerado5").style.display = "block";
                        });

                        function generateRandomCode(length) {
                            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                            let codigo = "";
                            for (let i = 0; i < length; i++) {
                                const randomIndex = Math.floor(Math.random() * characters.length);
                                codigo += characters.charAt(randomIndex);
                            }
                            return codigo;
                        }

                        //--------------------------------- Ad 6 ---------------------------------


                        function showPopupB6() {
                            document.getElementById('popupB6').style.display = 'block';
                            document.getElementById('B6').disabled = true;
                        }

                        function closePopupB6() {
                            document.getElementById('popupB6').style.display = 'none';
                            document.getElementById('B6').disabled = true;
                        }

                        function verificaCampoVazio6() {
                            var chatId = document.getElementById("chatId6").value;
                    
                            // Se o campo estiver vazio, exiba um alerta
                            if (chatId === "") {
                                alert("Por favor, insira o código gerado antes de enviar.");
                            } else {
                                // Se o campo estiver preenchido, chama a função de carregamento
                                showLoadingB6();
                            }
                        }


                        function showLoadingB6() {
                            var button = document.getElementById("B6");
                            showPopupB6();
                            audio.play();

                            setTimeout(function() {
                                closePopupB6();
                                aumentarValor();
                                trocarDiv('ad6', 'ad7');
                            }, 4000);
                        }



                        document.getElementById("gerarCodigo6").addEventListener("click", function() {

                            const codigoAleatorio6 = generateRandomCode(7);

                            document.getElementById("codigoAleatorio6").textContent = codigoAleatorio6;

                            document.getElementById("codigoGerado6").style.display = "block";
                        });

                        function generateRandomCode(length) {
                            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                            let codigo = "";
                            for (let i = 0; i < length; i++) {
                                const randomIndex = Math.floor(Math.random() * characters.length);
                                codigo += characters.charAt(randomIndex);
                            }
                            return codigo;
                        }

                        //--------------------------------- Ad 7 ---------------------------------


                        function showPopupB7() {
                            document.getElementById('popupB7').style.display = 'block';
                            document.getElementById('B7').disabled = true;
                        }

                        function closePopupB7() {
                            document.getElementById('popupB7').style.display = 'none';
                            document.getElementById('B7').disabled = true;
                        }

                        function verificaCampoVazio7() {
                            var chatId = document.getElementById("chatId7").value;
                    
                            // Se o campo estiver vazio, exiba um alerta
                            if (chatId === "") {
                                alert("Por favor, insira o código gerado antes de enviar.");
                            } else {
                                // Se o campo estiver preenchido, chama a função de carregamento
                                showLoadingB7();
                            }
                        }


                        function showLoadingB7() {
                            var button = document.getElementById("B7");
                            showPopupB7();
                            audio.play();

                            setTimeout(function() {
                                closePopupB7();
                                aumentarValor();
                                trocarDiv('ad7', 'ad8');
                            }, 4000);
                        }



                        document.getElementById("gerarCodigo7").addEventListener("click", function() {

                            const codigoAleatorio7 = generateRandomCode(7);

                            document.getElementById("codigoAleatorio7").textContent = codigoAleatorio7;

                            document.getElementById("codigoGerado7").style.display = "block";
                        });

                        function generateRandomCode(length) {
                            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                            let codigo = "";
                            for (let i = 0; i < length; i++) {
                                const randomIndex = Math.floor(Math.random() * characters.length);
                                codigo += characters.charAt(randomIndex);
                            }
                            return codigo;
                        }

                        //--------------------------------- Ad 8 ---------------------------------


                        function showPopupB8() {
                            document.getElementById('popupB8').style.display = 'block';
                            document.getElementById('B8').disabled = true;
                        }

                        function closePopupB8() {
                            document.getElementById('popupB8').style.display = 'none';
                            document.getElementById('B8').disabled = true;
                        }

                        function verificaCampoVazio8() {
                            var chatId = document.getElementById("chatId8").value;
                    
                            // Se o campo estiver vazio, exiba um alerta
                            if (chatId === "") {
                                alert("Por favor, insira o código gerado antes de enviar.");
                            } else {
                                // Se o campo estiver preenchido, chama a função de carregamento
                                showLoadingB8();
                            }
                        }


                        function showLoadingB8() {
                            var button = document.getElementById("B8");
                            showPopupB8();
                            audio.play();

                            setTimeout(function() {
                                closePopupB8();
                                aumentarValor();
                                trocarDiv('ad8', 'ad9');
                            }, 4000);
                        }



                        document.getElementById("gerarCodigo8").addEventListener("click", function() {

                            const codigoAleatorio8 = generateRandomCode(7);

                            document.getElementById("codigoAleatorio8").textContent = codigoAleatorio8;

                            document.getElementById("codigoGerado8").style.display = "block";
                        });

                        function generateRandomCode(length) {
                            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                            let codigo = "";
                            for (let i = 0; i < length; i++) {
                                const randomIndex = Math.floor(Math.random() * characters.length);
                                codigo += characters.charAt(randomIndex);
                            }
                            return codigo;
                        }

                        //--------------------------------- Ad 9 ---------------------------------


                        function showPopupB9() {
                            document.getElementById('popupB9').style.display = 'block';
                            document.getElementById('B9').disabled = true;
                        }

                        function closePopupB9() {
                            document.getElementById('popupB9').style.display = 'none';
                            document.getElementById('B9').disabled = true;
                        }

                        function verificaCampoVazio9() {
                            var chatId = document.getElementById("chatId9").value;
                    
                            // Se o campo estiver vazio, exiba um alerta
                            if (chatId === "") {
                                alert("Por favor, insira o código gerado antes de enviar.");
                            } else {
                                // Se o campo estiver preenchido, chama a função de carregamento
                                showLoadingB9();
                            }
                        }


                        function showLoadingB9() {
                            var button = document.getElementById("B9");
                            showPopupB9();
                            audio.play();

                            setTimeout(function() {
                                closePopupB9();
                                aumentarValor();
                                trocarDiv('ad9', 'ad10');
                            }, 4000);
                        }



                        document.getElementById("gerarCodigo9").addEventListener("click", function() {

                            const codigoAleatorio9 = generateRandomCode(7);

                            document.getElementById("codigoAleatorio9").textContent = codigoAleatorio9;

                            document.getElementById("codigoGerado9").style.display = "block";
                        });

                        function generateRandomCode(length) {
                            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                            let codigo = "";
                            for (let i = 0; i < length; i++) {
                                const randomIndex = Math.floor(Math.random() * characters.length);
                                codigo += characters.charAt(randomIndex);
                            }
                            return codigo;
                        }


                        //--------------------------------- Ad 10 ---------------------------------


                        function showPopupB10() {
                            document.getElementById('popupB10').style.display = 'block';
                            document.getElementById('B10').disabled = true;
                        }

                        function closePopupB10() {
                            document.getElementById('popupB10').style.display = 'none';
                            document.getElementById('B10').disabled = true;
                        }

                        function verificaCampoVazio10() {
                            var chatId = document.getElementById("chatId10").value;
                    
                            // Se o campo estiver vazio, exiba um alerta
                            if (chatId === "") {
                                alert("Por favor, insira o código gerado antes de enviar.");
                            } else {
                                // Se o campo estiver preenchido, chama a função de carregamento
                                showLoadingB10();
                            }
                        }


                        function showLoadingB10() {
                            var button = document.getElementById("B10");
                            showPopupB10();
                            audio.play();

                            setTimeout(function() {
                                closePopupB10();
                                aumentarValor();
                            }, 4000);
                        }



                        document.getElementById("gerarCodigo10").addEventListener("click", function() {

                            const codigoAleatorio10 = generateRandomCode(7);

                            document.getElementById("codigoAleatorio10").textContent = codigoAleatorio10;

                            document.getElementById("codigoGerado10").style.display = "block";
                        });

                        function generateRandomCode(length) {
                            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                            let codigo = "";
                            for (let i = 0; i < length; i++) {
                                const randomIndex = Math.floor(Math.random() * characters.length);
                                codigo += characters.charAt(randomIndex);
                            }
                            return codigo;
                        }


                        let activeButton = null;

                        function toggleButton(buttonNumber) {
                            const buttons = document.querySelectorAll('.square-button');

                            if (activeButton !== null) {
                                buttons[activeButton - 1].classList.remove('active');
                            }

                            if (activeButton === buttonNumber) {
                                activeButton = null;
                            } else {
                                buttons[buttonNumber - 1].classList.add('active');
                                activeButton = buttonNumber;
                            }
                        }










                        // Popup SAQUE

                        function showPopup() {
                            document.getElementById('popup').style.display = 'block';
                        }

                        function closePopup() {
                            document.getElementById('popup').style.display = 'none';
                        }

                        // Popup LIMITE DIÁRIO

                        function showPopupL() {
                            document.getElementById('popupL').style.display = 'block';
                        }

                        function closePopupL() {
                            document.getElementById('popupL').style.display = 'none';
                        }



                        // POPUP Limite diário quando bate X valor
                        function verificarValor() {
                            if (valor >= 737.00 && valor < 840.00) {
                                // Popup para valor >= 1362.60 e < 2725.20
                                showPopupL();
                            } else if (valor >= 1650.00 && valor < 1670.00) {
                                // Popup para valor >= 2725.20 e < 4087.8
                                showPopupL();
                            } else if (valor >= 2480.00) {
                                // Popup para valor >= 4087.8
                                showPopupL();
                            }
                        }


                        function fecharPopupEAgendarReaparecimento() {
                            var popupButtonContainer = document.querySelector(".popup-buttonL-container");
                            popupButtonContainer.style.display = "none"; // Oculta o botão

                            // Define um temporizador para mostrar o botão após 10 segundos
                            setTimeout(function() {
                                popupButtonContainer.style.display = "block";
                            }, 86400000); // 24 horas

                            // Aqui você também deve adicionar a função para fechar o popup
                            closePopupL();
                        }

                        // Chama a função para mostrar o botão após 10 segundos (10000 milissegundos)
                        setTimeout(function() {
                            var botaoContainer = document.querySelector(".popup-buttonL-container");
                            botaoContainer.style.display = "block";
                        }, 86400000); // 24 horas


                        // Script botão login
                        function showLoading() {
                            var button = document.getElementById("prosseguir-button");
                            var audio = document.getElementById("click-sound"); // Referência ao áudio
                            
                            audio.play();
                            
                            button.disabled = true; // Desabilitar o botão enquanto a animação ocorre

                            button.innerHTML = '<span class="loading-spinner"></span> Carregando...';

                            // Simulando um atraso de 3 segundos para a animação
                            setTimeout(function() {
                                // Redirecionar após o atraso
                                mostrarPagina('inicio');
                            }, 2000); // 2 segundos
                        }

                        function formatarValor(input) {
                            // Remove todos os caracteres não numéricos
                            var valor = input.value.replace(/[^0-9]/g, '');

                            // Divide o valor em parte inteira e decimal
                            var parteInteira = valor.slice(0, -2);
                            var centavos = valor.slice(-2);

                            // Reconstroi o valor formatado
                            input.value = parteInteira + '.' + centavos;
                        }

                        function verificarCampos() {
                            var email = document.getElementById("email").value;
                            var emailValido = /\S+@\S+\.\S+/;

                            if (email === "") {
                                alert("Insira seu e-mail para logar!");
                            } else if (!emailValido.test(email)) {
                                alert("Insira um e-mail válido!");
                            } else {
                                // Se o campo estiver preenchido e for um e-mail válido, redireciona para a próxima página
                                showLoading();
                            }
                        }

                    

                    