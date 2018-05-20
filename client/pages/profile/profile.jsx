import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import Input from '../Form/Components/Input';

class profile extends Component {


    constructor() {
        super();
        this.state = {
            profile: '',
            firstName:'',
            lastName:'',
            email:'',
            phoneNumber: 28809212
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);

    };


    componentDidMount(){
        //const authorization = "Some Name" + cookie.load('token').replace("JWT","")
        const token = localStorage.getItem('token');
        const id = localStorage.getItem('id');
        //console.log("teh token is " + token)

        axios.post('http://localhost:3040/connection/profile', {
            id: id,

        }).then((res) => {
            console.log("gooooooooooooooooooo"+ JSON.stringify( res.data))
            this.setState({profile : JSON.stringify(res.data.user)})
            this.setState({firstName : res.data.user.firstName})
            this.setState({lastName : res.data.user.lastName})
            this.setState({email : res.data.user.email})
            console.log("mon profile is" + this.state.profile) 
        }).catch((err) => {
            console.log('err : ', err);
            console.log("ghalta")
        });





    }

  handleFirstNameChange(evt) {
      this.setState({firstName: evt.target.value}) };

  handleLastNameChange(evt) {
      this.setState({lastName: evt.target.value}) };

  handleEmailChange(evt) {
      this.setState({email: evt.target.value})  };

 
  handlePhoneNumberChange(evt) {
    this.setState({phoneNumber: evt.target.value}) };


     handleClick() {
     axios.post("http://localhost:3040/connection/update", {
        id : localStorage.getItem('id'),
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          phoneNumber:this.state.phoneNumber
         
      }).then(res => {
          console.log("good") ;
          console.log(res);   
          this.setState({lastName : req.data.user.lastName})
          this.setState({firstName : req.data.user.firstName})
          this.setState({email : req.data.user.email})
          this.setState({phoneNumber : req.data.user.phoneNumber})
         
      }).catch(err => {
          console.log('err', err);
          console.log('ghalta')
      });
  

};
    render() {
        let profile = this.state.profile ;
        let lastName =this.state.lastName;
        let firstName = this.state.firstName ;
        let email = this.state.email ;
        let phoneNumber = this.state.phoneNumber ;

        return (
            <div>



            <div className="tile is-ancestor">
        <div className="tile is-4 is-vertical is-parent">
          <div className="tile is-child box">
          <figure className="image is-4by3">
           <img  src="img/pic1.jpg"/>
         </figure>
            <p className="title"> <span className="icon">
  <i className="fas fa-home"></i>
</span> Profile</p>
<div className="notification is-info">
<p className="is-size-5"> <strong> Pseudo * :</strong>   {lastName} {firstName} </p>
</div>
             <div className="notification  is-info">
<p className="is-size-5"> <strong>Numéro de téléphone :</strong> {phoneNumber}   </p>
             </div>
             <div className="notification is-info">
<p className="is-size-5"> <strong>Email :</strong> {email}  </p>
</div>
 <div className="notification  is-info">
<p className="is-size-5"> <strong>Date d'inscription : </strong> 01/02/2018  </p>
            
             </div>
          
            

          <p> <a className="button is-info is-outlined">
    <span>Desactiver Compte </span>
    <span className="icon is-small">
      <i className="fas fa-times"></i>
    </span>
    </a></p>
          </div>

          <div className="tile is-child box">

          <h2 className="subtitle is-2">Contact</h2><br/>
           
            <p>Address : </p><br/>
            <p>Facebook : </p><br/>
          </div>

        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
          <nav className="breadcrumb" aria-label="breadcrumbs">
  <ul>
   
    <li>
      <a href="/profili">
        <span className="icon is-small">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        <span>Mes annonces</span>
      </a>
    </li>
    <li className="is-active">
      <a href="#">
        <span className="icon is-small">
          <i className="fas fa-puzzle-piece" aria-hidden="true"></i>
        </span>
        <span>Paramétres</span>
        
      </a>
    </li>
    <li >
      <a href="#">
        <span className="icon is-small">
          <i className="fas fa-thumbs-up" aria-hidden="true"></i>
        </span>
        <span>Favoris</span>
      </a>
    </li>
  </ul>
</nav>
            <p className="title">Paramétres :</p>

            <Input type={'text'} value={this.state.firstName}
                                           onUpdate={this.handleFirstNameChange} name={'firstName'}
                                           placeholder={'Nom'} icon={'fa fa-user'} 
                                          label={'Nom'}/>
                                        
         <Input type={'text'} value={this.state.lastName}
                                           onUpdate={this.handleLastNameChange} name={'lastName'}
                                           placeholder={'Prénom'} icon={'fa fa-user'} 
                                          label={'Prénom'}/>

                                <br/>

                                <Input type={'text'} value={this.state.email} onUpdate={this.handleEmailChange}
                                       name={'email'}  placeholder={'Ton email'}
                                       icon={'fa fa-envelpe'} label={'Email'}/>

                                        <Input type={'Number'} value={this.state.phoneNumber} onUpdate={this.handlePhoneNumberChange}
                                       name={'phone'}  placeholder={'numéro de telephone'}
                                       icon={'fa fa-envelpe'} label={'GSM'}/>


                                     
                                       
                                      
                                       <Button  className="button is-block is-info is-large is-fullwidth"  
                                    onClick={this.handleClick}>Modifier</Button>

          </div>
        </div>
      </div>


            </div>

        );
    }
}
profile.propTypes = {};
profile.defaultProps = {};

export default profile;
