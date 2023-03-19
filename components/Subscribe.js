import React from 'react';

const Subscribe = () => {
        return (
            <section className="mailchimp-one">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Fique por dentro das <span>nossas novidades!</span> Preencha seu e-email.<br /> </h2>
                    </div>
                    <form action="#" className="mailchimp-one__mc-form mc-form"
                          data-url="#">
                        <input type="email" id="mc-email" className="formInput" placeholder="Digite seu e-mail aqui" />
                            <button type="submit"><i className="dimon-icon-right-arrow"></i></button>
                    </form>
                    <div className="mc-form__response"></div>
                </div>
            </section>
        )
}
export default Subscribe;