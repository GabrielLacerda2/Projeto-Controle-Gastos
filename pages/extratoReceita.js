import {useState,useEffect} from 'react';
import Header from '../components/Header';
import Lista from '../components/Lista';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Radio,
    Select,
    TextArea,
  } from 'semantic-ui-react';

function extratoReceita({user}){
  
    const [categoria,setCategoria] = useState("");
    const [totalstate,setTotalState] = useState();
    const [lista,setLista] = useState([]);
    const initialValue = [];
    
    var newArr = [];
  
    
    
   
            

    const options = [
        { key: 'p', text: 'Pensão', value: 'pensao' },
        { key: 'e', text: 'Empréstimo', value: 'emprestimo' },
        { key: 's', text: 'Salário', value: 'salario' },
    ]

    const handleSelect = (e) => {
        setCategoria(e.target.innerText)
        console.log(categoria)
        selected();
    }

   
    
    const selected = () => {
        var total = 0;
        user[0].forEach((item)=>{
            if(item.tipo == "receita"){
                console.log("entrou")
                initialValue.push([item]);
            }
        })
        setLista(initialValue);  
}   
    return(
        <div>
            <Header />
            <div className="form-catetegoria">
            <Form>
                <Form.Field
                control={Select}
                label="Categoria"
                onChange={handleSelect}
                options={options}
                placeholder="Categoria"
                />
            </Form>
            </div>
            <Lista option={categoria} lista={lista}/>
            <h1>{totalstate}</h1>
        </div>
    );

}

extratoReceita.getInitialProps = async (ctx) => {
    const {query} = ctx;
    
        const res = await fetch(`/api/${query.id}`,{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
    })
  
      const {data} = await res.json();
      
      return {user:data};
}

export default extratoReceita;