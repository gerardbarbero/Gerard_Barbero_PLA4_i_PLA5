// PLA3full1_Exercici5
// L'usuari defineix una cadena alfabètica, i el
// programa ens diu la posició de la primera lletra
// definida també per l'usuari
function trobaLletra(cadena, lletra){
	cadena = cadena.toUpperCase();
	lletra = lletra.toUpperCase();
	var longitud = cadena.length;
	var i = 0;
	var resultat = 0;
	var trobada = false;
	for (i; i <= longitud; i++){
		if (cadena.charAt(i) == lletra){
			trobada = true; 
			i++; {break;}
		}
	}
	if (trobada == true){
		resultat = "La lletra " + lletra + " surt a la posicio: " + i;
	} else {
		resultat = "No s'ha trobat la lletra " + lletra + " a la cadena.";
	}
	return resultat;
}