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
            zip : ""

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

    handleClick() {
console.log("clicked")
        const id = localStorage.getItem('id');
console.log("id user" +id)
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
                id : id
            }).then(res => {
                console.log("good") ;
                console.log(res);
                this.props.history.push('/profile')
            }).catch(err => {
                console.log('err', err);
                console.log('ghalta')
            });


    };


        render() {
        return (
            <div>
                <section className="hero is-fullheight">

                    <div className="hero-body">
                        <div className="container">
                            <div className="column is-4 is-offset-4">


                                <div className="box">
                                    <h3 className="titlelogin">POSTER ANNONCE</h3>


                                                <h4> Title</h4>
                                                <Input type={'text'} value={this.state.title} onUpdate={this.handleTitleChange}
                                                       name={'title'}  placeholder={'Ton titre'}
                                                       icon={'fa fa-envelpe'}
                                                     />



                                    <Input type={'text'} value={this.state.email} onUpdate={this.handleEmailChange}
                                           name={'email'}  placeholder={'Ton email'}
                                           icon={'fa fa-envelpe'} label={'Email'}/>


                                                <h4> Price </h4>
                                                <Input type={'text'} value={this.state.price} onUpdate={this.handlePriceChange}
                                                       name={'price'}  placeholder={'Ton Prix'}
                                                       icon={'fa fa-envelpe'}
                                                />


                                            <h4> Category</h4>

                                            <DropdownCategory label={'Category'} onUpdate={this.handleCategoryChange}
                                                              value={this.state.category} />

                                            <h4> SubCategory</h4>
                                               <DropdownS label={'SubCategory'} onUpdate={this.handleSubCategoryChange}
                                                       value={this.state.subCategory} />


                                              <h4> City</h4>
                                            <DropdownLocation label={'City'} onUpdate={this.handleCityChange}
                                                               value={this.state.city}/>



                                                <h4> Street</h4>
                                                <Input type={'text'} value={this.state.street} onUpdate={this.handleStreetChange}
                                                       name={'street'}  placeholder={'Street'}
                                                      />
                                    <h4> Zip Code </h4>
                                    <Input type={'text'} value={this.state.zip}
                                           onUpdate={this.handleZipChange} name={'Zip'}
                                            placeholder={'Zip Code'} icon={"fas fa-key"}
                                    />
                                    <div class="field">
  <div className="file is-info has-name">
    <label className="file-label">
      <input className="file-input" type="file" name="resume"/>
      <span className="file-cta">
        <span className="file-icon">
          <i className="fas fa-upload"></i>
        </span>
        <span className="file-label">
          Images
        </span>
      </span>
      <span className="file-name">
        Screen Shot 2017-07-29 at 15.54.25.png
      </span>
    </label>
  </div>
</div>
                                    <h4> Description </h4>
                                    <textarea className="textarea"  placeholder="Description" value={this.state.description} onChange={this.handleDescriptionChange} />
                                    <br/>
                                    
                                            <Button   class={'button is-block is-info is large'}
                                                      text={'Poster annonce'}  clickHandler={this.handleClick}/>


                                </div>

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