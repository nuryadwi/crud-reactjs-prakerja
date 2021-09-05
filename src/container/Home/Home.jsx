import React, { Component, Fragment } from "react";
import KursusComponent from "../../component/KursusComponent/KursusComponent";
import Product from "../Product/Product";
import Blogs from "../Blogs/Blogs";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import './home.css';

class Home extends Component {
    render() {
        return (
            <Router>
                {/* <div>
                    <KursusComponent 
                        nama="SEO" 
                        harga="10.000" 
                        deskripsi="Wah murah banget "    
                    />
                    <KursusComponent 
                        nama="Facebook Ads" 
                        harga="20.000" 
                        deskripsi="Lagi promo nih"
                    />
                    <KursusComponent 
                        nama="Google Ads" 
                        harga="30.000" 
                        deskripsi="Ayo beli murah nih"
                    />
                    <KursusComponent/>
                    <Product />
                    <h2>Dwi Nuryadi</h2>
                    <hr />
                    <Blogs />
                </div> */}

                <Fragment>
                    <div className="back">
                        <nav>
                            <ul>
                                <li className="link">
                                    <Link to="/" className="ahref">Home</Link>
                                </li>
                                <li className="link">
                                    <Link to="/product" className="ahref">Product</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <Route path="/" exact component={Blogs} />
                    <Route path="/product" component={Product} />
                </Fragment>

            </Router>
        )
    }
}

export default Home;