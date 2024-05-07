import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Home extends React.Component {
  render() {
    return (
      <>
        {/* <div id="preloader">
            <div id="status" className="spinner">
                <div className="double-bounce1"></div>
                <div className="double-bounce2"></div>
            </div>
        </div> */}

        <Header />

        <section className="slider-area">
          <div
            id="carousel-example-generic"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <div className="carousel-captions caption-1">
                  <div className="container">
                    <div className="row">
                      <div className="slider-content">
                        <div className="content">
                          <strong>2016</strong>
                          <h2>Collection</h2>
                          <p>MONOCHROME STYLE FOR WOMENS</p>
                          <Link to={"/"} className="btn1">
                            SEE COLLECTION
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="carousel-captions caption-2">
                  <div className="container">
                    <div className="row">
                      <div className="slider-content">
                        <div className="content">
                          <strong>2016</strong>
                          <h2>Collection</h2>
                          <p>MONOCHROME STYLE FOR WOMENS</p>
                          <Link to={"/"} className="btn1">
                            SEE COLLECTION
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="carousel-captions caption-3">
                  <div className="container">
                    <div className="row">
                      <div className="slider-content">
                        <div className="content">
                          <strong>2016</strong>
                          <h2>Collection</h2>
                          <p>MONOCHROME STYLE FOR WOMENS</p>
                          <Link to={"/"} className="btn1">
                            SEE COLLECTION
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="info-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div
                  className="info-list text-center wow animated fadeIn"
                  data-wow-duration="0.5s"
                >
                  <span>
                    <i className="fa fa-car"></i>
                  </span>
                  <h4>FREE SHIPPING</h4>
                  <p>on order over $150.00</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div
                  className="info-list text-center wow animated fadeIn"
                  data-wow-duration="1s"
                >
                  <span>
                    <i className="fa fa-car"></i>
                  </span>
                  <h4>100% Original</h4>
                  <p>No Fake No Duplicate.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div
                  className="info-list text-center wow animated fadeIn"
                  data-wow-duration="1.5s"
                >
                  <span>
                    <i className="fa fa-car"></i>
                  </span>
                  <h4>Easy returns</h4>
                  <p>Easy & Free of Cost.</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div
                  className="info-list text-center wow animated fadeIn"
                  data-wow-duration="2s"
                >
                  <span>
                    <i className="fa fa-car"></i>
                  </span>
                  <h4>Cash on Delivery</h4>
                  <p>Order and COD.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="categories-area section2">
          <div className="container">
            <div className="row">
              <div
                className="catagerys-slider wow animated fadeIn"
                data-wow-duration="1.5s"
              >
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="categories">
                    <figure>
                      <img src="images/categories/1.jpg" alt="" />
                    </figure>
                    <div className="content">
                      <span>New Trendy </span>
                      <h3>
                        <a href="#">Bag Collection</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="categories">
                    <figure>
                      <img src="images/categories/10.jpg" alt="" />
                    </figure>
                    <div className="content">
                      <span>New Trendy </span>
                      <h3>
                        <a href="#">Bag Collection</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="categories">
                    <figure>
                      <img src="images/categories/11.jpg" alt="" />
                    </figure>
                    <div className="content">
                      <span>New Trendy </span>
                      <h3>
                        <a href="#">Bag Collection</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="categories">
                    <figure>
                      <img src="images/categories/12.jpg" alt="" />
                    </figure>
                    <div className="content">
                      <span>New Trendy </span>
                      <h3>
                        <a href="#">Bag Collection</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="categories">
                    <figure>
                      <img src="images/categories/13.jpg" alt="" />
                    </figure>
                    <div className="content">
                      <span>New Trendy </span>
                      <h3>
                        <a href="#">Bag Collection</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-area section3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="section-heading">
                  <h2>FEATURED PRODUCTS</h2>
                  <p>Check out the best offers to stay in Trend </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="featured-slider wow animated fadeIn"
                data-wow-duration="1.5s"
              >
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="product-list">
                    <figure>
                      <img src="images/products/1.jpg" alt="" />
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart-o"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-repeat"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </figure>
                    <div className="content">
                      <h4>
                        <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                      </h4>
                      <p>Soft and comforting outwear</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="product-list">
                    <figure>
                      <img src="images/products/2.jpg" alt="" />
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart-o"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-repeat"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </figure>
                    <div className="content">
                      <h4>
                        <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                      </h4>
                      <p>Soft and comforting outwear</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="product-list">
                    <figure>
                      <img src="images/products/3.jpg" alt="" />
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart-o"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-repeat"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </figure>
                    <div className="content">
                      <h4>
                        <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                      </h4>
                      <p>Soft and comforting outwear</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="product-list">
                    <figure>
                      <img src="images/products/4.jpg" alt="" />
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart-o"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-repeat"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </figure>
                    <div className="content">
                      <h4>
                        <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                      </h4>
                      <p>Soft and comforting outwear</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="product-list">
                    <figure>
                      <img src="images/products/25.jpg" alt="" />
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart-o"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-repeat"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </figure>
                    <div className="content">
                      <h4>
                        <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                      </h4>
                      <p>Soft and comforting outwear</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="product-list">
                    <figure>
                      <img src="images/products/26.jpg" alt="" />
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart-o"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-repeat"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </figure>
                    <div className="content">
                      <h4>
                        <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                      </h4>
                      <p>Soft and comforting outwear</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="product-list">
                    <figure>
                      <img src="images/products/27.jpg" alt="" />
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-heart-o"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-repeat"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="flaticon-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </figure>
                    <div className="content">
                      <h4>
                        <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                      </h4>
                      <p>Soft and comforting outwear</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="offer-banner">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 pd-0">
                <div className="offer-right-slider">
                  <div className="offer-list">
                    <figure>
                      <img src="images/banner/2.jpg" alt="" />
                    </figure>
                    <div className="content-off">
                      <span>This winter</span>
                      <h2>Fashion model.</h2>
                      <p>
                        This is Photoshop's version of lorem Ipsum. Proin
                        gravida nibh vel velit auctor aliquet Aenean
                        sollicitudin, lorem quis bibendum auctor, nisi elit.
                      </p>
                      <Link to={"/"} className="btn1">
                        SEE COLLECTION
                      </Link>
                    </div>
                  </div>
                  <div className="offer-list">
                    <figure>
                      <img src="images/banner/2.jpg" alt="" />
                    </figure>
                    <div className="content-off">
                      <span>This winter</span>
                      <h2>Fashion model.</h2>
                      <p>
                        This is Photoshop's version of lorem Ipsum. Proin
                        gravida nibh vel velit auctor aliquet Aenean
                        sollicitudin, lorem quis bibendum auctor, nisi elit.
                      </p>
                      <Link to={"/"} className="btn1">
                        SEE COLLECTION
                      </Link>
                    </div>
                  </div>
                  <div className="offer-list">
                    <figure>
                      <img src="images/banner/2.jpg" alt="" />
                    </figure>
                    <div className="content-off">
                      <span>This winter</span>
                      <h2>Fashion model.</h2>
                      <p>
                        This is Photoshop's version of lorem Ipsum. Proin
                        gravida nibh vel velit auctor aliquet Aenean
                        sollicitudin, lorem quis bibendum auctor, nisi elit.
                      </p>
                      <Link to={"/"} className="btn1">
                        SEE COLLECTION
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 pd-0">
                <div className="offer-count">
                  <figure>
                    <img src="images/banner/1.jpg" alt="" />
                    <div className="count-con">
                      <div
                        className="but wow animated jello"
                        data-wow-delay="0.5s"
                        data-wow-duration="1s"
                      >
                        <strong>Hot Deal</strong>
                        <span>3 Days Left 50%</span>
                      </div>
                      <div className="counter">
                        <ul className="count-list list-inline">
                          <li>
                            <span className="days">00</span>
                            <p>Days</p>
                          </li>
                          <li>
                            <span className="hours">00</span>
                            <p>hour</p>
                          </li>
                          <li>
                            <span className="minutes">00</span>
                            <p>minut</p>
                          </li>
                          <li>
                            <span className="seconds">00</span>
                            <p>second</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trands-product section4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="section-heading">
                  <h2>News Trends</h2>
                  <p>Check out the best offers to stay in trend </p>
                </div>
              </div>
            </div>
            <div className="row wow animated fadeIn" data-wow-duration="1.5s">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="tabs-nav">
                  <ul className="nav-tabs">
                    <li className="active">
                      <a href="#tab1primary" data-toggle="tab">
                        <i className="fa fa-send"></i>Featured
                      </a>
                    </li>
                    <li>
                      <a href="#tab2primary" data-toggle="tab">
                        <i className="fa fa-cubes"></i> New Arrival
                      </a>
                    </li>
                    <li>
                      <a href="#tab2primary" data-toggle="tab">
                        <i className="fa fa-area-chart"></i> New Trends
                      </a>
                    </li>
                    <li>
                      <a href="#tab2primary" data-toggle="tab">
                        <i className="fa fa-heart"></i> Beautypedia
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pd-0">
                <div className="tab-content">
                  <div className="tab-pane fade in active" id="tab1primary">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/1.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/2.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/3.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/4.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/25.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/26.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/27.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/28.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab2primary">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/4.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/3.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/2.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/1.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/25.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/26.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/27.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/28.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab3primary">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/3.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/4.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/1.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/2.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/25.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/26.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/27.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/28.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab4primary">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/1.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/2.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/3.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/4.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/25.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="images/products/26.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="assets/images/products/27.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="assets/images/products/28.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab5primary">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="assets/images/products/28.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="assets/images/products/27.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="assets/images/products/26.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="assets/images/products/25.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="assets/images/products/4.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="assets/images/products/3.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="assets/images/products/2.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                      <div className="product-list">
                        <figure>
                          <img src="assets/images/products/1.jpg" alt="" />
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fa fa-heart-o"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-repeat"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-shopping-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </figure>
                        <div className="content">
                          <h4>
                            <a href="#">Dark Scale T-Shirt</a> <span>$56</span>
                          </h4>
                          <p>Soft and comforting outwear</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="banner-area bg-img">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="banner-content">
                  <span>Sale 50% Offer</span>
                  <h2 className="wow animated fadeInUp" data-wow-duration="2s">
                    Beauty Behind the Madness
                  </h2>
                  <p>
                    This is Photoshop's version of lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet Aenean sollicitudin, lorem
                    quis bibendum auctor.
                  </p>
                  <div className="price">
                    <del>$499</del>
                    <strong>$299</strong>
                  </div>
                  <a
                    href="#"
                    className="btn1 wow animated flipInY"
                    data-wow-delay="0.4s"
                    data-wow-duration="0.5s"
                  >
                    SEE COLLECTION
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-area section4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-heading">
                  <h2>Recent Posts</h2>
                  <p>Check out the best offers to stay in trend </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div
                  className="blog wow animated fadeInLeft"
                  data-wow-duration="1.5s"
                >
                  <figure>
                    <img src="assets/images/blog/1.jpg" alt="" />
                    <span>by admin</span>
                  </figure>
                  <div className="content">
                    <div className="headings">
                      <div className="data">
                        <span>14</span>
                        <span>NOV</span>
                      </div>
                      <h3>
                        <a href="#">
                          Magazines are publications, usually periodical{" "}
                        </a>
                      </h3>
                    </div>
                    <p>
                      This is Photoshop's of lorem Ipsum. Prgravida nibh vel
                      velit auctor aliquet Aenean sollicitudin.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div
                  className="blog wow animated fadeInUp"
                  data-wow-duration="1.5s"
                >
                  <figure>
                    <img src="assets/images/blog/2.jpg" alt="" />
                    <span>by user</span>
                  </figure>
                  <div className="content">
                    <div className="headings">
                      <div className="data">
                        <span>13</span>
                        <span>NOV</span>
                      </div>
                      <h3>
                        <a href="#">
                          Magazines are publications, usually periodical{" "}
                        </a>
                      </h3>
                    </div>
                    <p>
                      This is Photoshop's of lorem Ipsum. Prgravida nibh vel
                      velit auctor aliquet Aenean sollicitudin.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div
                  className="blog wow animated fadeInRight"
                  data-wow-duration="1.5s"
                >
                  <figure>
                    <img src="assets/images/blog/3.jpg" alt="" />
                    <span>by admin</span>
                  </figure>
                  <div className="content">
                    <div className="headings">
                      <div className="data">
                        <span>12</span>
                        <span>NOV</span>
                      </div>
                      <h3>
                        <a href="#">
                          Magazines are publications, usually periodical{" "}
                        </a>
                      </h3>
                    </div>
                    <p>
                      This is Photoshop's of lorem Ipsum. Prgravida nibh vel
                      velit auctor aliquet Aenean sollicitudin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-brand section3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12  col-md-12 col-sm-12 col-xs-12">
                <div className="section-heading">
                  <h2>FAQ & Brands</h2>
                  <p>Check out the best offers to stay in trend </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 pd-0">
                <div className="brand-slider">
                  <div className="brand-list">
                    <div className="brands">
                      <figure>
                        <img className="hov" src="assets/images/brands/1.jpg" alt="" />
                        <img
                          className="nor"
                          src="assets/images/brands/1h.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="brands">
                      <figure>
                        <img className="hov" src="assets/images/brands/2.jpg" alt="" />
                        <img
                          className="nor"
                          src="assets/images/brands/2h.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="brands">
                      <figure>
                        <img className="hov" src="assets/images/brands/3.jpg" alt="" />
                        <img
                          className="nor"
                          src="assets/images/brands/3h.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="brands">
                      <figure>
                        <img className="hov" src="assets/images/brands/4.jpg" alt="" />
                        <img
                          className="nor"
                          src="assets/images/brands/4h.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="brand-list">
                    <div className="brands">
                      <figure>
                        <img className="hov" src="assets/images/brands/1.jpg" alt="" />
                        <img
                          className="nor"
                          src="assets/images/brands/1h.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="brands">
                      <figure>
                        <img className="hov" src="assets/images/brands/2.jpg" alt="" />
                        <img
                          className="nor"
                          src="assets/images/brands/2h.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="brands">
                      <figure>
                        <img className="hov" src="assets/images/brands/3.jpg" alt="" />
                        <img
                          className="nor"
                          src="assets/images/brands/3h.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="brands">
                      <figure>
                        <img className="hov" src="assets/images/brands/4.jpg" alt="" />
                        <img
                          className="nor"
                          src="assets/images/brands/4h.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="brand-list">
                    <div className="brands">
                      <figure>
                        <img className="hov" src="assets/images/brands/1.jpg" alt="" />
                        <img
                          className="nor"
                          src="assets/images/brands/1h.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="brands">
                      <figure>
                        <img className="hov" src="assets/images/brands/2.jpg" alt="" />
                        <img
                          className="nor"
                          src="assets/images/brands/2h.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="brands">
                      <figure>
                        <img className="hov" src="assets/images/brands/3.jpg" alt="" />
                        <img
                          className="nor"
                          src="assets/images/brands/3h.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="brands">
                      <figure>
                        <img className="hov" src="assets/images/brands/4.jpg" alt="" />
                        <img
                          className="nor"
                          src="assets/images/brands/4h.jpg"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="faq-content">
                  <div
                    className="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Provide Affordable And Reliable Linux .
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseOne"
                        className="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                      >
                        <div className="panel-body">
                          <p>
                            Trained at London Central Saint Martin school of
                            arts{" "}
                          </p>
                          <ul>
                            <li>
                              This is Photoshop's version of lorem Ipsum.
                              Prgravida{" "}
                            </li>
                            <li>
                              nibh vel velit auctor aliquet Aenean sollicitudin.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingTwo">
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Provide Affordable And Reliable Linux .
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseTwo"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                      >
                        <div className="panel-body">
                          <p>
                            Trained at London Central Saint Martin school of
                            arts{" "}
                          </p>
                          <ul>
                            <li>
                              This is Photoshop's version of lorem Ipsum.
                              Prgravida{" "}
                            </li>
                            <li>
                              nibh vel velit auctor aliquet Aenean sollicitudin.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="headingThree"
                      >
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Provide Affordable And Reliable Linux .
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseThree"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                      >
                        <div className="panel-body">
                          <p>
                            Trained at London Central Saint Martin school of
                            arts{" "}
                          </p>
                          <ul>
                            <li>
                              This is Photoshop's version of lorem Ipsum.
                              Prgravida{" "}
                            </li>
                            <li>
                              nibh vel velit auctor aliquet Aenean sollicitudin.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="headingFoure"
                      >
                        <h4 className="panel-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href="#collapsefour"
                            aria-expanded="false"
                            aria-controls="collapsefour"
                          >
                            Provide Affordable And Reliable Linux .
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapsefour"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="headingFoure"
                      >
                        <div className="panel-body">
                          <p>
                            Trained at London Central Saint Martin school of
                            arts{" "}
                          </p>
                          <ul>
                            <li>
                              This is Photoshop's version of lorem Ipsum.
                              Prgravida{" "}
                            </li>
                            <li>
                              nibh vel velit auctor aliquet Aenean sollicitudin.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default Home;
