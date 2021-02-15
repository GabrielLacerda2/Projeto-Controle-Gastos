export default function Receita(lancamentos){
    var saldo = 0;
    lancamentos.forEach((element, index) => {
        if(element.tipo == "receita")
        saldo += element.valor;
   })
    return saldo
}