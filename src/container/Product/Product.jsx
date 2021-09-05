import React, { Component, Fragment} from 'react';
import './product.css';

class Product extends Component {
    state = {
        product: 6,
    }
    handlePlus = () => {
        this.setState({
            product: this.state.product + 1
        })
    }
    handleMinus = () => {
        if(this.state.product > 0 ){
            this.setState({
                product: this.state.product - 1
            })
        }
    }
    render(){
        return (
            <Fragment>
                <div className="pwrraper">
                    <div className="nav">
                        <div className="logo">
                            <h2>Babastudio</h2>
                        </div>
                        <div className="keranjang">
                            <img src="https://i.ibb.co/7SS7mYG/icon-troli.jpg" alt="" />
                            <div className="jumlah">{this.state.product}</div>
                        </div>
                    </div>
                    <div className="product">
                        <div className="gambar-product">
                            <img src="https://i.ibb.co/NnFGR8F/tas-selempang.jpg" alt="" className="gambarpaket" />
                        </div>
                        <p className="nama">Tas Selempang USB Charger</p>
                        <p className="harga">Rp. 81.000</p>
                    </div>
                    <div className="counter">
                        <button className="mplus" onClick={this.handleMinus}>-</button>
                            <input type="text" className="input" value={this.state.product}/>
                        <button className="mplus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
            </Fragment>
        );
    }
};

export default Product;