import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import DropdownMenu from '../../Form/Components/DropdownMenu';

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            roles: [

                {
                    text: 'Particulier',
                    value: '/particular'
                },
                {
                    text: 'Entreprise',
                    value: '/company'
                }
            ]
        }
    }

    render() {
        return (

            <nav className="navbar " role="navigation" aria-label="main navigation">
                <div className="container is-fluid">
                    <div className="navbar-brand">

                        <Link to={'/'} className="navbar-item brand-link">
                            <img src="img/logo.png" alt="logo" className="logo-img"/>
                        </Link>
                        <span className="button navbar-burger">
                                <span/>
                                <span/>
                                <span/>
                            </span>
                    </div>

                    <div className="navbar-menu">
                        <div className="navbar-end">
                            {this.props.links.map((item, index) => item.text === 'Inscription' ?
                                <DropdownMenu key={index} roles={this.state.roles}/>
                                : <Link key={index} to={item.link}
                                        className='navbar-item btn-add-cli'>{item.text}</Link>)}



                        </div>
                    </div>
                </div>

            </nav>

        );
    };

}
Nav.propTypes = {};
Nav.defaultProps = {};

export default Nav;


