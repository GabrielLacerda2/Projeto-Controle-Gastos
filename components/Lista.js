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
                <li key={key}>{item[0].valor}</li>
            ))}
            </ul>
    );
}

export default Lista;