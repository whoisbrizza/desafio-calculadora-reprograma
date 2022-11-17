var inputGanhoPorMes = document.querySelector("#ganho-mes")

var inputHorasPorDia = document.querySelector("#horas-dia")

var spanResposta = document.querySelector("#resposta")

function calcularValorHora() {
   var horasTrabalhadosPorMes = inputHorasPorDia.valueAsNumber * 22
   var valorDaHora = (inputGanhoPorMes.valueAsNumber / horasTrabalhadosPorMes).toFixed(2)

spanResposta.innerHTML = "R$" + Math.ceil(valorDaHora) + ",00"
}

