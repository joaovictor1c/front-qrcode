import React,{useEffect, useState} from 'react';
import api from '../../services/api';

function Validator() {
  const [valid, setValid] = useState()

  useEffect(()=>{
    const data = async () =>{
        await api.post(`$`)
    
    }
  },[])

  return <div>
    <strong>funcionou</strong>
  </div>;
}

export default Validator;