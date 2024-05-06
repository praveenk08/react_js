import React from "react";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

class LoginRegister extends React.Component{
    render(){
        return( 
    <>

        <Header/>      
        <section className="breadcumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="breadcumb-cont">
                            <h2>Login & Register</h2>
                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat.</p>
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="breadcum-nav">
                            <h4>Login & Register</h4>
                            <ul>
                                <li><a href="index.html">home</a></li>
                                <li><a href="#">Login & Register</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="login-register section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 orbtn">
                        <span className="or-space">or</span>
                        <div className="register">
                            <h2>register</h2>
                            {/* <form>
                                <fieldset><input type="text" placeholder="First Name"/></fieldset>
                                <fieldset><input type="text" placeholder="Last Name"/></fieldset>
                                <fieldset><input type="text" placeholder="User Name"/></fieldset>
                                <fieldset><input type="password" placeholder="Password"/></fieldset>
                                  <div className="chkbox">
                                    <input type="checkbox"  id="squaredThree" checked />
                                    <label htmlFor="squaredThree"></label>
                                </div>  
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, reased do eius mod tempor incididunt ut labore et dolore magna .</p>
                                <button className="btn1">sing up</button>
                            </form> */}
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <div className="login">
                            <h2>Login</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
                            {/* <form>
                                <fieldset><input type="text" placeholder="Username"/></fieldset>
                                <fieldset><input type="password" placeholder="Password"/></fieldset>
                                <button className="btn1">Login</button>
                            </form> */}
                            <span className="orlog">Or login With ..</span>
                            <ul>
                                <li>
                                    <a href="#"><i className="fa fa-facebook"></i><span>facebook</span></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i><span>twitter</span></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-google-plus"></i><span>google+</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="daily-deal pd-t100 pd-b50 jarallax bg-img af">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="recent-post widghet">
                            <h4>Post From Blog</h4>
                            <div className="post-list">
                                <figure>
                                    <img src="images/collections/4.jpg" alt=""/>
                                </figure>
                                <div className="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>Dec 6 2015</span>
                                </div>
                            </div>
                            <div className="post-list">
                                <figure>
                                    <img src="images/collections/4.jpg" alt=""/>
                                </figure>
                                <div className="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>Dec 6 2015</span>
                                </div>
                            </div>
                            <div className="post-list">
                                <figure>
                                    <img src="images/collections/4.jpg" alt=""/>
                                </figure>
                                <div className="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>Dec 6 2015</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="products-deal widghet">
                            <h4>Top seller products</h4>
                            <div className="product-lists">
                                <figure>
                                    <img src="images/collections/4.jpg" alt=""/>
                                </figure>
                                <div className="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                            <div className="product-lists">
                                <figure>
                                    <img src="images/collections/5.jpg" alt=""/>
                                </figure>
                                <div className="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                            <div className="product-lists">
                                <figure>
                                    <img src="images/collections/6.jpg" alt=""/>
                                </figure>
                                <div className="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="products-deal widghet">
                            <h4>Trendy Products</h4>
                            <div className="product-lists">
                                <figure>
                                    <img src="images/collections/4.jpg" alt=""/>
                                </figure>
                                <div className="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                            <div className="product-lists">
                                <figure>
                                    <img src="images/collections/5.jpg" alt=""/>
                                </figure>
                                <div className="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                            <div className="product-lists">
                                <figure>
                                    <img src="images/collections/6.jpg" alt=""/>
                                </figure>
                                <div className="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                        <div className="products-deal widghet">
                            <h4>Daily Deal Products</h4>
                            <div className="product-lists">
                                <figure>
                                    <img src="images/collections/4.jpg" alt=""/>
                                </figure>
                                <div className="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                            <div className="product-lists">
                                <figure>
                                    <img src="images/collections/5.jpg" alt=""/>
                                </figure>
                                <div className="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
                            <div className="product-lists">
                                <figure>
                                    <img src="images/collections/6.jpg" alt=""/>
                                </figure>
                                <div className="content">
                                    <h5><a href="#">This is Photoshop's version  of  lorem</a></h5>
                                    <span>$32</span>
                                </div>
                            </div>
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
export default LoginRegister;
