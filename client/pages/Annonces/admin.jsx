import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';

import {browserHistory} from 'react-router-dom';



class Admin extends Component {




    constructor(props) {
        super(props);
        this.state = {
            admin: []
            
        }
    }


 


    render() {
    
        
        return (
			<div>
				<br/>
 <div className="container">
        <div className="columns">
            <div className="column is-3">
                <aside className="menu">
                    <p className="menu-label">
                        General
                    </p>
                    <ul className="menu-list">
                        <li><a className="is-active">Dashboard</a></li>
                        <li><a>Paramètres</a></li>
                    </ul>
                   
               
                    
                </aside>
            </div>
            <div className="column is-9">
               
                <section className="hero is-info welcome is-small">
                    <div className="hero-body">
                        <div className="container">
                        <h2>It is {new Date().toLocaleTimeString()}.</h2>
                            <h1 className="title">
                                Bienvenue, Admin.
                            </h1>
                            <h2 className="subtitle">
                            J'espère que vous passez une bonne journée!                            </h2>
                        </div>
                    </div>
                </section>
                <section className="info-tiles">
                    <div className="tile is-ancestor has-text-centered">
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">350</p>
                                <p className="subtitle">Utilisateurs
</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">1200</p>
                                <p className="subtitle">Produits</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">250</p>
                                <p className="subtitle">Produits en attentes</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">
                                <p className="title">6</p>
                                <p className="subtitle">Clients signalée</p>
                            </article>
                        </div>
                    </div>
                </section>
                <div className="columns">
                    <div className="column is-6">
                        <div className="card events-card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    Annonces en attentes
                                </p>
                                <a href="#" className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
                            </header>
                            <div className="card-table">
                                <div className="content">
                                    <table className="table is-full width is-striped">
                                        <tbody>
                                            <tr>
                                                <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                <td>voiture clio 2010</td>
                                                <td><a className="button is-small is-link" href="#">Approuver</a> 
                                                <a className="button is-small is-danger" href="#">Supprimer</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                <td>ordinateur portable acer 2015</td>
                                                <td><a className="button is-small is-link" href="#">Approuver</a> 
                                                <a className="button is-small is-danger" href="#">Supprimer</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                <td>écran samsung 19" </td>
                                                <td><a className="button is-small is-link" href="#">Approuver</a> 
                                                <a className="button is-small is-danger" href="#">Supprimer</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                <td>frigidaire samsung</td>
                                                <td><a className="button is-small is-link" href="#">Approuver</a> 
                                                <a className="button is-small is-danger" href="#">Supprimer</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                <td>smartphone p8 light 2017</td>
                                                <td><a className="button is-small is-link" href="#">Approuver</a> 
                                                <a className="button is-small is-danger" href="#">Supprimer</a></td>
                                            </tr>
                                          
                                            <tr>
                                                <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                <td>moto yamaha stunt</td>
                                                <td><a className="button is-small is-link" href="#">Approuver</a> 
                                                <a className="button is-small is-danger" href="#">Supprimer</a></td>
                                            </tr>
                                          <tr>
                                                <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                <td>maison s+3 (manzah6) </td>
                                                <td><a className="button is-small is-link" href="#">Approuver</a> 
                                                <a className="button is-small is-danger" href="#">Supprimer</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a href="#" className="card-footer-item">View All</a>
                            </footer>
                        </div>
                    </div>
                    
                    <div className="column is-6">
                    <div className="card events-card">
                            <header className="card-header">
                                <p className="card-header-title">
                                   Utilisateurs signalé
                                </p>
                                <a href="#" className="card-header-icon" aria-label="more options">
                  <span className="icon">
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </a>
                            </header>

                            <div className="card-table">
                                <div className="content">
                                    <table className="table is-full width is-striped">
                                        <tbody>
                                           
                                            <tr>
                                                <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                <td>marco vladimir <strong style={ {color: 'red'}}>  6 foix </strong></td>
                                                <td><a className="button is-small is-danger" href="#">Supprimer Client</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                <td>mohsen katoum <strong style={ {color: 'red'}}> 10 foix </strong></td>
                                                <td>
                                                <a className="button is-small is-danger" href="#">Supprimer Client</a></td>
                                            </tr>
                                          
                                            <tr>
                                                <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                <td>kamel migo <strong style={ {color: 'red'}}>  8 foix </strong></td>
                                                <td>
                                                <a className="button is-small is-danger" href="#">Supprimer Client</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                <td>samir bougarnin <strong style={ {color: 'red'}}>  8 foix </strong></td>
                                                <td>
                                                <a className="button is-small is-danger" href="#">Supprimer Client</a></td>
                                            </tr>
                                            <tr>
                                                <td width="5%"><i className="fa fa-bell-o"></i></td>
                                                <td>Phonestore Techno <strong style={ {color: 'red'}}>  8 foix </strong></td>
                                                <td>
                                                <a className="button is-small is-danger" href="#">Supprimer Client</a></td>
                                            </tr>
                                         
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a href="#" className="card-footer-item">View All</a>
                            </footer>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
	</div>
    </div>

        )
    };
}
Admin.propTypes = {};
Admin.defaultProps = {};

export default Admin;