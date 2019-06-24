// PLA3full2_Exercici6
// El programa crea un vector de nxn elements aleatoris
// (2<n<=100), i calcula quants elements per sobre de
// la diagonal són iguals a 0 i quants majors que 0.
function upperDiagonal(n){
	var vector = [];
	var i = 0;
	var j = 1;
	var iguals0 = 0;
	var majors0 = 0;
	var resultat = "";
	n = parseInt(n);
	for (i; i < (n * n); i++){
		vector.push(Math.floor(Math.random() * 9) + 0);
	}
	i = 1;
	for (i; i < ((n * n) - n); i++){
		if ((parseInt(vector[i])) == 0){
			iguals0++;
		} else {
			majors0++;
		}
		if (i == (j * n)){
			i = i + j + 1;
			j++;
		}
	}
	resultat = "Per sobre de la diagonal hi han " + iguals0 + " elements iguals a 0 i " + majors0 + " elements majors que 0."
	return resultat;
}