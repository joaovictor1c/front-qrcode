import React,{useEffect, useState} from 'react';
import api from '../../services/api';
import {Container, ContainerButton} from './styles';
import QRReader from 'qrcode-reader';

function Dashboard() {

  const [qrcode, setQrcode] = useState([]);

  const id = localStorage.getItem("USERID");
  const token = localStorage.getItem("TOKEN");
  useEffect(() => {
    api
      .get(`users/${id}/qrcode`, {
      })
      .then(res => {
        setQrcode(res.data);
        const qr = new QRReader();

        const data = qr.decode(null ,res.data[0].qrcode)
      });
  },[]);

  async function HandleDelete(idQrcode){
    try{
      await api.delete(`users/${id}/qrcode/${idQrcode}`, {
        headers: {
          Authorization: token
        }
      })
      console.log(qrcode)
      setQrcode(qrcode.filter(e => e.id !== idQrcode));
    }catch(err){
      alert("Erro ao deletar caso, tente novamente");
    }
     
  }
  
  async function HandleQrcode (){
    const data = await api.post(`http://localhost:3332/users/${id}/qrcode`);
    setQrcode([...qrcode, data.data]);
  }

  return (
  <>
    <ContainerButton>
      <button
              onClick={() => { HandleQrcode() }}
              type="button"
            >
              Gerar QrCode
      </button>
    </ContainerButton>
      
    <Container>
   
      <ul>
      {qrcode.map(product => (
        <li key={product.id}>
          <img src={product.qrcode}></img>
         
          <button
            onClick={() => {HandleDelete(product.id) }}
            type="button"
          >
            Deletar
          </button>
        </li>
      ))}
      </ul>
    </Container>
    </>
  );
}

export default Dashboard;
