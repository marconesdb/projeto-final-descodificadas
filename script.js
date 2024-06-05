
// Script para caixa de alerta personalizada

        document.getElementById("botaoComprar").addEventListener("click", function() {
            // Mostrar a caixa de alerta personalizada
            document.getElementById("alertMessage").textContent = "Item adicionado ao carrinho!";
            document.getElementById("alertContainer").style.display = "flex";
        });

        document.getElementById("closeAlertButton").addEventListener("click", function() {
            // Fechar a caixa de alerta personalizada
            document.getElementById("alertContainer").style.display = "none";
        });
    
// Fim do Script para caixa de alerta personalizada