
import React from 'react'
import PropTypes from 'prop-types';


class DropdownCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


            category: [
                {
                    value: 'Technologie',
                    text:'Technologie'
                },
                {
                    value: 'Immobilier',
                    text: 'Immobiler'
                }
                ,
                {
                    value:'Electroménager',
                    text:'Electroménager'
                },
                {
                    value:'Loisirs',
                    text:'Loisirs'
                },
                {
                    value:'Vehicules',
                    text:'Vehicules'
                }
                ,
                
                {
                    value:'Animaux',
                    text:'Animaux Domestique'
                }
            ],

        }
    }

    render() {
        return (
            <div className="field ">
                <div className="select">
                    <select style={{width: '380px'}} onChange={this.props.onUpdate} value={this.props.value}>
                        <optgroup label={"Category"}></optgroup>
                        {
                            this.props.label === 'Category' ? this.state.category.map((item, index) =>
                                    <option key={index}
                                            value={item.value}>{item.text}</option> )
                                : false}
                    </select>
                </div>
            </div>
        )
    }
}

DropdownCategory.propTypes = {
    onUpdate: PropTypes.func
};

export default DropdownCategory;