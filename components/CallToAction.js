import React from 'react';

const CallToAction = () => {
        return (
            <section className="cta-one">
                <img src="/assets/images/background/cta-one-bg.png" className="cta-one__bg" alt="Awesome Image" />
                <div className="container">
                    <img src="/assets/images/mocs/cta-moc-1-1.png" className="cta-one__moc" alt="Awesome Image" />
                    <div className="row justify-content-lg-end">
                        <div className="col-lg-6">
                            <div className="cta-one__content">
                                <i className="cta-one__icon dimon-icon-data1"></i>
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">Uma poderosa <span>ferramenta</span> para a sociedade.
                                    </h2>
                                </div>
                                <div className="cta-one__text">
                                    <p>Projetos sociais sofrem com a falta de divulgação. No entanto, com o <span>Projeto Rede Digital</span>, poderemos promover o seguinte:</p>
                                </div>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-check"></i>Democratizar o acesso à informação</li>
                                    <li><i className="fa fa-check"></i>Aumentar o fluxo de auxiliados por projetos sociais
                                    </li>
                                    <li><i className="fa fa-check"></i>Luta por uma sociedade menos desigual
                                    </li>
                                </ul>
                                <a href="#" className="thm-btn"><span>Acessar a página de programas</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default CallToAction;