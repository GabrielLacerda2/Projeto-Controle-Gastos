import { useState } from "react";

function Lista(props){
    const [listRender,setListRender] = useState([]);
    const render = [];
    console.log(props.option)
    props.lista.map((item)=>{
        if(item[0].categoria === props.option){
            render.push(item);
        }
    })
    
    console.log(render)
    return(
        <ul>
            {render.map((item,key)=> (
                <li key={key} className="list-actions">
                    {item[0].valor} 
                    {item[0].descricao}
                    {item[0].data}
                </li>
            ))}
        </ul>
    );
}

export default Lista;