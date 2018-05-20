import React from 'react';
import axios from 'axios';



class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ads: []
        }
        this.handleClick1 = this.handleClick1.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
    
                this.props.history.push('/annonce') ;
          
    }
    handleClick1() {
    
        this.props.history.push('/listannonce') ;
  
}
handleClick2() {
    
    this.props.history.push('/particular') ;

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


    render() {

        let ads = this.state.ads;


        return (

            <div>
                <div className="header-home">

                    <div className="image-home">
                        <img src="img/home-image.jpg" alt="home-image"  />

                    </div>

                    <div className="description-home">

                        <p className="desc-home">Bienvenue Dans notre application cherchi.tn <br/> Merci pour notre école
                            ESEN </p>
                    </div>




                    <div className="depose-ann-btn">
                        <center>
                               <button  className="depose-btn"  onClick={this.handleClick} >
                                <img  src="img/pen.png" alt="pen"/> <p>Déposer votre annonce</p>
                             </button>
                        </center>
                    </div>
                </div>


                <div id="chercher-contant">
                    <h1 className="titre chercher-titre">Chercher une annonce :</h1>
                    <div className="zone-recherche">
                        <div className="cherchez-vous">
                            <img src="img/chercher.png" alt="Chercher"/>
                            <input type="text" name="text" placeholder="Que cherchez-vous?"/>
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
                        <div className="region-recherche">
                            <img src="img/chercher.png" alt="localisation" float="left"/>
                            <select id="country" name="country">
                                <option selected>Categories</option>
                                <option>Technologies</option>
                                <option>Immobilier</option>
                                <option>Voitures et motos</option>
                                <option>Electromenager</option>
                                
                            </select>

                        </div>
                        <button className="btn-chercher" onClick={this.handleClick1}>
                            <p>Chercher</p>
                            <img src="img/flecheD.png" alt="fleche"/>
                        </button>
                    </div>
                </div>


                <div id="about-us-containt">
                    <div className="text-about">
                        <h1 className="titre about-titre">A propos :</h1>
                        <p><span> Cherchi</span> est un site web d'annonces en generale 
                            fait pour les utilisateurs qui ont besoin de vente d'un
                            ou plusieurs matériels 
                        </p>
                    </div>
                    <div className="img-about">
                        <img src="img/image-about.png" alt="image about"/>
                    </div>
                </div>


                <div id="ca-marche">
                    <h1 className="titre marche-titre">Comment ça marche :</h1>
                    <div className="img-marche">
                        <div className="marche-img1"><img src="img/marche1.png" alt="image-marche"/></div>
                        <div className="marche-img2"><img src="img/marche2.png" alt="image-marche"/></div>
                        <div className="marche-img3"><img src="img/marche3.png" alt="image-marche"/></div>
                        <div className="marche-img4"><img src="img/marche4.png" alt="image-marche"/></div>
                    </div>
                    <div className="marche-num">
                        <p className="marche-num1">1</p>
                        <p className="marche-num2">2</p>
                        <p className="marche-num3">3</p>
                        <p className="marche-num4">4</p>
                    </div>
                    <div className="marche-desc">
                        <p className="marche-desc1 comment-marche">Chercher une annonce</p>
                        <p className="marche-desc2 comment-marche">Proposer un offre</p>
                        <p className="marche-desc3 comment-marche">Ou tu veux le chercher</p>
                        <p className="marche-desc4 comment-marche">Confirmer l'affaire</p>
                    </div>
                </div>


                <div className="parallax-inscription">
                    <div className="parallax-target" data-parallax="scroll" data-image-src="img/parallax.jpg">
                        <h1 className="titre parallax-titre">Créer un compte et déposer</h1>
                        <h1 className="titre parallax-titre parallax-titre-second">Votre premier produit</h1>
                        <center>

                            <button className="inscription-parallax" onClick={this.handleClick2}>Inscription</button>
                        </center>
                    </div>
                    <div className="middle section2">
                        <div className="trasparent-parallax"></div>
                    </div>
                </div>



                <div id="top-annonce">
                    <h1 className="titre top-titre">Top annonce :</h1>
                    <div className="top-annonce">

                        <div className="annonce-forme ann1">
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
                        <div className="annonce-forme ann2">
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

                        <div className="annonce-forme ann3">
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
                    </div>
                    <div className="voir-plus-annonce">
                        <center>
                            <button className="plus-ann" onClick={this.handleClick1}>Plus d'annonce
                            </button>
                        </center>
                    </div>
                </div>


                <div id="they-say">
                    <h1 className="titre top-titre">Ce que nos utilisateurs disent :</h1>
                    <div className="say-content">
                        <div className="say-bleu"></div>
                        <div className="yellow-content">
                            <div className="yellow"><img src="img/yellow-content.png" alt="yellow"/></div>
                            <div className="user-img"><img src="img/user1.jpg" alt="user1"/></div>
                            <div className="content-say">

                                <div className="saay"><img src="img/saay.png" alt="say"/></div>
                                <p className="say-desc">
                                    Excellent travail <strong> Ibrahim Chennaoui et Walid Hmedi </strong> bonne continuation
                                    ,
                                    je vous souhaite beaucoup de succès </p>
                                <div className="line-say"></div>
                                <div className="name-say">
                                    <p className="name-titre">Mr Yassine ben youssef</p>
                                    <p className="name-place">Manouba</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="parallax-inscription para-subscribe">
                    <div className="parallax-target" data-parallax="scroll" data-image-src="img/parallax2.jpg">
                        <h1 className="titre parallax-titre">Entrez ci-dessous votre email et</h1>
                        <h1 className="titre parallax-titre parallax-titre-second">ne ratez pas l'occasion</h1>
                        <center>
                            <div className="cherchez-vous email-subcribe">
                                <img src="img/img-mail.png" alt="mail"/>
                                    <input type="email" name="email-subcribe" placeholder="Votre adresse mail .." />
                            </div>
                            <button className="subscribe-btn">S'abonner</button>
                        </center>
                    </div>
                </div>





                <ul className="PlayerList">
                    {this.props.data}
                    {
                        ads.map(function (a) {
                            return <li key={a._id}>
                                <div>
                                    <p>
                                        <lu>{a.title}</lu>
                                        <strong> {a.price}  </strong></p>

                                </div>
                            </li>
                        })
                    }
                </ul>


            </div>
        );
    };

}


export default Home;