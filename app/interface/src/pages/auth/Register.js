import React from 'react'
import { Link } from 'react-router-dom';
import Inputs from '../../components/form/Inputs';
import './Auth.scss';
const Register = () => {
    return (
        <div className="container">
        <div className="form">
          <h1>Novo por aqui?</h1>
          <form onSubmit={()=>{}}>
              <Inputs placeholder="Qual vai ser seu username?"></Inputs>
              <Inputs placeholder="Qual seu email?"></Inputs>
              <Inputs placeholder="Qual será sua senha?" type="password"></Inputs>
              <button className="btn">Cadastrar</button>
          </form>
          <Link className="link" to="/user/login">Voltar ao login</Link>
  
        </div>
      </div>
    )
}

export default Register
