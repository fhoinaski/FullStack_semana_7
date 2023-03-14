import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { useState } from "react";
import { Tabela } from "./components/Tabela";

export const App = () => {
  // Estado que armazena as negociações
  const [negociacoes, setNegociacoes] = useState([]);

  // Função que adiciona uma nova negociação ao estado
  const adicionarNegociacao = (negociacao) => {
    setNegociacoes([...negociacoes, negociacao]);
  };

  // Renderização do componente
  return (
    <div>
      <Header titulo="Negociações" />
      <div className="container">
        <Formulario quandoAdicionar={adicionarNegociacao} />
        <Tabela negociacoes={negociacoes} />
      </div>
    </div>
  );
};
