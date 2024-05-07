
import React from "react";
import {
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
                        <li>
                        <Link to={'/login'}>Login<span><i className="fa fa-unlock-alt"></i></span></Link></li>
                        <li><Link to={'/register'}><span><i className="fa fa-pencil"></i></span>Register</Link></li>
                       
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
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/about-us'}>About</Link></li>
                            <li><Link to={'/contact-us'}>CONTACT</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="search-area">
                    <ul>
                        <li className="search-box">
                            <input type="text" className="search-box"/>
                        </li>
                        <li className="search-box-icon"><Link to={'/'}><i className="fa fa-search" aria-hidden="true"></i></Link></li>
                    </ul>
                </div>
                
                <div className="mobilemenu3">
                    <div className="mobile-menu visible-sm visible-xs">
                        <nav>
                            <ul>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/about-us'}>About</Link></li>
                                <li><Link to={'/contact-us'}>CONTACT</Link></li>
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
            <Link to={'/'} className="btn1 floatright mr-t25">checkout</Link>
        </div>
    </div>
    
</div>

</header>

</>
  )
}
}
export default Header;