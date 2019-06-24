// PLA3full2_Exercici5
// El programa crea un vector de nxn elements aleatoris
// (2<n<=100), i calcula la suma de la diagonal de 
// la matriu.
function sumaDiagonal(n){
	var vector = [];
	var i = 0;
	var j = 0;
	var suma = 0;
	var resultat = "";
	n = parseInt(n);
	for (i; i < (n * n); i++){
		vector.push(Math.floor(Math.random() * 9) + 0);
	}
	for (i = 0; i < n; i++){
		suma = suma + parseInt(vector[j]);
		j = j + (n + 1);
	}
	resultat = "La suma de la diagonal es: " + suma;
	return resultat;
}