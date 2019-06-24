// PLA3full2_Exercici2
// L'usuari introdueix una cadena de lletres i el 
// programa compta el número d'A, B, C...
function comptaLletres(cadena){
	cadena = cadena.toUpperCase();
	var ABECEDARI = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var longitudCadena = cadena.length;
	var longitudABECEDARI = ABECEDARI.length;
	var i = 0;
	var j = 0;
	var comptador = 0;
	resultat = [];
	for (i; i < longitudABECEDARI; i++){
		
		for (j; j <= longitudCadena; j++){
			if (cadena.charAt(j) == ABECEDARI.charAt(i)){
				comptador++;
			}
		}
		
		if (comptador > 0){
			resultat.push(ABECEDARI.charAt(i) + "=" + comptador);
		} else {
			resultat.push(ABECEDARI.charAt(i) + "=" + 0);
		}
		j = 0;
		comptador = 0;
	}
	return resultat;
}