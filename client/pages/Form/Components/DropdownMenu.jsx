import React from 'react';
import {Link} from 'react-router-dom';

const DropdownMenu = (props) => {
    return (
        <div className='navbar-item has-dropdown is-hoverable'><Link to='#'
                                                                     className='navbar-item btn-add-cli'>Inscription</Link>
            <div className='navbar-dropdown is-boxed'>
                {props.roles.map((item, index) => <Link key={index} to={item.value}
                                                        className='navbar-item btn-add-cli'>{item.text}</Link>)}
            </div>
        </div>
    )
}

DropdownMenu.propTypes = {};
DropdownMenu.defaultProps = {};
export default DropdownMenu;