import React,{ useState} from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import api from '../../services/api';
import { Form, Input } from '@rocketseat/unform';
import history from '../../services/history';


const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6)
    .when("oldPassword", (oldPassword, field) =>
      oldPassword ? field.required() : field
    ),
  c_password: Yup.string().when("password", (password, field) =>
    password ? field.required().oneOf([Yup.ref("password")]) : field
  )
  
});

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setc_password] = useState("");

  async function handleSubmit() {
    const data = {
      name,
      email,
      password,
      c_password,
    };
    try{
      const response = await api.post("users", data);
      console.log(response)
    }catch(err){
      console.log(err);
    }
  }


  return (
    <>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input 
          name="name"
          placeholder="Nome completo" 
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          name="email" 
          type="email" 
          placeholder="Seu e-mail" 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Input
          name="c_password" 
          type="password"
          placeholder="Sua senha secreta novamente"
          value={c_password}
          onChange={e => setc_password(e.target.value)}
        />
        <button type="submit" onClick={()=> history.push('/')}>Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}

export default SignUp;
