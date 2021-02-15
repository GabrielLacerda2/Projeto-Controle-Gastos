import {useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
//import axios from 'axios';

import {Form, Button} from 'semantic-ui-react';


function Cadastro(){
    return(
        
        <Form>
            <Form.Input placeholder="Nome" />
        </Form>
    );
}

export default Cadastro;