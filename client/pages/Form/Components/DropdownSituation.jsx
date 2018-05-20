
import React from 'react'
import PropTypes from 'prop-types';


class DropdownSituation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


            situation: [
                {
                    value: 'Etudiant',
                    text:'Etudiant'
                },
                {
                    value: 'Employer',
                    text: 'Employer'
                },
                {
                    value:'Autre',
                    text:'Autre'
                }
            ],

        }
    }

    render() {
        return (
            <div className="field ">
                <div className="select">
                    <select style={{width: '380px'}} onChange={this.props.onUpdate} value={this.props.value}>
                        <optgroup label={this.props.label}></optgroup>
                        {
                                 this.props.label === 'Situation' ? this.state.situation.map((item, index) =>
                                        <option key={index}
                                                value={item.value}>{item.text}</option> )
                                    : false}
                    </select>
                </div>
            </div>
        )
    }
}

DropdownSituation.propTypes = {
    onUpdate: PropTypes.func
};

export default DropdownSituation;