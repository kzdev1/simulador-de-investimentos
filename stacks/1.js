const calcular = document.getElementById("calcular")

calcular.addEventListener("click", function(){
    
    let valor = document.getElementById("valor").value
    let aporte = document.getElementById("aporte").value
    let taxa = document.getElementById("taxa").value / 100
    let periodo = document.getElementById("periodo").value

    const montanteInicial = valor * Math.pow((1 + taxa), periodo)
    const taxaMensal = taxa / 12
    const meses = periodo * 12
    const montanteAportes = aporte * (((Math.pow((1 + taxaMensal), meses)) - 1) / taxaMensal)
    const total = montanteInicial + montanteAportes

    const investimento = (valor * 1) + (aporte * meses)
    const rendimento = ((total - investimento) / investimento) * 100

    document.getElementById("patrimoniofinal").textContent = "R$" + total.toFixed(2)
    document.getElementById("totalinvestido").textContent = "R$" + investimento.toFixed(2)
    document.getElementById("rendimento").textContent = "+" + rendimento.toFixed(2) + "%"
    

    
})
    
