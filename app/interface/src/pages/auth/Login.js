import React from "react";
import { Link } from "react-router-dom";
import Inputs from "../../components/form/Inputs";
import "./Auth.scss";
const Login = () => {
  return (
    <div className="container">
      <div className="form">
        <h1>Bem vindo de volta!</h1>
        <form onSubmit={()=>{}}>
            <Inputs placeholder="Qual seu email?"></Inputs>
            <Inputs placeholder="Qual sua senha?" type="password"></Inputs>
            <button className="btn">Fazer Login</button>
        </form>
        <Link className="link" to="/user/register">Ainda não é cadastrado?</Link>
      </div>
    </div>
  );
};

export default Login;
