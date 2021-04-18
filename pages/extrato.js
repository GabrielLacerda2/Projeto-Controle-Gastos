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

  export async function getServerSideProps(ctx) {
    const {query} = ctx;
    const {req} = ctx;
    let host;
    if(req){
        host = req.headers.host;
    }
    console.log(query.type)
        const res = await fetch(`http://${host}/api/${query.id}`,{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
    })
  
      const {data} = await res.json();
      
      return {
          props:{
            user:data,
            type:query.type
          }
    };
  }

function extratoReceita(props){
  
    const [categoria,setCategoria] = useState("categoria");
    const [totalstate,setTotalState] = useState();
    const [lista,setLista] = useState([]);
    const initialValue = [];
    
    var newArr = [];
  
    
    
   
            

    const options = [
        { key: 't', text: 'Todos', value: 'todos' },
        { key: 'p', text: 'Pensão', value: 'pensao' },
        { key: 'e', text: 'Empréstimo', value: 'emprestimo' },
        { key: 's', text: 'Salário', value: 'salario' },
        { key: 'pa', text: 'Pagamento', value: 'pagamento' },
        { key: 'd', text: 'Diversos', value: 'diversos' },
    ]

    const handleSelect = (e) => {
        setCategoria(e.target.innerText)
        console.log(categoria)
        selected();
    }

   
    
    const selected = () => {
        
        props.user[0].forEach((item)=>{
            if(item.tipo == props.type){
                console.log("entrou")
                initialValue.push([item]);
            }
        })
        setLista(initialValue);  
}   
    console.log(lista)

    let headerTitle = '';
    props.type == "receita"? headerTitle= 'Extrato das Receitas' : headerTitle = 'Extrato das Despesas'
    return(
        <div>
            <Header user={headerTitle}  />
            <div className="form-catetegoria">
            <div className="extrato-receita-form">
            <Form>
                <Form.Field
                control={Select}
                label="Selecione uma categoria:"
                onChange={handleSelect}
                options={options}
                placeholder={categoria}
                />
            </Form>
            </div>
            <Lista option={categoria} lista={lista}/>
            <h1>{totalstate}</h1>
            </div>
        </div>
    );

}

/*
extratoReceita.getInitialProps = async (ctx) => {
    const {query} = ctx;
    const {req} = ctx;
    let host;
    if(req){
        host = req.headers.host;
    }
    console.log(query.type)
        const res = await fetch(`https://${host}/api/${query.id}`,{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
    })
  
      const {data} = await res.json();
      
      return {user:data,type:query.type};
}
*/
export default extratoReceita;