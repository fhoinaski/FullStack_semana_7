// Componente de botão
// Recebe como propriedade um callback de função a ser executado ao ser clicado

export const Botao = ({ onClick }) => {
    return (
    <div className="col-1 d-flex align-items-end justify-content-end">
    <button className="btn btn-primary" type="submit" onClick={onClick}>Incluir</button>
    </div>
    )
    }