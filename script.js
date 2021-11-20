const calcular = document.getElementById('calcular');

function calculo_financas() {
  const nome = document.getElementById('nome').value;

  const valor_aplicado = document.getElementById('valor_aplicado').value;
  const taxa_de_juros = document.getElementById('taxa_de_juros').value;
  const numero_de_parcelas = document.getElementById('numero_de_parcelas').value;

  const resultado = document.getElementById('resultado');


  if ( nome !== '' && valor_aplicado !== '' && taxa_de_juros !== '' && numero_de_parcelas !== '' ) {
    const valor_poupado = ( valor_aplicado * (((1 + taxa_de_juros / 100) ** numero_de_parcelas - 1) / (taxa_de_juros / 100)));

    resultado.textContent = `${nome},Se você aplicar R$ ${valor_aplicado}, à taxa de juros de ${taxa_de_juros}% ao mês, durante ${numero_de_parcelas} meses, acumulará uma poupança de R$ ${valor_poupado}`;
  
  } else {
    resultado.textContent = 'Para o seu valor poupado, preencha todos os campos.';
  }
}

calcular.addEventListener('click', calculo_financas);