import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
const Input = (props) => {
    return (
        <div className="field">
            <label className="label">{props.label}</label>
            <div className={classNames("control", {"has-icons-left": !!props.icon, "has-icons-right": !!props.error})}>
                <input
                    className={classNames("input", {"is-danger": !!props.error})}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onUpdate}
                    name={props.name}
                    onBlur={props.handleBlur}
                />
                {!!props.icon && <span className="icon is-small is-left"><i className={props.icon}/></span>}
                {!!props.error && <span className="icon is-small is-right"><i className={classNames({"fa fa-exclamation-triangle": !!props.error}) }/></span>}
            </div>
            {!!props.error && <p className="help is-danger">{props.error}</p>}
        </div>
    );
};
Input.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string,
    icon: PropTypes.string,
    handleBlur: PropTypes.func
};
Input.defaultProps = {
    type: 'text'
};
export default Input;

