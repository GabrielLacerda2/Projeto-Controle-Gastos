import { useState } from "react";
import {format} from "date-fns";

function Lista(props){
    const [listRender,setListRender] = useState([]);
    const render = [];

    
    if(props.option == "Todos"){
        props.lista.map(item =>{
            render.push(item)
        })
    }else{
        props.lista.map((item)=>{
        if(item[0].categoria === props.option){
            render.push(item);
        }
    })
    }

    
    const formatDate = (data) =>{
        const dia = data.substr(8,2)
        const mes = data.substr(5,2)-1
        const ano = data.substr(0,4)
        const date = new Date(ano,mes,dia)
        const dataFormatada = format(date,'dd/MM/yyyy')
        return dataFormatada
    }

    return(
        <ul>
            {render.map((item,key)=> (
                key%2 == 0?
                <li key={key} className="list-actions">
                    <span>R$ {parseFloat(item[0].valor).toFixed(2).replace(".",",")}</span> 
                    <span>{item[0].descricao}</span>
                    <span>{item[0].data != null ? formatDate(item[0].data):""}</span>
                </li>
            : <li key={key} className="list-actions1">
            <span>R$ {parseFloat(item[0].valor).toFixed(2).replace(".",",")}</span> 
            <span>{item[0].descricao}</span>
            <span>{item[0].data != null ? formatDate(item[0].data):""}</span>
        </li>))}
        </ul>
    );
}

export default Lista;