import Header from '../../components/Header';
import Lançamento from '../../components/Lançamento';

function Receita(props){

    return(
        <div>
        <Header user="Adicionando uma receita" />
        <Lançamento type="receita" id={props.query.id}  />
        </div>
    )
}

Receita.getInitialProps = (ctx) => {
    const {query} = ctx;
    return {query};
}


export default Receita;