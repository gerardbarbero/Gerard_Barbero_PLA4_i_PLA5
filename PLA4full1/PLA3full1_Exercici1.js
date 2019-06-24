// PLA3full1_Exercici1
// Donada una cadena alfabètica, el programa compta
// el número de vegades que apareix la lletra A.
function comptadorA(cadena){
	var longitud = cadena.length;
	var i = 0;
	var resultat = 0;
	for (i; i <= longitud; i++){
		if (cadena.charAt(i) == "A"){
			resultat++;
		}
	}
	resultat = "A=" + resultat;
	return resultat;
}