import Header from '../../components/Header';
import Resume from '../../components/Resume';
import saldo from '../../controllers/saldo';
import receita from '../../controllers/receita';
import despesa from '../../controllers/despesa';


export async function getServerSideProps(ctx) {
    const { req, query, res, asPath, pathname } = ctx;
    let host;

    if(req){
        host = req.headers.host
    }
        const ref = await fetch(`http://${host}/api/${query.id}`,{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
    })
  
      const {data} = await ref.json();
      
      return {
          props:{
          user:data
          }
    };
  }

function Home({user}){
    return(
        <div>
        <Header user={"Olá, "+user[1].name} />
        <Resume saldo={saldo(user[0])} receita={receita(user[0])} despesa={despesa(user[0])} lancamentos={user[0]} usuario={user[1]} />
        </div>
    )
}
/*
Home.getInitialProps = async (ctx) => {
    const {query} = ctx;
    console.log(query)
    console.log(process.cwd())
        const res = await fetch(`http://localhost:3000/api/${query.id}`,{
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
    })
  
      const {data} = await res.json();
      
      return {user:data};
  
  }*/

export default Home;