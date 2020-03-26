var cores = [
	'#ADFF2F', // amarelo
	'#0000FF', // azul
	'#006400', // verde
	'#B22222' // vermelho
];

function change(aqui) {
	var index = Math.round(Math.random() * (cores.length-1));
    document.getElementById('cor-escolha').style.backgroundColor = cores[index];
    return cores;
    console.log(aqui.value);
}
function changeBack() {
	document.getElementById('cor-escolha').style.backgroundColor = 'black';
}
var resposta= document.getElementById('resp');

function DaResposta(elemento) {
	if(elemento.value === cores) {
		document.getElementById('resp').innerHTML = 'Você acertou ;)';
	}else {
		document.getElementById('resp').innerHTML = 'Você errou :(';
	}
	//console.log(elemento.value);
	//document.getElementById('resp').innerHTML = elemento.value;
}