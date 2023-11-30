function receberSalario()

{
    var numeros=0;
    var soma=0;

    numeros = parseInt(prompt ("Digite a quantidade de numeros que deseja receber!"));
    var numeros2 = numeros;
    
    do
    {   
        var numrecebido = prompt ("Digite o "+numeros+"º numero!")
        soma = parseInt(soma) + parseInt(numrecebido)
        numeros--
    }
	while (numeros>0);
    var media = soma / numeros2;
    alert ("A soma final dos numeros que foram digitados é: " + soma);
    

}