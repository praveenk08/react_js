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
<section class="daily-deal pd-t100 pd-b50 jarallax bg-img af">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="recent-post widghet">
                            <h4>Post From Blog</h4>
                            <div class="post-list">
                                <figure>
                                    <img src="images/collections/4.jpg" alt=""/>
                                </figure>
                                <div class="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>Dec 6 2015</span>
                                </div>
                            </div>
                            <div class="post-list">
                                <figure>
                                    <img src="images/collections/4.jpg" alt=""/>
                                </figure>
                                <div class="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>Dec 6 2015</span>
                                </div>
                            </div>
                            <div class="post-list">
                                <figure>
                                    <img src="images/collections/4.jpg" alt=""/>
                                </figure>
                                <div class="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>Dec 6 2015</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="products-deal widghet">
                            <h4>Top seller products</h4>
                            <div class="product-lists">
                                <figure>
                                    <img src="images/collections/4.jpg" alt=""/>
                                </figure>
                                <div class="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                            <div class="product-lists">
                                <figure>
                                    <img src="images/collections/5.jpg" alt=""/>
                                </figure>
                                <div class="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                            <div class="product-lists">
                                <figure>
                                    <img src="images/collections/6.jpg" alt=""/>
                                </figure>
                                <div class="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="products-deal widghet">
                            <h4>Trendy Products</h4>
                            <div class="product-lists">
                                <figure>
                                    <img src="images/collections/4.jpg" alt=""/>
                                </figure>
                                <div class="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                            <div class="product-lists">
                                <figure>
                                    <img src="images/collections/5.jpg" alt=""/>
                                </figure>
                                <div class="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                            <div class="product-lists">
                                <figure>
                                    <img src="images/collections/6.jpg" alt=""/>
                                </figure>
                                <div class="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div class="products-deal widghet">
                            <h4>Daily Deal Products</h4>
                            <div class="product-lists">
                                <figure>
                                    <img src="images/collections/4.jpg" alt=""/>
                                </figure>
                                <div class="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                            <div class="product-lists">
                                <figure>
                                    <img src="images/collections/5.jpg" alt=""/>
                                </figure>
                                <div class="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                            <div class="product-lists">
                                <figure>
                                    <img src="images/collections/6.jpg" alt=""/>
                                </figure>
                                <div class="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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