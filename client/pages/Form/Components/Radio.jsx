import React from 'react';

const Radio = (props) => {


    return (
        <div className="field ">
            <label classename='label'>{props.label}
            <div className="input">
                {props.values.map((item, index) => <label key={index} className='radio'>
                    <input type='radio' name='answer'/>
                    {item}
                </label>)}
            </div>
            </label>
        </div>
    )
}

Radio.propTypes = {};
Radio.defaultProps = {};
export default Radio;