import Link from 'next/link';
import { useRouter } from 'next/router'
import {useEffect, useState} from 'react';
import {Form, Button, Loader} from 'semantic-ui-react';


function Index(){
    const [errors,setErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    const [form,setForm] = useState({});
    const [message,setMessage] = useState('');
    const router = useRouter();

    useEffect(() =>{
            if(isSubmit){
                if(Object.keys(errors).length === 0){
                    login();
                }
                else{
                    setIsSubmit(false);
                }
            }
    },[errors]);

    const handleChange = (e) => {
        console.log(e.target.value);
        
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })  
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        let errs = Validate();
        console.log(errs)
        setErrors(errs);
        setIsSubmit(true);
        setMessage('')
    }

    const Validate = () =>{
        let errs = {};
        if(!form.email){
            errs.email = 'Nome is required';
        }
        if(!form.senha){
            errs.senha = 'Cpf is required';
        }
        return errs;
    }

    const login = async () => {
        console.log(form)
        

        const res = await fetch("/api/usuarios",{
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form),
        })

        const {data} = await res.json();
        console.log(data)
        if(data){
        console.log(data._id);
        console.log("aaaaaaaaaaaaaaa")
        if(data.email === form.email && data.senha === form.senha){
            console.log("Usuario encontrado");
            router.push({
                pathname: '/[id]/home',
                query: { id: data._id},
            })
                             
        }
    }else{
        console.log("Usuario feio")
        setMessage("Usuário não encontrado, tente novamente")
    
    }
    
    }
  
    return(
        <div className="wrapper-index">
        <div className="left">
                
                <h1 className="title-controle">Controle seus gastos!</h1>
                <p className="subtitle">Insira todas suas rendas e seus gastos aqui!</p>
                <div></div>
            </div>
        <div>

        </div>
        <div className="form-cadastro1">
        <h1 className="title-cad">Entrar</h1>
        <Form className="form-io"> 
            <Form.Input 
            error={errors.email ? { content:
            "Por favor insira um nome", pointing:
            ''}:null}
            name="email"
            label="Email"
            type="email"
            placeholder="Email"z
            onChange={handleChange}
            />
             <Form.Input 
             error={errors.senha ? { content:
                "Por favor insira uma senha",pointing: '' }:null}
            name="senha"
            label="Senha"
            type="password"
            value={form.senha}
            placeholder="Senha"
            onChange={handleChange}
            />
              <Button onClick={handleSubmit} type="submit" fluid color="orange" size="large" className="btn-cad">Acessar</Button>  
        </Form>
        <span>{message}</span>
        <div className="signup-option">
            <h4>Ainda não é um usuario?</h4>
            <Link href='/cadastro'>
            <Button type="submit"  color="black" size="small" className="btn-cad">Cadastro</Button>
            </Link>
        </div>
        </div>
        </div>
       
    );
}

export default Index;