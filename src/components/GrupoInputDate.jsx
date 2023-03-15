import PropTypes from 'prop-types';
import moment from 'moment';
// Componente para agrupar um label e um input
export const GrupoInputDate = (props) => {
    // formatar a dtata para o formato DD/MM/YYYY
const valueFormatted = moment(props.value).format('DD/MM/YYYY');

    return (
        <div className="form-group col">
            <label htmlFor={props.id}>{props.label}</label>
            <input
                className="form-control"
                type="date"
                id={props.id}               
                value={props.value}
                onChange={props.onChange}
                required
            />
        </div>
    );
};

// Definição das propTypes para o componente GrupoInput
GrupoInputDate.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};
