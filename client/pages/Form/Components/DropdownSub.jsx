
import React from 'react'
import PropTypes from 'prop-types';


class DropdownS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


            subCategory: [
                {
                    value: 'ordinateur',
                    text:'ordinateur'
                },
                {
                    value: 'phone',
                    text: 'phone'
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
                        <optgroup label={"SubCategory"}></optgroup>
                        {
                            this.props.label === 'SubCategory' ? this.state.subCategory.map((item, index) =>
                                    <option key={index}
                                            value={item.value}>{item.text}</option> )
                                : false}
                    </select>
                </div>
            </div>
        )
    }
}

DropdownS.propTypes = {
    onUpdate: PropTypes.func
};

export default DropdownS;