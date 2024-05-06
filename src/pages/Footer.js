import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Footer extends React.Component{
    render(){
        return( 
<>
<footer>
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="subs-form wow animated fadeInDown" data-wow-duration="1.5s">
                                {/* <form>
                                    <input type="email" placeholder="Enter Your Email"/>
                                    <button type="submit">Subscribe <i className="fa fa-send"></i></button>
                                </form> */}
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="footer-content">
                                <div className="logo-foo">
                                    <a href="index.html"><img src="images/logo/logo2.png" alt=""/></a>
                                </div>
                                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                                <ul className="list-inline foo-social">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-skype"></i></a></li>
                                </ul>
                                <ul className="list-inline foo-con-info">
                                    <li><i className="fa fa-home"></i><span>Uk Street, Green Home City, London.</span></li>
                                    <li><i className="fa fa-envelope"></i><span>info@yourtheme.com</span></li>
                                    <li><i className="fa fa-phone"></i><span>+910-73602 : +924-15588</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="copyright">
                                <p>Webstrot © 2018 Powered by Theshop™. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
  )
}
}
export default Footer;