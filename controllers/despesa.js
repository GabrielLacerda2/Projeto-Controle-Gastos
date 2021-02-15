export default function Despesa(lancamentos){
    var saldo = 0;
    lancamentos.forEach((element, index) => {
        if(element.tipo == "despesa")
        saldo += element.valor;
   })
    return saldo
}