// PLA3full1_Exercici7
// L'usuari defineix una cadena numèrica i el programa 
// compta les vegades que cada número apareix i ho guarda 
// en una llista. La 1a posició guarda el número de zeros, 
// la 2a el número d'uns, i així fins la posició 10a
function comptaNumeros(cadena){
	var longitud = cadena.length;
	var i = 0;
	var numero = 0;
	var vegades = 0;
	var resultat = [];
	for (numero; numero <= 9; numero++){
		for (i; i < longitud; i++){
			if (cadena.charAt(i) == numero){
				vegades++;
			}
		}
		i = 0;
		resultat.push(vegades);
		vegades = 0;
	}
	return resultat;
}