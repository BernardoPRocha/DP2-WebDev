import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
    return (
        <div>
            <h1>Bem-vindo ao nosso Restaurante Japonês</h1>
            <Carousel>
                <div>
                    <img src="/projetoweb/public/img/sushi.jpeg" alt="Sushi" />
                    <p className="legend">Prato 1 - Combinado de Sushi</p>
                </div>
                <div>
                    <img src="/projetoweb/public/img/lamen.webp" alt="Lamen Shoyo" />
                    <p className="legend">Prato 2 - Lamen Shoyo</p>
                </div>
                <div>
                    <img src="/projetoweb/public/img/yakisobadecarne.jpg" alt="Yakisoba de Carne" />
                    <p className="legend">Prato 3 - Yakisoba de Carne</p>
                </div>
            </Carousel>
            <div>
                <div>
                    <img src="/projetoweb/public/img/sushi.jpeg" alt="Sushi" />
                    <h3>Sushi</h3>
                    <p>10 hotroll salmão regado com fio de tarê caseiro
                        10 uramaki skin, regado no tarê caseiro
                        5 hossomaki de salmão fresco
                        5 hossomaki de salmão grelhado
                        5 kapamaki de pepino japonês
                        4 niguiri de salmão fresco
                        5 niguiri skin com fina camada de limão, cream cheese e tarê</p>
                    <p>R$ 100,00</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
