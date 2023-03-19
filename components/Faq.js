import React from 'react';

const Faq = () => {
        return (
            <section className="faq-one">
                <img src="/assets/images/background/faq-one-bg.png" alt="Awesome Image" className="faq-one__bg" />
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Perguntas e respostas <span>frequentes</span> <br />
                        </h2>
                    </div>
                    <div className="accrodion-grp faq-accrodion">
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Qual é o valor do serviço?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>O Projeto Rede Digital é uma inicativa completamente gratuita.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Quais projetos podem fazer parte?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>Absolutamente qualquer projeto social gratuito pode fazer parte da Rede Digital.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Como posso cadastrar meu projeto social?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>O cadastro é feito pelo preenchimento de um simples formulário presente no começo da página.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Há algum limite de idade para participar dos programas sociais?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>Há programas sociais disponíveis para todas as faixas etáreas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Faq;