// PLA3full1_Exercici8
// Modificació de l'exercici 6 per a que el programa
// detecti si hi ha algun caràcter numéric a la
// cadena, ens mostri un missatge d'error i ens 
// digui quin caràcter ha trobat i a quina posició
function trobaLesAMillorada(cadena){
	cadena = cadena.toUpperCase();
	var longitud = cadena.length;
	var i = 0;
	var j = 0;
	var resultatNumeros = [];
	var error = false;
	var resultatLletraA = [];
	var ATrobada = false;
	var resultat = "";
	for (i; i < longitud; i++){
		for (j; j <= 9; j++){
			if (cadena.charAt(i) == j){
				resultatNumeros.push(cadena.charAt(i) + "(" + (i + 1) + ")")
				error = true;
			}
		}
		j = 0;
	}
	i = 0;
	for (i; i <= longitud; i++){
		if (cadena.charAt(i) == "A"){
			resultatLletraA.push(i + 1);
			ATrobada = true;
		}
	}
	if ((error == true) && (ATrobada == false)){
		resultat = "ERROR. S'han trobat aquests caracters numerics (caracter(posicio)): " + resultatNumeros + " | " + "No s'ha trobat cap lletra A a la cadena.";
	}
	
	if ((error == true) && (ATrobada == true)){
		resultat = "ERROR. S'han trobat aquests caracters numerics (caracter(posicio)): " + resultatNumeros + " | " + "S'ha trobat la lletra A a les posicions: " + resultatLletraA;
	}
	if ((error == false) && (ATrobada == false)){
		resultat = "No s'ha trobat cap lletra A a la cadena.";
	}
	if ((error == false) && (ATrobada == true)){
		resultat = "S'ha trobat la lletra A a les posicions: " + resultatLletraA;
	}
	return resultat;
}