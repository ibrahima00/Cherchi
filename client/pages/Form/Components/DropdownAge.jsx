
import React from 'react'
import PropTypes from 'prop-types';


class DropdownAge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
              age:[

                {
                    value:'12',
                    text:'12'
                },
                {
                    value:'13',
                    text:'13'
                },{
                    value:'14',
                    text:'14'
                },{
                    value:'15',
                    text:'15'
                },{
                    value:'16',
                    text:'16'
                },{
                    value:'17',
                    text:'17'
                },
                {
                    value:'18',
                    text:'18'
                },{
                    value:'19',
                    text:'19'
                },{
                    value:'20',
                    text:'20'
                },{
                    value:'21',
                    text:'21'
                },{
                    value:'22',
                    text:'22'
                },{
                    value:'23',
                    text:'23'
                },{
                    value:'23',
                    text:'23'
                },{
                    value:'24',
                    text:'24'
                },{
                    value:'24',
                    text:'24'
                },{
                    value:'25',
                    text:'25'
                },{
                    value:'26',
                    text:'26'
                }
            ]
    }
    }

    render() {
        return (
            <div className="field ">
               <div className="select">
                   <select style={{width: '380px'}} onChange={this.props.onUpdate} value={this.props.value}>
                       <optgroup label={this.props.label}></optgroup>
                       {this.props.label === 'Age' ? this.state.age.map((item, index) =>
                       <option key={index} value={item.value}>{item.text}</option> ) : false}
                   </select>
    </div>
    </div>
    )
    }
}

DropdownAge.propTypes = {
    onUpdate: PropTypes.func
};

export default DropdownAge;