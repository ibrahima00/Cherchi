import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios';
import Input from '../Form/Components/Input';
import Button from '../Form/Components/Button';
import DropdownAge from '../Form/Components/DropdownAge';
import DropdownSituation from '../Form/Components/DropdownSituation';
import {browserHistory} from 'react-router-dom';


class InscriptionP extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            city: "",
            state: "",
            gender: "",
            age:"",
            phoneNumber:"",
            situation:"",
            errorFirstName: '',
            errorLastName: '',
            errorEmail: '',
            confirmPass: '',
            display: ''
        };
        this.handleClick = this.handleClick.bind(this);

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleAgeChange =this.handleAgeChange.bind(this);
        this.handlePhoneNumberChange =this.handlePhoneNumberChange.bind(this);
        this.handleSituationChange =this.handleSituationChange.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.handleBlurFirstName = this.handleBlurFirstName.bind(this);
        this.handleLastNameBlur = this.handleLastNameBlur.bind(this);
        this.handleValid = this.handleValid.bind(this);
    };

    handleBlurFirstName() {
        if ((this.state.firstName.length < 4) || (!isNaN(this.state.firstName))) {
            this.setState({errorFirstName: 'nom trop court '});
        }
        else {
            this.setState({errorFirstName: ''});
        }
    }

    handleLastNameBlur() {
        if ((this.state.lastName.length < 4) || (!isNaN(this.state.lastName))) {
            this.setState({errorLastName: 'prenom trop court'});
        }
        else {
            this.setState({errorLastName: ''});
        }
    }





    handleFirstNameChange(evt) {
        this.setState({firstName: evt.target.value});
    };

    handleLastNameChange(evt) {
        this.setState({lastName: evt.target.value});
    };

    handleEmailChange(evt) {
        this.setState({email: evt.target.value});
    };

    handlePasswordChange(evt) {
        this.setState({password: evt.target.value});
    };

    handleAgeChange(evt) {
        this.setState({age: evt.target.value});
    };

    handleStateChange(evt) {
        this.setState({state: evt.target.value});
    }

    handleCityChange(evt) {
        this.setState({city: evt.target.value});
    }


    handleGenderChange(evt) {
        this.setState({gender: evt.target.value});
    }

    handlePhoneNumberChange(evt) {
        this.setState({phoneNumber: evt.target.value});
    }
    handleSituationChange(evt) {
        this.setState({situation: evt.target.value});
    }

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

    handleClick() {

        if (this.validateEmail(this.state.email)) {
            axios.post("http://localhost:3040/inscription/particular", {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
                age:this.state.age,
                situation:this.state.situation,
                phoneNumber:this.state.phoneNumber,
                city: this.state.city,
                state: this.state.state,
                gender: this.state.gender,
            }).then(res => {
                console.log("good") ;
                console.log(res);
                localStorage.setItem('token',res.data.natija.token);
                this.props.history.push('/profile')
            }).catch(err => {
                console.log('err', err);
                console.log('ghalta')
            });
        } else {
            alert('Write valid email');
        }

    };


    render() {
        return  <div>
            <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h3 className="title has-text-grey">Inscription</h3>
                            <p className="subtitle has-text-grey">Particulier</p>
                            <div className="box">
                                <figure className="avatar">
                                    <img src="img/logo.png"/>
                                </figure>
                                <form>

                                <div className="field-body">


                                    <Input type={'text'} value={this.state.firstName}
                                           onUpdate={this.handleFirstNameChange} name={'firstName'}
                                           placeholder={'Nom'} icon={'fa fa-user'} error={this.state.errorFirstName}
                                           handleBlur={this.handleBlurFirstName} label={'Nom'}/>
                                    <Input type={'text'} value={this.state.lastName}
                                           onUpdate={this.handleLastNameChange} name={'lastName'}
                                           placeholder={'Prénom'} icon={'fa fa-user'} error={this.state.errorLastName}
                                           handleBlur={this.handleLastNameBlur} label={'Prénom'}/>

                                </div>
                                <br/>
                                <Input type={'text'} value={this.state.email} onUpdate={this.handleEmailChange}
                                       name={'email'}  placeholder={'Ton email'}
                                       icon={'fa fa-envelpe'} label={'Email'}/>

                                <Input type={'password'} value={this.state.password}
                                       onUpdate={this.handlePasswordChange} name={'password'}
                                       placeholder={'Mot de passe'} icon={"fas fa-key"}
                                        label={'Mot de passe'}/>

                                <Input type={'text'} value={this.state.phoneNumber}
                                       onUpdate={this.handlePhoneNumberChange} name={'phoneNumber'}
                                       placeholder={'Numéro de telephone'}
                                       label={'Numéro de telephone'}/>


                              
                               
                              <Input type={'Number'} value={this.state.age}
                                       onUpdate={this.handleAgeChange} name={'age'}
                                       placeholder={'Ton age'}
                                       label={'Age'}/>

                              <p className="mine">  Situation </p>
                                <DropdownSituation label={'Situation'} onUpdate={this.handleSituationChange}
                                                   value={this.state.situation}/>
                                    <button  className="button is-block is-info is-large is-fullwidth"  onClick={this.handleClick} >Inscription</button>


                               
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
}

InscriptionP.propTypes = {};
InscriptionP.defaultProps = {};

export default InscriptionP;