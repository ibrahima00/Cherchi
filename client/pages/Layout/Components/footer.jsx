import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const Footer =(props)=>{
    return (
        <footer className="footer">

            <div className="columns is-desktop">
                <div className="column is-mobile  is-one-quarter-desktop is-one-third-widescreen is-one-quarter-fullhd">
                    <h1>Farkess :D</h1>
                    <h2 className="cntctfooter">contact@farkess.tn></h2>
                </div>

                <div className="column is-mobile">
                    <h1 className="tf"> Job</h1>
                    <Link to = {'/'} className="flink" >TROUVER une société</Link><br/>
                    <Link to = {'/'} className="flink" >TROUVER un employé</Link><br/>
                    <br/>
                    <br/>
                    <Link to = {'/'} className="" >
                        <img alt="pagefacebook" src="/img/footer/iconfbfooter.png"/>
                    </Link>
                    <Link to = {'/'} className="" >
                        <img alt="instagram" src="/img/footer/iconinstafooter.png"/>
                    </Link>
                    <Link to = {'/'} className="" >
                        <img alt="linkedin" src="/img/footer/iconinfooter.png"/>
                    </Link>
                    <Link to = {'/'} className="" >
                        <img alt="tweeter" src="/img/footer/icontwfooter.png"/>
                    </Link>
                </div>
                <div className="column is-mobile is-one-quarter-widescreen">
                    <h1 className="tf"> Annonces</h1>
                    <div className="columns is-mobile is-one-quarter-widescreen">
                        &nbsp;&nbsp;&nbsp;&nbsp;<div className="is-half-mobile is-one-quarter-widescreen">
                        <Link to = {'/'} className="flink" >Électroménager</Link><br/><Link to = {'/'} className ="flink" >Technologie</Link><br/><Link to = {'/'} className="flink" >Matériaux</Link><br/><Link to = {'/'} className="flink" >Immobilier</Link>
                    </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="is-half-mobile is-one-quarter-widescreen">
                            <Link to = {'/'} className="flink" >Loisirs</Link><br/><Link to = {'/'} className="flink" >Animaux domestiques</Link><br/><Link to = {'/'} className="flink" >Vehicules</Link><br/><Link to = {'/'} className="flink" >Motos</Link>
                        </div><br/>


                    </div>

                    <Link to = {'/'} className="" >
                        <img alt="pagefacebook" src="/img/footer/iconfbfooter.png"/>
                    </Link>
                    <Link  to = {'/'} className="" >
                        <img alt="instagram" src="/img/footer/iconinstafooter.png"/>
                    </Link>
                    <Link to = {'/'} className="" >
                        <img alt="linkedin" src="/img/footer/iconinfooter.png"/>
                    </Link>
                    <Link to = {'/'} className="" >
                        <img alt="tweeter" src="/img/footer/icontwfooter.png"/>
                    </Link>

                </div>

            </div>
        </footer>
    )
};

Footer.propTypes= {
    name: PropTypes.string
};
Footer.defaultProps = {};

export default Footer ;