import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import DropdownMenu from '../../Form/Components/DropdownMenu';
import {withRouter} from "react-router-dom";

class NavAuth extends React.Component {

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


    logout () {
        localStorage.removeItem('token');
        this.props.history.push("connection");
    }


    render() {
        const token = localStorage.getItem('token');
        console.log("teh token is " + token)

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

                            <Link to="/annonce"
                                  className='navbar-item btn-add-cli'>Déposer Annonce</Link>
                            <Link  to="/profile"
                                  className='navbar-item btn-add-cli'>Mon profile</Link>


                            <button className='navbar-item btn-add-cli' onClick={() => this.logout()}>Déconnexion </button>



                        </div>
                    </div>
                </div>

            </nav>

        );
    };

}
NavAuth.propTypes = {};
NavAuth.defaultProps = {};

export default  withRouter(NavAuth);

