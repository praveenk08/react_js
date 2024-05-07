import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {
    Link
  } from "react-router-dom";

class Contactus extends React.Component{
    render(){
        return( 
        <>

        <Header/>

            <section className="breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="breadcumb-cont">
                            <h2>Contact US</h2>
                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="breadcum-nav">
                            <h4>Contact US</h4>
                            <ul>
                                <li><a href="index.html">home</a></li>
                                <li><a href="#">Contact US</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </section>
                
            <section className="contatc-us section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12 col-md-offset-2 section5">
                            <div className="col-sm-4 text-center">
                                <div className="info-list">
                                    <span><img src="images/icons/c3.png" alt=""/></span>
                                    <h4>Visit Our Shop</h4>
                                    <p>6 - Broadway, 24th Floor<br/>New York, NY 10013</p>
                                </div>
                            </div>
                            <div className="col-sm-4 text-center">
                                <div className="info-list">
                                    <span><img src="images/icons/c1.png" alt=""/></span>
                                    <h4>Let’s Talk</h4>
                                    <p>1800-154-178 <br/>7272014587</p>
                                </div>
                            </div>
                            <div className="col-sm-4 text-center">
                                <div className="info-list">
                                    <span><img src="images/icons/c2.png" alt=""/></span>
                                    <h4>Email</h4>
                                    <p>shop@example.com<br/>online@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 pd-0">
                            <div className="map">
                                <div className="map-area">
                                    <div id="map" className="map-full" style={{width:"100%", height:"630px"}}></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 pd-0">
                            <div className="contact-form">
                                <h2>Send Us a Message</h2>
                                <form>
                                    <div className="col-sm-6 pd-l0">
                                        <fieldset><input type="text" placeholder="name"/></fieldset>
                                    </div>
                                    <div className="col-sm-6 pd-r0">
                                        <fieldset><input type="email" placeholder="Email"/></fieldset>
                                    </div>
                                    <div className="col-sm-6 pd-l0">
                                        <fieldset><input type="number" placeholder="Phone"/></fieldset>
                                    </div>
                                    <div className="col-sm-6 pd-r0">
                                        <fieldset><input type="text" placeholder="Subjact"/></fieldset>
                                    </div>
                                    <div className="col-sm-12 pd-0">
                                        <fieldset><textarea placeholder="Meassage"></textarea></fieldset>
                                    </div>
                                    <button className="btn1" type="submit">submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            
        <Footer/>
        
        </>
    )
    }
    }
export default Contactus;
