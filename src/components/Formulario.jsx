import { Botao } from "./Botao";
import { GrupoInput } from "./GrupoInput";
import { useState } from "react";
import PropTypes from 'prop-types';

export const Formulario = ({ quandoAdicionar }) => {
    // Define os estados iniciais dos inputs
    const [data, setData] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valor, setValor] = useState("");

    function handleAdicionarNegociacao() {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        // console.log("Data:", data);
        // console.log("Quantidade:", quantidade);
        // console.log("Valor:", valor);

        // Cria um objeto com as informações da negociação
        const negociacao = {
            data: data,
            quantidade: quantidade,
            valor: valor
        }

        // Chama a função passada como prop para adicionar a negociação
        quandoAdicionar(negociacao)
    }

    return (
        <form className="form container">
            <div className="row">
                {/* Renderiza um input para a data */}
                <GrupoInput id="data" label="Data" type="date" value={data} onChange={(event) => setData(event.target.value)} />
                
                {/* Renderiza um input para a quantidade */}
                <GrupoInput id="quantidade" label="Quantidade" type="number" min={1} step={1} value={quantidade} onChange={(event) => setQuantidade(event.target.value)} />
                
                {/* Renderiza um input para o valor */}
                <GrupoInput id="valor" label="Valor" type="number" min={1} step={0.01} value={valor} onChange={(event) => setValor(event.target.value)} />
                
                {/* Renderiza um botão para adicionar a negociação */}
                <Botao onClick={handleAdicionarNegociacao} />
            </div>

        </form>
    )
}

// Define os tipos das props esperadas pelo componente
Formulario.propTypes = {
    quandoAdicionar: PropTypes.func.isRequired
}
