import Header from '../../components/Header';
import Resume from '../../components/Resume';
import saldo from '../../controllers/saldo';
import receita from '../../controllers/receita';
import despesa from '../../controllers/despesa';

function Home({user}){
    console.log(user)
    return(
        <div>
        <Header />
        <Resume saldo={saldo(user[0])} receita={receita(user[0])} despesa={despesa(user[0])} lancamentos={user[0]} usuario={user[1]} />
        </div>
    )
}

Home.getInitialProps = async (ctx) => {
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

export default Home;