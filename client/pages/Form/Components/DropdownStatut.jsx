
import React from 'react'
import PropTypes from 'prop-types';


class DropdownStatut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


            statut: [
                {
                    value: 'neuf',
                    text:'neuf'
                },
                {
                    value: 'ocasion',
                    text: 'ocasion'
                },
                {
                    value:'en panne',
                    text:'en panne'
                }
            ],

        }
    }

    render() {
        return (
            <div className="field ">
                <div className="select">
                    <select style={{width: '380px'}} onChange={this.props.onUpdate} value={this.props.value}>
                        <optgroup label={"Statut"}></optgroup>
                        {
                            this.props.label === 'Statut' ? this.state.statut.map((item, index) =>
                                    <option key={index}
                                            value={item.value}>{item.text}</option> )
                                : false}
                    </select>
                </div>
            </div>
        )
    }
}

DropdownStatut.propTypes = {
    onUpdate: PropTypes.func
};

export default DropdownStatut;