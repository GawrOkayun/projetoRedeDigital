import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'
import Link from 'next/link';

const News = () => {
        const [projeto, setProjeto] = useState();

        useEffect(() => {
            axios
            .get('http://localhost:3300/causa')
            .then((resposta) => {
                setProjeto(resposta.data)
            })
            .catch((erro) => console.log(erro));
        })
    
        const deleteProjeto = (id, e) =>{
            axios.delete(`http://localhost:3300/causa/${id}`)
            .then(res => console.log('Postado', res)).catch(err => console.log(err))
        }

        const [dados, setdados] = useState(
            {
              nome: '',
              descricao: ''
            }
        );
    
        function handleChange(event){
            const{name, value} = event.target;
        
            setdados({...dados, [name]: value});
        }

        return (
            <>
                {projeto?.map((e) => {
                    return(
                    <section className="blog-one">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                                    <div className="blog-one__single">
                                        <div className="blog-one__image">
                                            <img src="/assets/images/blog/blog-1-1.jpg" alt="" />
                                            <Link href="/news-details">
                                                <a className="blog-one__more-link"><i
                                                    className="fa fa-link"></i>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="blog-one__content">
                                            <h2>{e.nome}</h2>
                                            <h3 className="blog-one__title">
                                                <Link href="/news-details">
                                                <a>{e.descricao}</a>
                                                </Link>
                                            </h3>
                                            <Link href="/news-details">
                                            <a className="blog-one__link">Read More</a>
                                            </Link>
                                            <h2 onClick={() => deleteProjeto(e.id) }>X</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>)
                })}

                <form onSubmit={(e) => {
                    e.preventDefault();
                    alert('Dados enviados com sucesso!')
                    axios
                    .post('http://localhost:3300/causa', {
                        nome: dados.nome,
                        descricao: dados.descricao
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
                    }}>
                    <input  name='nome' placeholder='Insira o nome do Projeto' onChange={handleChange}/>
                    <input name='descricao' placeholder='Sobre o que é o projeto?' onChange={handleChange}/>
                    <input type="submit" value="Submit" />
                </form>
            </>
            
            
                
            
        )
}
export default News;