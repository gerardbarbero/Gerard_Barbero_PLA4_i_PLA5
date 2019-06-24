// PLA3full2_Exercici1
// L'usuari introdueix una cadena numèrica i un valor i el programa 
// compta els números més grans que el valor introduït.
function comptaNumerosMesGrans(cadena, valor){
	var longitud = cadena.length;
	var i = 0;
	var resultat = 0;
	var trobat = false;
	for (i; i <= longitud; i++){
		if (cadena.charAt(i) > valor){
			resultat++;
			trobat = true;
		}
	}
	if (trobat == false){
		resultat = "No s'ha trobat cap numero mes gran que " + valor + ".";
	} else {
		resultat = "S'han trobat " + resultat + " numeros mes grans que " + valor + ".";
	}
	return resultat;
}