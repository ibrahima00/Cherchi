import React, { Component } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import Input from '../Form/Components/Input';


class profili extends Component {


    constructor() {
        super();
        this.state = {
            profile: '',
            firstName:'',
            lastName:'',
            email:'',
            phoneNumber: 28809212
        }
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

        axios.post('http://localhost:3040/connection/profili', {
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
      <a href="/profile">
        <span className="icon is-small">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        <span>Paramétres</span>
      </a>
    </li>
    <li className="is-active">
      <a href="#">
        <span className="icon is-small">
          <i className="fas fa-puzzle-piece" aria-hidden="true"></i>
        </span>
        <span>Mes annonces</span>
        
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
            <p className="title">Mes annonces :</p>

      
                   
                    <div className="top-annonce">

                        <div className="annonce-forme an1">
                            <div className="img-annonce"><img src="img/voiture.jpg" alt="annonce"/></div>
                            <div className="desc-ann">
                                <p className="titre-ann">peugeot 508 essence</p>

                                <div className="price">
                                    <p>Prix: <span>30 000</span> DT</p>
                                </div>

                                <div className="time-ann">
                                    <img src="img/time.png" alt="time"/>
                                    <p>Il y a 3 jours </p>

                                </div>


                                <div className="localisation-ann">
                                    <img src="img/localisation2.png" alt="time"/>
                                    <p>Zahrouni </p>
                                </div>

                            </div>
                            <button className="ann-details">
                                <a href="annonce.html"> Voir les details</a>
                                <img src="img/flecheBleu.png" alt=""/>
                            </button>
                        </div>
                        <div className="annonce-forme an1">
                            <div className="img-annonce"><img src="img/moto.jpg" alt="annonce"/></div>
                            <div className="desc-ann">
                                <p className="titre-ann"> Yamaha stunt 2015</p>

                                <div className="price">
                                    <p>Prix: <span> 1700</span> DT</p>
                                </div>

                                <div className="time-ann">
                                    <img src="img/time.png" alt="time"/>
                                    <p>Il y a 5 jours </p>
                                </div>

                                <div className="localisation-ann">
                                    <img src="img/localisation2.png" alt="time"/>
                                    <p>Zahrouni </p>
                                </div>

                            </div>
                            <button onClick="location.href='annonce.html'" className="ann-details">
                                <a href="#"> Voir les details</a>
                                <img src="img/flecheBleu.png" alt=""/>
                            </button>
                        </div>
                                    
                        <div className="annonce-forme an1">
                            <div className="img-annonce"><img src="img/sibiria.jpg" alt="annonce"/></div>
                            <div className="desc-ann">
                                <p className="titre-ann"> une casque
                                    bluetooth  </p>
                                <div className="price">
                                    <p>Prix: <span>40</span> DT</p>
                                </div>
                                <div className="time-ann">
                                    <img src="img/time.png" alt="time"/>
                                        <p>Il y a 5 jours </p>
                                </div>

                                <div className="localisation-ann">
                                    <img src="img/localisation2.png" alt="time"/>
                                        <p>Zahrouni </p>
                                </div>
                            </div>
                            <button className="ann-details">
                                <a href="#"> Voir les details</a>
                                <img src="img/flecheBleu.png" alt=""/>
                            </button>
                        </div>
                        <div className="voir-plus-annonce">
                        <center>
                            <button className="plus-ann" onClick={this.handleClick1}>Plus d'annonce
                            </button>
                        </center>
                    </div>
                        
                    </div>
                  
                </div>


          </div>
        </div>
      </div>


           

        );
    }
}
profili.propTypes = {};
profili.defaultProps = {};

export default profili;
