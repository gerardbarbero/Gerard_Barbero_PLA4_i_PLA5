// PLA3full2_Exercici3
// El programa genera 5 arrays amb números aleatoris
// de 5 elements i retorna la suma de la diagonal de
// la "matriu" de 5x5.
function sumaDiagonal(){
	var fila1 = [];
	var fila2 = [];
	var fila3 = [];
	var fila4 = [];
	var fila5 = [];
	var i = 0;
	var suma = 0;
	var resultat = "";
	for (i; i < 5; i++){
		fila1.push(Math.floor(Math.random() * 9) + 0);
		fila2.push(Math.floor(Math.random() * 9) + 0);
		fila3.push(Math.floor(Math.random() * 9) + 0);
		fila4.push(Math.floor(Math.random() * 9) + 0);
		fila5.push(Math.floor(Math.random() * 9) + 0);
	}
	suma = parseInt(fila1[0]) + parseInt(fila2[1]) + parseInt(fila3[2]) + parseInt(fila4[3]) + parseInt(fila5[4]);
	resultat = "La suma de la diagonal es: " + suma;
	return resultat;
}
