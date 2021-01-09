import React from "react";
import Inputs from "../components/form/Inputs";

const Components = () => {
  return (
    <div>
      <h1>Formularios</h1>
      <hr />
      <div className="wrapper">
        <h3>Input Normal</h3>
        <Inputs />
        <hr />
      </div>
      <div className="wrapper">
        <h3>Input Select</h3>
        <Inputs mode="select">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Inputs>
        <hr />
      </div>
      <div className="wrapper">
        <h3>Input textArea</h3>
        <Inputs mode="textArea" />
        <hr />
      </div>
      <div className="wrapper">
        <h3>Input Switch</h3>
        <Inputs mode="Switch" placeholder="Deseja Recer Notificações?" />
        <hr />
      </div>
      <div className="wrapper">
        <h3>Input Checkbox</h3>
        <Inputs mode="Checkbox" placeholder="Deseja Recer Notificações?" />
        <hr />
      </div>
      <div className="wrapper">
        <h3>Input Radio</h3>

        <Inputs
          mode="Radio"
          name="radio"
          radioId="Radio1"
          placeholder="Deseja Recer Notificações?"
        />
        <Inputs
          mode="Radio"
          name="radio"
          radioId="Radio2"
          placeholder="Deseja Recer Notificações?"
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
