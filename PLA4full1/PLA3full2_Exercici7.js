// PLA3full2_Exercici7
// El programa crea un vector de nxn elements aleatoris
// (2<n<=100), i calcula la mitjana aritmètica de la
// suma dels elements de la primera columna.
function mitjanaAritmetica(n){
	var vector = [];
	var i = 0;
	var suma = 0;
	var resultat = "".
	n = parseInt(n);
	for (i; i < (n * n); i++){
		vector.push(Math.floor(Math.random() * 9) + 0);
	}
	i = 0;
	for (i; i <= ((n * n) - n);){
		suma = suma + (parseInt(vector[i]));
		i = i + parseInt(n);
		}
	resultat = Math.round(suma / n);
	resultat = "Mitjana aritmetica de la suma dels elements de la primera columna=" + resultat;
	return resultat;
}