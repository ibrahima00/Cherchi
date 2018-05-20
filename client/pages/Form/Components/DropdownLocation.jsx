
import React from 'react'
import PropTypes from 'prop-types';


class DropdownLocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


            city: [
                {
                    value: 'Tunis',
                    text:'Tunis'
                },
                {
                    value: 'Manouba',
                    text: 'Manouba'
                },
                {
                    value:'Ariana',
                    text:'Ariana'
                }
            ],

        }
    }

    render() {
        return (
            <div className="field ">
                <div className="select">
                    <select style={{width: '380px'}} onChange={this.props.onUpdate} value={this.props.value}>
                        <optgroup label={"City"}></optgroup>
                        {
                            this.props.label === 'City' ? this.state.city.map((item, index) =>
                                    <option key={index}
                                            value={item.value}>{item.text}</option> )
                                : false}
                    </select>
                </div>
            </div>
        )
    }
}

DropdownLocation.propTypes = {
    onUpdate: PropTypes.func
};

export default DropdownLocation;