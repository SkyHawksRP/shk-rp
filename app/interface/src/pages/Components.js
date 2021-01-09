import React from "react";
import Inputs from "../components/form/Inputs";
import useForm from "../hooks/useForm";
const Components = () => {
    // ==================
    // DECLARAÇÃO DE INPUTS
    // ==================

    const Form_typetext = useForm();
    const Form_typetext_email = useForm("email");
    const Form_typetext_password = useForm("password");
    const Form_typeSelect = useForm();
    const Form_textArea = useForm();
    const Form_Switch = useForm(true,false); // o primeiro parametro é se é email ou senha 
    const Form_Checkbox = useForm(true,false); // o segundo parametro desativa a validação
    const Form_Radio = useForm(true,false);

  return (
    <div>
      <h1>Formularios</h1>
      <hr />
      <div className="wrapper">
        <h3>Input Normal</h3>
        <Inputs placeholder="Digite o que você quiser!" {...Form_typetext}/>
        <hr />
      </div>
      <div className="wrapper">
        <h3>Input Email/Password</h3>
        <Inputs placeholder="Qual seu email?" {...Form_typetext_email}/>
        <Inputs placeholder="Digite uma nova senha" type="password" {...Form_typetext_password}/>
        <hr />
      </div>
      <div className="wrapper">
        <h3>Input Select</h3>
        <Inputs mode="select" {...Form_typeSelect}>
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Inputs>
        <hr />
      </div>
      <div className="wrapper" >
        <h3>Input textArea</h3>
        <Inputs mode="textArea" {...Form_textArea}/>
        <hr />
      </div>
      <div className="wrapper">
        <h3>Input Switch</h3>
        <Inputs mode="Switch" placeholder="Deseja Recer Notificações?" {...Form_Switch} />
        <hr />
      </div>
      <div className="wrapper">
        <h3>Input Checkbox</h3>
        <Inputs mode="Checkbox" placeholder="Deseja Recer Notificações?" {...Form_Checkbox} />
        <hr />
      </div>
      <div className="wrapper">
        <h3>Input Radio</h3>

        <Inputs
          mode="Radio"
          name="radio"
          radioId="Radio1"
          placeholder="Deseja Recer Notificações?"
          {...Form_Radio}
        />
        <Inputs
          mode="Radio"
          name="radio"
          radioId="Radio2"
          placeholder="Deseja Recer Notificações?"
          {...Form_Radio}
        />
        <div class="alert alert-warning" role="alert">
          O Input de radio deve conter os atributos "radioId" e "name" para
          funcionarem corretamente, sendo que o name deve ser o mesmo em todos
          as opções do radio,enquanto o radioId deve ser diferente
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Components;
