import Header from '../../components/Header';
import Lançamento from '../../components/Lançamento';

function Despesa(props){

    return(
        <div>
        <Header user="Adicionando uma despesa"  />
        <Lançamento type="despesa" id={props.query.id}  />
        </div>
    )
}

Despesa.getInitialProps = (ctx) => {
    const {query} = ctx;
    return {query};
}


export default Despesa;