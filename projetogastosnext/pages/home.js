import Header from '../components/Header';
import Resume from '../components/Resume';
import Lançamento from '../components/Lançamento';
import Link from 'next/link';
import { useState, useEffect } from 'react'
import {useRouter, withRouter} from 'next/router';

function Home() {
  const [viewresume, setViewResume] = useState(true);
  const [viewreceita, setViewReceita] = useState(false);
  const [viewdespesa, setViewDespesa] = useState(false);

  const router = useRouter();
  

  
    if(viewresume){
    return (
        <div>
            <Header />
            <Resume  dados={router.query.id} viewresume={viewresume} setViewResume={setViewResume} viewreceita={viewreceita} setViewReceita={setViewReceita} viewdespesa={viewdespesa} setViewDespesa={setViewDespesa}  />
        </div>
        
    );
    }
    if(viewreceita){
        return(
            <div>
                
            < Header />
            <Lançamento  type="receita" viewresume={viewresume} setViewResume={setViewResume} viewreceita={viewreceita} setViewReceita={setViewReceita} viewdespesa={viewdespesa} setViewDespesa={setViewDespesa}/>
            </div>
        );
    }if(viewdespesa){
        return(
            <div>
            < Header />
            < Lançamento type="despesa" viewresume={viewresume} setViewResume={setViewResume} viewreceita={viewreceita} setViewReceita={setViewReceita} viewdespesa={viewdespesa} setViewDespesa={setViewDespesa}/>
            </div>
        );
    }
}
    

export default Home;