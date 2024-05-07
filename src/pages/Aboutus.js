import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";

class Aboutus extends React.Component {
  render() {
    return (
      <>
        <Header />

        <section className="breadcumb-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="breadcumb-cont">
                  <h2>About us</h2>
                  <p>
                    This is Photoshop's version of Lorem Ipsum. Proin gravida
                    nibh vel velit auctor aliquet Aenean sollicitudin, lorem
                    quis bibendum auctor, nisi elit consequat.
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="breadcum-nav">
                  <h4>About us</h4>
                  <ul>
                    <li>
                      <Link to={"/"}>home</Link>
                    </li>
                    <li>
                      <Link to={"/about-us"}>About us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6">
                <div className="about-img">
                  <figure>
                    <img src="assets/images/about/1.jpg" alt="" />
                  </figure>
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="about-con">
                  <span>About the company</span>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipisicing</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod por incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consuat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    {" "}
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia nit mollit anim id est laborum. Sed ut
                    perspiciatis unde omnis iste atus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit autfugit, sed quia consequuntur magni dolores.
                  </p>
                  <aLink to={"/"}className="btn1">
                    Shop Now
                  </aLink>
                  <img src="assets/images/about/sing.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="collection-area section">
          <div className="container">
            <div className="row mr-b60">
              <div className="col-md-6 col-sm-12">
                <div className="col-img">
                  <figure>
                    <img src="assets/images/banner/18.jpg" alt="" />
                  </figure>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="col-contents">
                  <span>For Him</span>
                  <h2>amazing clothes for men</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod por incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consuat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    {" "}
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia nit mollit anim id est laborum. Sed ut
                    perspiciatis unde omnis iste atus error sit voluptatem
                    accusantium doloremque laudantium,
                  </p>
                  <Link to={"/"} className="btn1">
                    For him
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12 floatright">
                <div className="col-img">
                  <figure>
                    <img src="assets/images/banner/19.jpg" alt="" />
                  </figure>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="col-contents">
                  <span>For her</span>
                  <h2>amazing clothes for men</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod por incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consuat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    {" "}
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia nit mollit anim id est laborum. Sed ut
                    perspiciatis unde omnis iste atus error sit voluptatem
                    accusantium doloremque laudantium,
                  </p>
                  <Link to={"/"} className="btn1">
                    For her
                  </Link>
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
export default Aboutus;
