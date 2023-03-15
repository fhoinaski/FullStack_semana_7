import { Botao } from "./Botao";
import { GrupoInput } from "./GrupoInput";
import { useState } from "react";
import moment from "moment";

export const Formulario = ({ quandoAdicionar }) => {
    const [data, setData] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valor, setValor] = useState("");
  
    function validarDados() {
      if (!data || !quantidade || !valor) {
        alert("É necessário preencher todos os campos!");
        return false;
      }
      return true;
    }
  
    function handleAdicionarNegociacao() {
      event.preventDefault();
      if (validarDados()) {
        const negociacao = {
          data: moment(data).format("DD/MM/YYYY"),// formatar data
          quantidade: quantidade,
          valor: valor,
        };
        quandoAdicionar(negociacao);
        setData("");
        setQuantidade("");
        setValor("");
      }
    }
  
    return (
      <form className="form container">
        <div className="row">
          <GrupoInput
            id="data"
            label="Data"
            type="date"
            value={data}
            onChange={(event) => setData(event.target.value)}
          />
          <GrupoInput
            id="quantidade"
            label="Quantidade"
            type="number"
            min={1}
            step={1}
            value={quantidade}
            onChange={(event) => setQuantidade(event.target.value)}
          />
          <GrupoInput
            id="valor"
            label="Valor"
            type="number"
            min={1}
            step={0.01}
            value={valor}
            onChange={(event) => setValor(event.target.value)}
          />
          <Botao onClick={handleAdicionarNegociacao} />
        </div>
      </form>
    );
  };
  