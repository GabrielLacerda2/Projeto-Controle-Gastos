export default function Saldo(lancamentos){
    var saldo = 0;
    lancamentos.forEach((element, index) => {
        if(element.tipo == "receita"){
        saldo += element.valor;
        }else{
            saldo -= element.valor;
        }
   })
    return saldo
}