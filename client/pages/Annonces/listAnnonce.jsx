import React, { Component } from 'react';
import {Link,Redirect} from 'react-router-dom'
import axios from 'axios';
import SearchInput, {createFilter} from 'react-search-input'

import {browserHistory} from 'react-router-dom';

const KEYS_TO_FILTERS = ['title']

class Listannonce extends Component {




    constructor(props) {
        super(props);
        this.state = {
            ads: [],
            searchTerm: ''
        }
        this.searchUpdated = this.searchUpdated.bind(this)
    }


    componentDidMount() {
        axios
            .get('http://localhost:3040/ads/annonces')
            .then(res => {

                console.log("data" + res.data)
                this.setState({ads: res.data}
                )
            })
            .catch(err => console.log(err))
    }


    searchUpdated (term) {
        console.log("djdjd")
        this.setState({searchTerm: term})
    }



    render() {
        let ads = this.state.ads;
        const filteredads = ads.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        return (
            <div>

                <div id="chercher-contan">
                    <div className="zone-recherche">
                        <div className="cherchez-vous">
                            <img src="img/chercher.png" alt="Chercher"/>

                            <SearchInput className="search-input" onChange={this.searchUpdated} value={this.state.searchTerm} />
                        </div>
                        <div className="region-recherche">
                            <img src="img/localisation.png" alt="localisation" float="left"/>
                                <select id="country" name="country">
                                    <option selected>Toute la tunisie</option>
                                    <option>Ariana</option>
                                    <option>Béja</option>
                                    <option>Ben Arous</option>
                                    <option>Bizert</option>
                                    <option>Gabés</option>
                                    <option>Gafsa</option>
                                    <option>Jandouba</option>
                                    <option>Kairouan</option>
                                    <option>Kasserine</option>
                                    <option>Kbéli</option>
                                    <option>La Mannouba</option>
                                    <option>Le Kef</option>
                                    <option>Mahdia</option>
                                    <option>Médenine</option>
                                    <option>Monastir</option>
                                    <option>Nabeul</option>
                                    <option>Sfax</option>
                                    <option>Sidi Bouzid</option>
                                    <option>Siliana</option>
                                    <option>Sousse</option>
                                    <option>Tataouine</option>
                                    <option>Touzer</option>
                                    <option>Tunis</option>
                                    <option>Zaghouan</option>
                                </select>
                        </div>
                        <button className="btn-chercher">
                            <p>Chercher</p>
                            <img src="img/flecheD.png" alt="fleche"/>
                        </button>
                    </div>
                </div>


                <div id="recherche-resultat">
                    <div className="page-btn">
                        <div className="page-precedente">
                            <a href="">Page précédente</a>
                        </div>
                        <div className="page-suivante">
                            <a href="">Page suivante</a>
                        </div>
                    </div>


                    {filteredads.map(function(ad){
                        return    <div className="annonce-resultat ann1" key={ad._id}>
                            <div className="img-content">
                                <img src="img/ann11.jpg" alt="image annonce 1"/>
                            </div>
                            <div className="description-ann">
                                <div className="titre-annonce">
                                    <h2> {ad.title } </h2>
                                </div>
                                <div className="categorie">
                                    <p>Categorie: {ad.category }</p>
                                </div>
                                <div className="sous-desc">
                                    <div className="ann-time">
                                        <img src="img/time.png" alt="time"/>
                                        <p>Il y a 2 jours</p>
                                    </div>
                                    <div className="ann-localisation">
                                        <img src="img/localisation.png" alt="localisation"/>
                                        <p>Tunis</p>
                                    </div>

                                    <div className="ann-localisation">
                                        <img src="img/localisation.png" alt="localisation"/>
                                        <h2>Prix : {ad.price }</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="voir-details-btn">
                                <a href="annonce.html">Voir détails</a>
                            </div>
                        </div>;
                    })}









                    <div className="annonce-resultat ann1">
                        <div className="img-content">
                            <img src="img/ann2.png" alt="image annonce 1"/>
                        </div>
                        <div className="description-ann">
                            <div className="titre-annonce">
                                <h2>une canon 7D 15-85 ISO et tout ces accessoires</h2>
                            </div>
                            <div className="categorie">
                                <p>Categorie: Camera</p>
                            </div>
                            <div className="sous-desc">
                                <div className="ann-time">
                                    <img src="img/time.png" alt="time"/>
                                        <p>Il y a 3 jours</p>
                                </div>
                                <div className="ann-localisation">
                                    <img src="img/localisation.png" alt="localisation"/>
                                        <p>Mahdia</p>
                                </div>
                            </div>
                        </div>
                        <div className="voir-details-btn">
                            <a href="">Voir détails</a>
                        </div>
                    </div>

                    <div className="annonce-resultat ann1">
                        <div className="img-content">
                            <img src="img/ann3.png" alt="image annonce 1"/>
                        </div>
                        <div className="description-ann">
                            <div className="titre-annonce">
                                <h2> un objectif canon ef 24mm f 2 8 is usm</h2>
                            </div>
                            <div className="categorie">
                                <p>Categorie: Camera</p>
                            </div>
                            <div className="sous-desc">
                                <div className="ann-time">
                                    <img src="img/time.png" alt="time"/>
                                        <p>Il y a 5 jours</p>
                                </div>
                                <div className="ann-localisation">
                                    <img src="img/localisation.png" alt="localisation"/>
                                        <p>Bizerte</p>
                                </div>
                            </div>
                        </div>
                        <div className="voir-details-btn">
                            <a href="">Voir détails</a>
                        </div>
                    </div>


                    <div className="annonce-resultat ann1">
                        <div className="img-content">
                            <img src="img/ann1.png" alt="image annonce 1"/>
                        </div>
                        <div className="description-ann">
                            <div className="titre-annonce">
                                <h2> une canon 550D 70-200 f2.8</h2>
                            </div>
                            <div className="categorie">
                                <p>Categorie: Camera</p>
                            </div>
                            <div className="sous-desc">
                                <div className="ann-time">
                                    <img src="img/time.png" alt="time"/>
                                        <p>Il y a 2 jours</p>
                                </div>
                                <div className="ann-localisation">
                                    <img src="img/localisation.png" alt="localisation"/>
                                        <p>Tunis</p>
                                </div>
                            </div>
                        </div>
                        <div className="voir-details-btn">
                            <a href="annonce.html">Voir détails</a>
                        </div>
                    </div>


                    <div className="annonce-resultat ann1">
                        <div className="img-content">
                            <img src="img/ann1.png" alt="image annonce 1"/>
                        </div>
                        <div className="description-ann">
                            <div className="titre-annonce">
                                <h2> une canon 550D 70-200 f2.8</h2>
                            </div>
                            <div className="categorie">
                                <p>Categorie: Camera</p>
                            </div>
                            <div className="sous-desc">
                                <div className="ann-time">
                                    <img src="img/time.png" alt="time"/>
                                        <p>Il y a 2 jours</p>
                                </div>
                                <div className="ann-localisation">
                                    <img src="img/localisation.png" alt="localisation"/>
                                        <p>Tunis</p>
                                </div>
                            </div>
                        </div>
                        <div className="voir-details-btn">
                            <a href="annonce.html">Voir détails</a>
                        </div>
                    </div>

                    <div className="num-page">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                    </div>

                </div>

            </div>
        )
    };
}

    Listannonce.propTypes = {};
    Listannonce.defaultProps = {};

export default Listannonce;