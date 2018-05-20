import React from 'react';
import PropTypes from 'prop-types';
const Button = (props) => {
    return (
        <button className={props.class} onClick={props.clickHandler}>{props.text}</button>
    );
};
Button.propTypes = {
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func,
    customStyle: PropTypes.string
};
Button.defaultProps = {};
export default Button;
