import React, {useState,useEffect} from 'react';
import { IoAddCircleOutline } from "react-icons/io5";
import Link from "next/link";





function Resume(props){
    const receitaStyle = {
        color: 'green'
    }

    const despesaStyle = {
        color: '#d73232'
    }

    console.log(props.usuario._id)

        return(
        <div className="info-resumed">
            
                <div className="resume">
                    <h1>Saldo</h1>
                     
                    <div className="valor">
                        <p>R$</p>
                        <p className="saldo">{props.saldo}</p>
                    </div>
                    

                </div> 
                <div className="resume">
                    <div className="title-add">
                    <Link href={{
                            pathname: '/extratoReceita',
                            query: { id: props.usuario._id},
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
                        <p className="saldo" style={receitaStyle}>{props.receita}</p>
                    </div>
                </div>
                
                <div className="resume">
                    <div className="title-add">
                    <h1>Despesas</h1>
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
                        <p className="saldo" style={despesaStyle}>{props.despesa}</p>
                    </div>
                </div>    
               
            </div> 
    );
}


export default Resume;