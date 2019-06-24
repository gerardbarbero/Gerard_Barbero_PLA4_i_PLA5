// PLA3full1_Exercici4
// L'usuari defineix una cadena alfabètica, i el
// programa ens diu la posició de la primera lletra
// A dins de la cadena
function trobaA(cadena){
	cadena = cadena.toUpperCase();
	var longitud = cadena.length;
	var i = 0;
	var resultat = 0;
	var trobada = false;
	for (i; i <= longitud; i++){
		if (cadena.charAt(i) == "A"){
			trobada = true; 
			i++; {break;}
		}
	}
	if (trobada == true){
		resultat = "La lletra A surt a la posicio: " + i;
	} else {
		resultat = "No s'ha trobat la lletra A a la cadena.";
	}
	return resultat;
}