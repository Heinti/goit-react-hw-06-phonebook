import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css'

export const Filter =({ value, onChange})=>{
    return(
    <label className={css.label} htmlFor="find">Find contact by name
    <input type="text" value={value} onChange={onChange}/>
    </label>

    )
}

Filter.propTypes ={
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}