// PLA3full1_Exercici2
// Donada una cadena alfabètica, el programa compta
// el número de vegades que apareix la lletra definida
// per l'usuari
function comptadorLletra(cadena, lletra){
	lletra = lletra.toUpperCase();
	var longitud = cadena.length;
	var i = 0;
	var resultat = 0;
	for (i; i <= longitud; i++){
		if (cadena.charAt(i) == lletra){
			resultat++;
		}
	}
	resultat = lletra + "=" + resultat;
	return resultat;
}