function validarFaculdade() {
	var verificar = prompt("Digite uma opção");

	numero = [9, 6, 4, 9, 7]

	 // 1, 0, 0, 1, 1
	switch (verificar)
	{
		case "1":
			alert("Essa faculdade ainda não está no nível da FIAP.");
			break;
		case "2":
			alert("Essa faculdade tem que evoluir muito para chegar no nível da FIAP.");
			break;
		case "3":
			alert("Essa é a melhor faculdade, essa é a FIAP.");
			break;
		default:
			alert("A faculdade digitada não está cadastrada.");
			break;
	}
}

