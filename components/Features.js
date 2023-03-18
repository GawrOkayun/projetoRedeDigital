import React from 'react';

const Features = () => {
        return (
            <section className="service-one" id="features">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Como o projeto <span>Rede Digital</span> <br /> atua?
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-laptop"></i>
                                    <h3><a href="#">Divulgar <br /> programas</a></h3>
                                    <p>Exibir uma varidade de <br /> programas sociais <br /> para diversos públicos</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-presentation"></i>
                                    <h3><a href="#">Explicar <br /> programas</a></h3>
                                    <p>Detalhar a atuação de  <br /> diversos programas sociais <br /> em todo o Brasil</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-target"></i>
                                    <h3><a href="#">Direcionar <br /> público alvo</a></h3>
                                    <p>Separar os  <br /> programas sociais <br /> por público alvo</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInDown" data-wow-duration="1500ms">
                            <div className="service-one__single text-center">
                                <div className="service-one__inner">
                                    <i className="service-one__icon dimon-icon-visualization"></i>
                                    <h3><a href="#">Criação de <br /> novas ideias sociais</a></h3>
                                    <p>Um espaço aberto a <br /> propostas de programs sociais <br /> que podem ser patrocinados</p>
                                    <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Features;