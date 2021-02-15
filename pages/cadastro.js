import Link from 'next/link';
import { useRouter } from 'next/router'
import {useEffect, useState} from 'react';
import {Form, Button, Loader} from 'semantic-ui-react';


function Cadastro(){
    const [errors,setErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    const [form,setForm] = useState({});
    const router = useRouter();

    useEffect(() =>{
            if(isSubmit){
                if(Object.keys(errors).length === 0){
                    createUsuario();
                    
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
    }

    const Validate = () =>{
        let errs = {};
        if(!form.name){
            errs.name = 'Nome is required';
        }
        if(!form.email){
            errs.email = 'Cpf is required';
        }
        if(!form.cpf){
            errs.cpf = 'Cpf is required';
        }
        if(!form.senha){
            errs.senha = 'Cpf is required';
        }

        return errs;
        
    }

    
    const createUsuario = async () => {
        
        try {
            const res = await fetch("/api/usuarios/buscaUsuarios",{
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form),
                
            })

        const {data} = await res.json();   
        if(data === null){
            try {
                const res = fetch("/api/usuarios",{
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(form),
                })
                router.push({ path: '/', params: { message: 'Usuário cadastrado com sucesso!' } })
                
                
            } catch (error) {
                console.error(error);
            }
        }else{
            console.log("Usuario ja foi cadastrado")
        }

        } catch (error) {
            console.log(error,"Usuario n foi encontrado")
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
        <h1 className="title-cad">Cadastro</h1>
        <Form className="form-io"> 
            <Form.Input 
            error={errors.name ? { content:
            "Por favor insira um nome", pointing:
            ''}:null}
            name="name"
            label="Nome"
            placeholder="Nome"z
            onChange={handleChange}
            />
             <Form.Input 
             error={errors.email ? { content:
                "Por favor insira um email",pointing: '' }:null}
            name="email"
            label="Email"
            placeholder="Email"
            onChange={handleChange}
            />
            <Form.Input 
             error={errors.cpf ? { content:
                "Por favor insira um CPF", pointing:
                ''}:null}
            name="cpf"
            label="CPF"
            placeholder="CPF"
            onChange={handleChange}
            />
             <Form.Input 
             error={errors.senha ? { content:
                "Por favor insira uma senha", pointing:
                ''}:null}
            label="Senha"
            name="senha"
            placeholder="Senha"
            onChange={handleChange}
            />
              <Button onClick={handleSubmit} type="submit" fluid color="orange" size="large" className="btn-cad">Cadastrar</Button>  
              <Link href="/">
                <a className="signin-a">Entrar</a>
            </Link>
        </Form>
        </div>
        </div>
       
    );
}

export default Cadastro;