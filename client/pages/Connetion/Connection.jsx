import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';
import Input from '../Form/Components/Input';

    class Connection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleValid = this.handleValid.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

         handleEmailChange(event) {
        this.setState({email: event.target.value});}

         handlePasswordChange(event) {
        this.setState({password: event.target.value});}

        validateEmail(email) {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());}

        handleValid() {
            this.validateEmail(this.state.email) ? this.setState({border: {border: '2px solid green'}}) : this.setState({border: {border: '2px solid red'}, redirect: false})}


        handlePassword() {
            this.validatePassword() ? this.setState({passBorder: {border: '2px solid green'}}) : this.setState({passBorder: {border: '2px solid red'}})
        }


    handleClick() {
        if (this.validateEmail(this.state.email)  && this.state.password !== '') {
            axios.post('http://localhost:3040/connection/con', {
                email: this.state.email,
                password: this.state.password
            }).then((res) => {
console.log('connecté')
                localStorage.setItem('token',res.data.natija.token);
                localStorage.setItem('id',res.data.id);
                this.props.history.push('/profile');
                console.log(res.data) ;
               
            }).catch((err) => {
                console.log('err : ', err);
                console.log("ghalta")
            });
        }
        else if (!this.validateEmail(this.state.email)) {
            alert('Type a valid email');
            return false;
        } else {
            alert('Passwords did not match');
            return false;
        }
    }


  render(){
    return (
        <div>

            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h3 className="title has-text-grey">Connexion</h3>
                            <p className="subtitle has-text-grey">Connecter et déposer votre produit</p>
                            <div className="box">
                                <figure className="avatar">
                                    <img src="img/logo.png"/>
                                </figure>
                                <form>
                                    <div className="field">
                                        <div className="control">
                                            <Input className="input is-large" type="email" placeholder="Ton email"
                                                     value={this.state.email} onUpdate={this.handleEmailChange} />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                            <Input className="input is-large" type="password"
                                                   placeholder="Mot de passe " value={this.state.password} onUpdate={this.handlePasswordChange} />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="checkbox">
                                            <input type="checkbox"/>
                                            Remember me
                                        </label>
                                    </div>
                                    <button  className="button is-block is-info is-large is-fullwidth"  onClick={this.handleClick} >Connexion</button>
                                </form>
                            </div>
                            <p className="has-text-grey">
                                <Link to={"/particular"} >Inscription</Link> &nbsp;·&nbsp;
                                <a href="../">Oublier Mot de passe !</a> &nbsp;·&nbsp;
                                <a href="../">Aide?</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
  };
  };

Connection.propTypes = {};
Connection.defaultProps = {};
export default Connection;



