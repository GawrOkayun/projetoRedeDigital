import React, { Component } from 'react';

export default class Pricing extends Component {
    constructor(){
        super()
        this.state = {
            month: true,
            year: false
        }
    }

    handleToggle = () => {
        const month = this.state.month;
        const year = this.state.year;

        if(month){
            this.setState({year: true, month: false})
        }
        if(year){
            this.setState({year: false, month: true})
        }

    }

    render(){
        return (

            <section className="pricing-one" id="pricing">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Você pode <span>realizar doações</span> que mantém <br /> ONGs funcionando</h2>
                    </div>
                    <ul className="list-inline text-center switch-toggler-list" role="tablist" id="switch-toggle-tab">
                        <li className={this.state.month ? 'month active' : 'month'}><a href="#">Mensal</a></li>
                        <li>
                            <label className={this.state.year ? 'switch off' : 'switch on'}>
                                <span onClick={this.handleToggle} className="slider round"></span>
                            </label>
                        </li>
                        <li className={this.state.year ? 'year active' : 'year'}><a href="#">Anual</a></li>
                    </ul>
                    <div className="tabed-content">
                        <div id="month" style={{ display: this.state.month ? 'block' : 'none'}}>
                            <div className="row pricing-one__price-row">
                                <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                                    <div className="pricing-one__single text-center">
                                        <h3>R$20,00</h3>
                                        <p>basic pack</p>
                                        <ul className="list-unstyled">
                                            <li>Extra features</li>
                                            <li>Lifetime free support</li>
                                            <li>Upgrate options</li>
                                            <li>Full access</li>
                                        </ul>
                                        <a href="#" className="thm-btn pricing-one__btn"><span>Choose Plan</span></a>
                                        <span className="tag-line">No hidden charges!</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInDown" data-wow-duration="1500ms">
                                    <div className="pricing-one__single text-center">
                                        <h3>R$50,00</h3>
                                        <p>medium pack</p>
                                        <ul className="list-unstyled">
                                            <li>Extra features</li>
                                            <li>Lifetime free support</li>
                                            <li>Upgrate options</li>
                                            <li>Full access</li>
                                        </ul>
                                        <a href="#" className="thm-btn pricing-one__btn"><span>Realizar doação</span></a>
                                        <span className="tag-line">No hidden charges!</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                                    <div className="pricing-one__single text-center">
                                        <h3>R$100,00</h3>
                                        <p>premium pack</p>
                                        <ul className="list-unstyled">
                                            <li>Extra features</li>
                                            <li>Lifetime free support</li>
                                            <li>Upgrate options</li>
                                            <li>Full access</li>
                                        </ul>
                                        <a href="#" className="thm-btn pricing-one__btn"><span>Realizar doação</span></a>
                                        <span className="tag-line">No hidden charges!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="year" style={{ display: this.state.year ? 'block' : 'none'}}>
                            <div className="row pricing-one__price-row">
                                <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                                    <div className="pricing-one__single text-center">
                                        <h3>R$200,00</h3>
                                        <p>basic pack</p>
                                        <ul className="list-unstyled">
                                            <li>Extra features</li>
                                            <li>Lifetime free support</li>
                                            <li>Upgrate options</li>
                                            <li>Full access</li>
                                        </ul>
                                        <a href="#" className="thm-btn pricing-one__btn"><span>Realizar doação</span></a>
                                        <span className="tag-line">No hidden charges!</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInDown" data-wow-duration="1500ms">
                                    <div className="pricing-one__single text-center">
                                        <h3>R$500,00</h3>
                                        <p>medium pack</p>
                                        <ul className="list-unstyled">
                                            <li>Extra features</li>
                                            <li>Lifetime free support</li>
                                            <li>Upgrate options</li>
                                            <li>Full access</li>
                                        </ul>
                                        <a href="#" className="thm-btn pricing-one__btn"><span>Choose Plan</span></a>
                                        <span className="tag-line">No hidden charges!</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                                    <div className="pricing-one__single text-center">
                                        <h3>R$1000,00</h3>
                                        <p>premium pack</p>
                                        <ul className="list-unstyled">
                                            <li>Extra features</li>
                                            <li>Lifetime free support</li>
                                            <li>Upgrate options</li>
                                            <li>Full access</li>
                                        </ul>
                                        <a href="#" className="thm-btn pricing-one__btn"><span>Choose Plan</span></a>
                                        <span className="tag-line">No hidden charges!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}