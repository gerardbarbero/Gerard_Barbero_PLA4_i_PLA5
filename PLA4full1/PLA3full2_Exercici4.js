// PLA3full2_Exercici4
// Repetició de l'exercici 3 utilitzant 1 sol vector
// de 25 elements en comptes de 5 vectors de 5 elements.
function sumaDiagonal(){
	var vector = [];
	var i = 0;
	var j = 0;
	var suma = 0;
	var resultat = "";
	for (i; i < 25; i++){
		vector.push(Math.floor(Math.random() * 9) + 0);
	}
	for (i = 0; i < 5; i++){
		suma = suma + parseInt(vector[j]);
		j = j + 6;
	}
	resultat = "La suma de la diagonal es: " + suma;
	return resultat;
}