// PLA3full1_Exercici6
// L'usuari defineix una cadena alfabètica i el programa
// guarda les posicions de totes les lletres A i després
// les mostra
function trobaLesA(cadena){
	cadena = cadena.toUpperCase();
	var longitud = cadena.length;
	var i = 0;
	var resultat = [];
	var ATrobada = false;
	for (i; i <= longitud; i++){
		if (cadena.charAt(i) == "A"){
			resultat.push(i+1);
			ATrobada = true;
		}
	}
	if (ATrobada == true){
		resultat = "S'ha trobat la lletra A a les posicions: " + resultat;
	} else {
		resultat = "No s'ha trobat cap lletra A a la cadena."
	}
	return resultat;
}