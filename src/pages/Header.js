
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends React.Component{
    render(){
        return( 
<>
<header>
<div className="topber4">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-4 col-xs-12 hidden-sm hidden-xs">
                <div className="info-top">
                    <ul className="list-inline">
                        <li>Default welcome message here</li>
                        <li><i className="fa fa-phone"></i>Call support free :<span>+1800 12345 67890</span></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="topber-link text-right">
                    <ul className="list-inline">
                        <li><a href="login.html"><span><i className="fa fa-unlock-alt"></i></span>Login</a></li>
                        <li><a href="login.html"><span><i className="fa fa-pencil"></i></span>Register</a></li>
                        <li><a href="#"><span><i className="fa fa-heart"></i></span>Wishlist</a></li>
                        <li><a href="#" className="cart-btns"><i className="fa fa-shopping-cart"></i>My Cart (0)</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="middel-four">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="logo-area text-center">
                    <a href="index3.html"><img src="images/logo/logo.png" alt=""/></a>
                </div>
                <div className="lang-curency">
                    <select>
                        <option>$ Us dollar</option>
                        <option>$ Us dollar</option>
                        <option>$ Us dollar</option>
                    </select>
                    <span>english</span>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="main-menus4">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="menu-list">
                    <nav>
                        <ul className="list-inline">
                            <li className="lists-menus">
                                <a href="index.html">Home</a>
                                <ul className="list-menu">
                                    <li><a href="index.html">Home One</a></li>
                                    <li><a href="index2.html">Home two</a></li>
                                    <li><a href="index3.html">Home three</a></li>
                                    <li><a href="index4.html">Home four</a></li>
                                    <li><a href="index5.html">Home five</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">MENS</a>
                                
                                <div className="megamenu">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd-0">
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                    <div className="links">
                                                        <h4>men</h4>
                                                        <ul>
                                                            <li><a href="shop-recommend.html">Accessories</a></li>
                                                            <li><a href="shop-recommend.html">Women</a></li>
                                                            <li><a href="shop-recommend.html">men</a></li>
                                                            <li><a href="shop-recommend.html">Teens</a></li>
                                                            <li><a href="shop-recommend.html">Kids</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                    <div className="links">
                                                        <h4>men</h4>
                                                        <ul>
                                                            <li><a href="shop-recommend.html">Accessories</a></li>
                                                            <li><a href="shop-recommend.html">Women</a></li>
                                                            <li><a href="shop-recommend.html">men</a></li>
                                                            <li><a href="shop-recommend.html">Teens</a></li>
                                                            <li><a href="shop-recommend.html">Kids</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                    <div className="links">
                                                        <h4>men</h4>
                                                        <ul>
                                                            <li><a href="shop-recommend.html">Accessories</a></li>
                                                            <li><a href="shop-recommend.html">Women</a></li>
                                                            <li><a href="shop-recommend.html">men</a></li>
                                                            <li><a href="shop-recommend.html">Teens</a></li>
                                                            <li><a href="shop-recommend.html">Kids</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                    <div className="links">
                                                        <h4>men</h4>
                                                        <ul>
                                                            <li><a href="shop-recommend.html">Accessories</a></li>
                                                            <li><a href="shop-recommend.html">Women</a></li>
                                                            <li><a href="shop-recommend.html">men</a></li>
                                                            <li><a href="shop-recommend.html">Teens</a></li>
                                                            <li><a href="shop-recommend.html">Kids</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#">WOMENS</a>
                                <div className="megamenu">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd-0">
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                    <div className="links">
                                                        <h4>Shop</h4>
                                                        <ul>
                                                            <li><a href="shop-recommend.html">product</a></li>
                                                            <li><a href="shop-recommend.html">Women</a></li>
                                                            <li><a href="shop-recommend.html">men</a></li>
                                                            <li><a href="shop-recommend.html">Teens</a></li>
                                                            <li><a href="shop-recommend.html">Kids</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                    <div className="links">
                                                        <h4>men</h4>
                                                        <ul>
                                                            <li><a href="shop-recommend.html">Accessories</a></li>
                                                            <li><a href="shop-recommend.html">Women</a></li>
                                                            <li><a href="shop-recommend.html">men</a></li>
                                                            <li><a href="shop-recommend.html">Teens</a></li>
                                                            <li><a href="shop-recommend.html">Kids</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                    <div className="links">
                                                        <h4>men</h4>
                                                        <ul>
                                                            <li><a href="shop-recommend.html">Accessories</a></li>
                                                            <li><a href="shop-recommend.html">Women</a></li>
                                                            <li><a href="shop-recommend.html">men</a></li>
                                                            <li><a href="shop-recommend.html">Teens</a></li>
                                                            <li><a href="shop-recommend.html">Kids</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                                    <div className="links">
                                                        <div className="menu-slider">
                                                            <figure><img src="images/products/2.jpg" alt=""/></figure>
                                                            <figure><img src="images/products/3.jpg" alt=""/></figure>
                                                            <figure><img src="images/products/4.jpg" alt=""/></figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="shop.html">SHOP</a></li>
                            <li className="lists-menus">
                                <a href="#">pages</a>
                                <ul className="list-menu">
                                    <li><a href="about.html">about</a></li>
                                    <li><a href="blog.html">blog</a></li>
                                    <li><a href="blog-single.html">blog single</a></li>
                                    <li><a href="shop-filter.html">shop filter</a></li>
                                    <li><a href="shop-recommend.html">shop recommend</a></li>
                                    <li><a href="shop-single.html">shop-single</a></li>
                                    <li><a href="checkout.html">checkout</a></li>
                                    <li><a href="wishlist.html">wishlist</a></li>
                                    <li><a href="compare.html">compare</a></li>
                                    <li><a href="login.html">Login Register</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="search-area">
                    <ul>
                        <li className="search-box">
                            <input type="text" className="search-box"/>
                        </li>
                        <li className="search-box-icon"><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                
                <div className="mobilemenu3">
                    <div className="mobile-menu visible-sm visible-xs">
                        <nav>
                            <ul>
                                <li><a href="#">Home</a>
                                    <ul>
                                        <li><a href="index.html">Home One</a></li>
                                        <li><a href="index2.html">Home two</a></li>
                                        <li><a href="index3.html">Home three</a></li>
                                        <li><a href="index4.html">Home four</a></li>
                                        <li><a href="index5.html">Home five</a></li>
                                    </ul>
                                </li>
                                <li><a href="shop-recommend.html">mens</a></li>
                                <li><a href="shop-recommend.html">WOMENS</a></li>
                                <li><a href="shop.html">SHOP</a></li>
                                <li>
                                    <a href="#">pages</a>
                                    <ul className="list-menu">
                                        <li><a href="about.html">about</a></li>
                                        <li><a href="blog.html">blog</a></li>
                                        <li><a href="blog-single.html">blog single</a></li>
                                        <li><a href="shop-filter.html">shop filter</a></li>
                                        <li><a href="shop-recommend.html">shop recommend</a></li>
                                        <li><a href="shop-single.html">shop-single</a></li>
                                        <li><a href="checkout.html">checkout</a></li>
                                        <li><a href="wishlist.html">wishlist</a></li>
                                        <li><a href="compare.html">compare</a></li>
                                        <li><a href="login.html">Login Register</a></li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">contact</a></li>

                            </ul>
                        </nav>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div> 

<div className="offset-overlay"></div>
<div className="offset-area">

    <div className="offset-cart-area offset-body">
        <div className="offset-heading"><h3>Cart lists</h3><i className="close-offset flaticon-letter-x"></i></div>
        <div className="cart-list">
            <table>
                <tbody>
                    <tr>
                        <td className="product-img">
                            <div className="pro-img">
                                <img src="images/products/1.jpg" alt=""/>
                            </div>
                        </td>
                        <td>
                            <div className="pro-con">
                                <h4><a href="#">Product title</a></h4>
                                <del>$450</del>
                                <strong>$375</strong>
                            </div>
                        </td>
                        <td>
                            <div className="item-pro">
                                <input type="number" defaultValue="1"/>
                            </div>
                        </td>
                        <td><span className="close"><i className="flaticon-letter-x"></i></span></td>
                    </tr>
                    <tr>
                        <td className="product-img">
                            <div className="pro-img">
                                <img src="images/products/1.jpg" alt=""/>
                            </div>
                        </td>
                        <td>
                            <div className="pro-con">
                                <h4><a href="#">Product title</a></h4>
                                <strong>$375</strong>
                            </div>
                        </td>
                        <td>
                            <div className="item-pro">
                                <input type="number" defaultValue="1"/>
                            </div>
                        </td>
                        <td><span className="close"><i className="flaticon-letter-x"></i></span></td>
                    </tr>
                    <tr>
                        <td className="product-img">
                            <div className="pro-img">
                                <img src="images/products/1.jpg" alt=""/>
                            </div>
                        </td>
                        <td>
                            <div className="pro-con">
                                <h4><a href="#">Product title</a></h4>
                                <del>$450</del>
                                <strong>$375</strong>
                            </div>
                        </td>
                        <td>
                            <div className="item-pro">
                                <input type="number" defaultValue="1"/>
                            </div>
                        </td>
                        <td><span className="close"><i className="flaticon-letter-x"></i></span></td>
                    </tr>
                </tbody>
            </table>
            <a href="#" className="btn1 floatright mr-t25">checkout</a>
        </div>
    </div>
    
</div>

</header>

</>
  )
}
}
export default Header;