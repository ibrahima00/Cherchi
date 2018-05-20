import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';
import Input from '../Form/Components/Input';
import Button  from '../Form/Components/Button';
import Address from '../Form/Components/DropdownLocation';
import {browserHistory} from 'react-router-dom';


class InscriptionE extends Component {
    constructor() {
        super();
        this.state = {
            entitled: "",
            email: "",
            password : "",
            taxRegisterNumber : "",
            taxStatus : "",
            rePassword : "",
            webSite:"",
            street:"" ,
            city: "",
            state: "",
            zip: "",
            phoneNumber :"",
            fax : "",
            gsmNumber : "",
            errorFirstName: '',
            errorLastName: '',
            errorEmail: '',
            confirmPass: '',
            display: ''


        };
        this.handleClick = this.handleClick.bind(this);
        this.handleEntitledChange = this.handleEntitledChange.bind(this);
        this.handleTaxRegisterNumberChange = this.handleTaxRegisterNumberChange.bind(this);
        this.handleTaxStatusChange = this.handleTaxStatusChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlerePasswordChange = this.handlerePasswordChange.bind(this);
        this.handleWebSiteChange = this.handleWebSiteChange.bind(this);
        this.handleStreetChange = this.handleStreetChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
        this.handlePhoneNumberChange=this.handlePhoneNumberChange.bind(this);
        this.handleFaxChange=this.handleFaxChange.bind(this);
        this.handleGsmNumberChange=this.handleGsmNumberChange.bind(this);
        this.handleValid = this.handleValid.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
    };

    handleEntitledChange(evt){
        this.setState({entitled : evt.target.value});
    };
    handleTaxRegisterNumberChange(evt){
        this.setState({taxRegisterNumber : evt.target.value});
    };
    handleTaxStatusChange(evt){
        this.setState({taxStatus : evt.target.value});
    };
    handleEmailChange(evt){
        this.setState({email : evt.target.value});
    };
    handlePasswordChange(evt){
        this.setState({password : evt.target.value});
    };
    handlerePasswordChange(evt){
        this.setState({rePassword : evt.target.value});
    };
    handleWebSiteChange(evt){
        this.setState({webSite : evt.target.value});
    };
    handleStreetChange(evt) {
        this.setState({street: evt.target.value});
    }

    handleStateChange(evt) {
        this.setState({state: evt.target.value});
    }
    handleCityChange(evt) {
        this.setState({city: evt.target.value});
    }

    handleZipChange(evt) {
        this.setState({zip: evt.target.value});
    };

    handleBlurEntitled() {
        if ((this.state.firstName.length < 4) || (!isNaN(this.state.firstName))) {
            this.setState({errorFirstName: 'nom trop court '});
        }
        else {
            this.setState({errorFirstName: ''});
        }
    }

    handlePhoneNumberChange(evt){
        this.setState({phoneNumber : evt.target.value});
    };
    handleFaxChange(evt){
        this.setState({fax : evt.target.value});
    };
    handleGsmNumberChange(evt){
        this.setState({gsmNumber : evt.target.value});
    };



    handleValid() {
        this.validateEmail(this.state.email) ? this.setState({border: {border: '1px solid green'}}) : this.setState({border: {border: '1px solid red'}})
    }

    validatePassword() {
        (this.state.password === this.state.confirmPass) ? this.setState({border: {border: '1px solid green'}}) : {border: {border: '1px solid red'}}
    }
    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    handleClick(){
        console.log('dhdhdh')
        if (this.validateEmail(this.state.email)){
            axios.post('http://localhost:3030/inscription/company',{
                entitled : this.state.entitled,
                taxRegisterNumber : this.state.taxRegisterNumber,
                taxStatus: this.state.taxStatus,
                email : this.state.email,
                password : this.state.password,
                webSite : this.state.webSite,
                street: this.state.street,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                phoneNumber:this.state.phoneNumber,
                fax:this.state.fax,
                gsmNumber:this.state.gsmNumber
            }).then(res => {
                console.log("good") ;
                console.log(res);
                this.props.history.push('/profile')
            }).catch(err => {
                console.log('err', err);
                console.log('ghalta')
            });
        } else {
            alert('Write valid email');
        }

    };

    render(){
        return<div>
        <section className="hero is-success is-fullheight">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="column is-4 is-offset-4">
                        <h3 className="title has-text-grey">Inscription</h3>
                        <p className="subtitle has-text-grey">Entreprise</p>
                        <div className="box">
                            <figure className="avatar">
                                <img src="img/logo.png"/>
                            </figure>
                            <form>

                          


                                <Input type={'text'} value={this.state.entitled}
                                       onUpdate={this.handleEntitledChange} name={'Entitled'}
                                       placeholder={'Intitulé'} icon={'fa fa-user'} error={this.state.errorFirstName}
                                       handleBlur={this.handleBlurEntitled} label={'Titre'}/>
                                <Input type={'Number'} value={this.state.taxRegisterNumber}
                                       onUpdate={this.handleTaxRegisterNumberChange} name={'taxRegisterNumber'}
                                       placeholder={'TaxRegisterNumber'} 
                                        label={'Tax Register Number'}/>

                        
                            <br/>
                            <Input type={'text'} value={this.state.email} onUpdate={this.handleEmailChange}
                                   name={'email'}  placeholder={'Ton email'}
                                   icon={'fa fa-envelpe'} label={'Email'}/>

                            <Input type={'password'} value={this.state.password}
                                   onUpdate={this.handlePasswordChange} name={'password'}
                                   placeholder={'Mot de passe'} icon={"fas fa-key"}
                                    label={'Mot de passe'}/>

                            <Input type={'Number'} value={this.state.phoneNumber}
                                   onUpdate={this.handlePhoneNumberChange} name={'phoneNumber'}
                                   placeholder={'Numéro de telephone'}
                                   label={'Numéro de telephone'}/>


                          
                           
                          <Input type={'text'} value={this.state.webSite}
                                   onUpdate={this.handleWebSiteChange} name={'website'}
                                   placeholder={'Site Web'}
                                   label={'Site Web'}/>

                         
                                <button  className="button is-block is-info is-large is-fullwidth"  
                                onClick={this.handleClick} >Inscription</button>


                           
                           </form>
                        </div>
                        <p className="has-text-grey">
                            <Link to={"/connection"} >Connexion</Link> &nbsp;·&nbsp;
                            <a href="../">Oublier Mot de passe !</a> &nbsp;·&nbsp;
                            <a href="../">Aide?</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>


    </div>;





        };
    } ;



    InscriptionE.propTypes = {};
    InscriptionE.defaultProps = {};

    export default InscriptionE;