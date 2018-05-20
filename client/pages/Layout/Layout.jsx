import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';
import Nav from './Components/Nav';
import NavAuth from './Components/NavAuth';
import Home from "../Home/Home";
import Annonce from "../Annonces/Annonce"
import Connection from "../Connetion/Connection";
import Confirmer from '../Confirmer/Confirmer';
import NotFound from "../NotFound/NotFound";
import InscriptionP from "../inscription/Inscription";
import InscriptionE from "../inscription/InscriptionE";
import profile from "../profile/profile";
import profili from "../profile/profili";
import listAnnonce from "../Annonces/listAnnonce"
import Admin from "../Annonces/admin"


class Layout extends Component {
    constructor(props) {
        super(props);
        //<Nav links={this.state.links}/>
        this.state = {
            links: [
                {
                    link: "/connection",
                    text: "Connexion "
                }
                , {

                    text: "Inscription"
                }

            ],
            page:"layout"
        };
    }

    render() {

        const token = localStorage.getItem('token');
        console.log("teh token" + token)
        let nv = null
        if(token)
        {
            console.log("authenticated")
               nv = <NavAuth />
        }else{
            nv = <Nav links={this.state.links}/>
        }



        return (
            <div>
                { nv }
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/connection" component={Connection}/>
                    <Route  path="/admin" component={Admin}/>
                    <Route  path="/profili" component={profili}/>
                    <Route  path="/particular" component={InscriptionP}/>
                    <Route  path="/company" component={InscriptionE}/>
                    <Route path ="/annonce" component ={Annonce}/>
                    <Route path ="/listannonce" component ={listAnnonce}/>
                    <Route path ="/confirmer" component={Confirmer}/>
                    <Route path="/profile" component={profile}/>
                    

                    <Route path="*" component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;