document.getElementById("botaoComprar").addEventListener("click", function() {
    // Mostrar a caixa de alerta personalizada
    document.getElementById("alertMessage").textContent = "Item adicionado ao carrinho!";
    document.getElementById("alertContainer").style.display = "flex";

    // Incrementar a contagem de itens no carrinho
    let cartCounter = document.getElementById("cartCounter");
    let itemCount = parseInt(cartCounter.textContent);
    itemCount++;
    cartCounter.textContent = itemCount;

    // Mostrar o contador se estiver oculto
    // if (itemCount > 0) {
    //     cartCounter.style.display = "inline";
    // }
});

document.getElementById("closeAlertButton").addEventListener("click", function() {
    // Fechar a caixa de alerta personalizada
    document.getElementById("alertContainer").style.display = "none";
});


// Mensagem de itens do Carinho

function showCartMessage() {
    var cartCounter = document.getElementById("cartCounter").innerText;
    var message = "Seu carrinho tem " + cartCounter + " item(s).";
    alert(message);
}
