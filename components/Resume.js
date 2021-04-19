import React, {useState,useEffect} from 'react';
import { IoAddCircleOutline } from "react-icons/io5";
import Link from "next/link";





function Resume(props){
    let saldo = parseFloat(props.saldo).toFixed(2);
    saldo = saldo.toString().replace(".",",");
    let receita = parseFloat(props.receita).toFixed(2);
    receita = receita.toString().replace(".",",");
    let despesa = parseFloat(props.despesa).toFixed(2);
    despesa = despesa.toString().replace(".",",");


    const receitaStyle = {
        color: 'green'
    }

    const despesaStyle = {
        color: '#d73232'
    }

        return(
        <div className="info-resumed">
            
                <div className="resume">
                    <h1>Saldo</h1>
                     
                    <div className="valor">
                        <p>R$</p>
                        <p className="saldo">{saldo}</p>
                    </div>
                    

                </div> 
                <div className="resume-midle">
                    <div className="title-add">
                    <Link href={{
                            pathname: '/extrato',
                            query: { id: props.usuario._id, type: "receita"},
                        }}><h1>Receitas</h1></Link>
                        <Link href={{
                            pathname: '/[id]/Receita',
                            query: { id: props.usuario._id},
                        }}>
                        <button className="btn-lancamento">
                                <IoAddCircleOutline className="add-i"  />
                        </button>   
                        </Link>
                    </div>

                    <div className="valor">
                        <p style={receitaStyle}>R$</p>
                        <p className="saldo" style={receitaStyle}>{receita}</p>
                    </div>
                </div>
                
                <div className="resume">
                    <div className="title-add">
                    <Link href={{
                            pathname: '/extrato',
                            query: { id: props.usuario._id,type:"despesa"},
                        }}>
                    <h1>Despesas</h1>
                    </Link>
                    <Link href={{
                            pathname: '/[id]/Despesa',
                            query: { id: props.usuario._id},
                        }}>
                        <button className="btn-lancamento">
                                 <IoAddCircleOutline className="add-i"  />
                        </button>
                    </Link>
                    </div>
                    <div className="valor">
                        <p style={despesaStyle}>R$</p>
                        <p className="saldo" style={despesaStyle}>{despesa}</p>
                    </div>
                </div>    
               
            </div> 
    );
}


export default Resume;