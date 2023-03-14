import PropTypes from 'prop-types';

// Componente para agrupar um label e um input
export const GrupoInput = (props) => {
    return (
        <div className="form-group col">
            <label htmlFor={props.id}>{props.label}</label>
            <input
                className="form-control"
                type={props.type}
                id={props.id}
                min={props.min}
                step={props.step}                
                value={props.value}
                onChange={props.onChange}
                required
            />
        </div>
    );
};

// Definição das propTypes para o componente GrupoInput
GrupoInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    min: PropTypes.number,
    step: PropTypes.number,
    value: PropTypes.string.isRequired
};
