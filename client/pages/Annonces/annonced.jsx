import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';
import annonce from '../../scss/about/annonce.scss'
import Input from '../Form/Components/Input';
import {browserHistory} from 'react-router-dom';
import DropdownCategory from '../Form/Components/DropdownCategory';



class Annonced extends Component {




    constructor(props) {
        super(props);
        this.state = {
            ads: [],
        
        }
       
    }


   


    



    render() {
		const imput = {
			width : '50%'
		  };
        return (
            <div>
<div id="page-content">
		
		<div className="images-wrappe">

			<div id="image-prn-wrappe">
				<div className="image-pr">
					<ul className="slider">
						<li>
							<div className="img-pr"><img src="img/canon.jpg" value="530" alt="image"/></div>
						</li>
						
					</ul>
				</div>
			
			
			</div>
		</div>
		
		<div className="description-wrapper">
			<div className="titre-desc">
				<h2>A vendre</h2>

				<p>Canon 550D 70-200 f2.8</p>
			</div>

			<div className="ligne-desc"></div>
			<div className="description-desc">
				<h2>Description</h2>
				<p> Camera en bon état avec tous accessoires et carte memoire 8gb et un sacoch</p>
			</div>
			<div className="ligne-description"></div>
			<div className="time-desc">
				<img src="img/time.png" alt="time"/>
				<p>Il y'a 2 jours</p>
			</div>
			
		</div>



		<div className="details-wrapper">
			<div className="ville-detail">
				<p>Ville: <span>Tunis</span></p>
			</div>
			<div className="categorie-detail">
				<p>Categorie:  <span>Matériels informatiques</span></p>
			</div>
		</div>

	
		<div className="gerer-ann">
			<p>Gérer votre annonce:</p>
			<a href="#" className="modifier">
				<img src="img/modifier.png" alt="modifier"/>
				Modifier
			</a>
			<a href="#" className="supprimer">
				<img src="img/supprimer.png" alt="supprimer"/>
				Supprimer
			</a>
		</div>
<div>
                                        <Input style={ imput}  type={'text'} value={this.state.firstName} 
                                           onUpdate={this.handleFirstNameChange} name={'firstName'}
                                           placeholder={'Titre'} icon={'fa fa-user'} 
                                          label={'Titre'}/>

										     <Input type={'text'} value={this.state.lastName}
                                           onUpdate={this.handleLastNameChange} name={'lastName'}
                                           placeholder={'Description'} icon={'fa fa-user'} 
                                          label={'Description'}/>

										  <Input  type={'number'} value={this.state.lastName}
                                           onUpdate={this.handleLastNameChange} name={'lastName'}
                                           placeholder={'Prix'} icon={'fa fa-user'} 
                                          label={'Prix'}/>

                                               <div className="field">
                                        <div className="control">
                                        <p className="mine">  Categorie </p>
                                            <DropdownCategory label={'Category'} onUpdate={this.handleCategoryChange}
                                                              value={this.state.category} />
                                        </div>
                                    </div>
</div>
	</div>
               </div>
         
        )
    };
}

    Annonced.propTypes = {};
    Annonced.defaultProps = {};

export default Annonced;