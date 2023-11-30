function receberSalario()

{
    var idade1=0;
    var idade2=0;

    var maior=0;

    nome1 = prompt ("Digite qual é o nome da primeira pessoa!")
    idade1 =  parseInt(prompt ("Digite a idade da primeira pessoa!"));
    nome2 = prompt ("Digite qual é o nome da segunda pessoa!")
    idade1 = parseInt(prompt ("Digite a idade da segunda pessoa!"));

    if (idade1>idade2){
        maior = nome1;
    }else{
        maior = nome2;
    }

    alert (maior +" você é o maior de idade");
}