import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';
import Input from '../Form/Components/Input';
import Button  from '../Form/Components/Button';
import DropdownCategory from '../Form/Components/DropdownCategory';
import DropdownLocation from '../Form/Components/DropdownLocation';
import DropdownS from '../Form/Components/DropdownSub';
import DropdownStatut from '../Form/Components/DropdownStatut';
import {browserHistory} from 'react-router-dom';
import ImagesUploader from 'react-images-uploader';
import propTypes from 'prop-types';
import FileBase64 from 'react-file-base64';

class Annonce extends Component {
    constructor () {
        super();
        this.state = {
            title : "",
            price : "",
            description : "",
            category : "",
            subCategory : "",
            email:"",
            city : "",
            street : "",
            zip : "",
            imageName : ""

        };
        this.handleClick = this.handleClick.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleSubCategoryChange = this.handleSubCategoryChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStreetChange = this.handleStreetChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);


    };
    handleTitleChange(evt){
        this.setState({title: evt.target.value});
    };
    handleCategoryChange(evt){
        this.setState({category: evt.target.value});
    };

    handleSubCategoryChange(evt){
        this.setState({subCategory : evt.target.value});
    };
    handlePriceChange(evt){
        this.setState({price : evt.target.value});
    };


    handleStreetChange(evt) {
        this.setState({street: evt.target.value})
    };

    handleCityChange(evt) {
        this.setState({city: evt.target.value});
    }

    handleZipChange(evt) {
        this.setState({zip: evt.target.value});
    }
        handleDescriptionChange(evt){
            this.setState({description : evt.target.value});
        };
    handleEmailChange(evt) {
        this.setState({email: evt.target.value});

    };
    validateEmail(email) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


    getFiles(files){
        console.log("file" +JSON.stringify(files))
        this.setState({ files: files.base64 })
        this.setState({imageName: files.name})
      }

    handleClick(e) {

        e.preventDefault();
console.log("clicked")
        const id = localStorage.getItem('id');
console.log("id user" +id + "img name" + this.state.imageName)
            axios.post("http://localhost:3040/ads/annonce", {
                title: this.state.title,
                price: this.state.price,
                description: this.state.description,
                category:this.state.category,
                subCategory:this.state.subCategory,
                email: this.state.email,
                city: this.state.city,
                street: this.state.street,
                zip:this.state.zip,
                id : id,
                imageName :this.state.imageName,
                file:this.state.files
            }).then(res => {
                console.log("good") ;
                console.log(res);
                //this.props.history.push('/profile')
            }).catch(err => {
                console.log('err', err);
                console.log('ghalta')
            }); 


    };


        render() {
        return (
            <div>
                 <section className="hero is-success is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-4 is-offset-4">
                            <h3 className="title has-text-grey">Déposer Annonce</h3>
                           
                            <div className="box">
                                <figure className="avatar">
                                    <img src="img/logo.png"/>
                                </figure>
                                <form>
                                    <div className="field">
                                        <div className="control">
                                        <Input type={'text'} value={this.state.title} onUpdate={this.handleTitleChange}
                                                       name={'title'}  placeholder={'Ton titre'} 
                                                       icon={'fa fa-envelpe'} label={'Titre'} 
                                                     />
                                        </div>
                                    </div>


                                    <div className="field">
                                        <div className="control">
                                        <Input type={'text'} value={this.state.price} onUpdate={this.handlePriceChange}
                                                       name={'price'}  placeholder={'Ton Prix'}
                                                       icon={'fa fa-envelpe'} label={'Prix'} 
                                                />
                                        </div>
                                    </div>

 

                                               <div className="field">
                                        <div className="control">
                                        <p className="mine">  Categorie </p>
                                            <DropdownCategory label={'Category'} onUpdate={this.handleCategoryChange}
                                                              value={this.state.category} />
                                        </div>
                                    </div>



                                               <div className="field">
                                        <div className="control">
                                        <p className="mine">  Sous-Categorie </p>
                                            <DropdownS label={'SubCategory'} onUpdate={this.handleSubCategoryChange}
                                                       value={this.state.subCategory} />
                                        </div>
                                    </div>

                                                
                                                


                                           

                                               <div className="field">
                                        <div className="control">
                                        <p className="mine">  city</p>
                                        <DropdownLocation label={'City'} onUpdate={this.handleCityChange}
                                                               value={this.state.city}/>
                                        </div>
                                    </div>

                                
                                               
                                <div className="field">
                                        <div className="control">
                                        <Input type={'text'} value={this.state.street} onUpdate={this.handleStreetChange}
                                                       name={'street'}  placeholder={'Street'} label={'Rue'} 
                                                />
                                        </div>
                                    </div>


                                              
                                            

                                   <div className="field">
                                        <div className="control">
                                        <Input type={'text'} value={this.state.zip}
                                           onUpdate={this.handleZipChange} name={'Zip'}
                                            placeholder={'Zip Code'} icon={"fas fa-key"} label={'Code Postal'} 
                                                />
                                        </div>
                                    </div>

                                    <div className="field">
                                        <div className="control">
                                        <p className="mine">  Description</p>
                                        <textarea className="textarea"  placeholder="Description" 
                                        value={this.state.description} onChange={this.handleDescriptionChange} />

                                        </div>
                                    </div>
                                            
                                   
                                 
 
                                    <FileBase64
        multiple={ false }
        onDone={ this.getFiles.bind(this) } />
		

                                   
                                    
<button  className="button is-block is-info is-large is-fullwidth"  onClick={this.handleClick} >Deposer annonce</button>


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
        )
    };
}

Annonce.propTypes = {};
Annonce.defaultProps = {};

export default Annonce;