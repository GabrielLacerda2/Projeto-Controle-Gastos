import React from 'react';
import {useState} from 'react';
import {useRouter} from 'next/router';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import CurrencyInput from 'react-currency-masked-input'

function Lançamento(props){
    const [valor,setValor] = useState(0);
    const [categoria,setCategoria] = useState("Salário");
    const [descricao,setDescricao] = useState("");
    const [data,setData] = useState("");
    const [repetir,setRepetir] = useState("");
    const [a,setA] = useState(0);
    const router = useRouter();
    

    const handleValor = (e,props) => {
        setValor(parseFloat(props))
    }

    const handleCategoria = (e) => {
        setCategoria(e.target.value);
    }
    const handleDesc = (e) => {
        setDescricao(e.target.value);
    }
    const handleData = (e) => {
        setData(e.target.value);
    }
    const handleRepetir = (e) => {
        setRepetir(e.target.value);
    }

    function handleDespesa(e){
        e.preventDefault();
       createLancamento();
    }

    const createLancamento = async () => {
        try {
            const res = await fetch('/api/lancamentos',{
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({tipo:props.type,categoria:categoria,valor:valor,descricao:descricao,data:data,repetir:repetir,usuario:props.id}),
            })
        router.push({ pathname: '/[id]/home',
                     query: { id: props.id}})
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className="content-receita">
            <p>Nova {props.type}</p>
            <CurrencyInput className="valor-receita" placeholder="0,0" onChange={handleValor} required />
            <form className="receita-form">
                <label>Categoria</label>
                <select onChange={handleCategoria}>
                    <option>Salário</option>
                    <option>Pensão</option>
                    <option>Empréstimo</option>
                    <option>Pagamento</option>
                    <option>Diversos</option>
                </select>
                <label>Descrição</label>
                <input type="text" placeholder="Adicione a descrição do lançamento" className="input-text-receita" onChange={handleDesc}></input>
                <label>Data</label>
                <input type="date" className="date" onChange={handleData}/>
                
                <label>Repetir lançamento</label>
                <select onChange={handleRepetir}>
                    <option>Não repetir</option>
                    <option>Semanalmente</option>
                    <option>Mensalmente</option>
                    <option>Anualmente</option>
                </select>
                
                <button onClick={handleDespesa} type="submit" className="btn-receita">
                    <IoCheckmarkCircleOutline className="add-receita" />
                </button>
                
               
            </form>
            
        </div>
    );
}


export default Lançamento;