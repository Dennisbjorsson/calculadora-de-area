
function CalcularArea() {
    const largura = document.getElementById('largura').value;
    const comprimento = document.getElementById('comprimento').value;
    

    const valorlargura = parseFloat(largura);
    const valorComprimento = parseFloat(comprimento);

    
    const area = valorlargura * valorComprimento;


    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tamanho da Área: <strong>${area.toFixed(2).replace('.', ',')} m²</strong>`;
    resultado.style.display = 'inline-block';
    
   
}

function calcularQuatroLados() {

  const frente = document.getElementById('frente').value;
  const fundo = document.getElementById('fundo').value;
  const lateralDireita = document.getElementById('lateralDireita').value;
  const lateralEsquerda = document.getElementById('lateralEsquerda').value;
  


    
    const valorFrente = parseFloat(frente);
    const valorFundo = parseFloat(fundo);
    const valorLateralDireita = parseFloat(lateralDireita);
    const valorLateralEsquerda = parseFloat(lateralEsquerda);
    
    const mediaFrenteFundo = (valorFrente + valorFundo) / 2;

    const mediaLaterais = (valorLateralDireita + valorLateralEsquerda) / 2;

    const areaQuatroLados = mediaFrenteFundo * mediaLaterais;


    

    

    const resultado = document.getElementById('resultadoQuatroLados');
    resultado.innerHTML = `Tamanho da Área: <strong>${areaQuatroLados.toFixed(2).replace('.', ',')} m²</strong>`;
    resultado.style.display = 'inline-block';
}