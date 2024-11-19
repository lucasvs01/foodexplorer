import { Container } from "./style"
import {HeaderUser} from "../../components/HeaderUser"
import {Footer} from "../../components/Footer"

import bg from "../../assets/bgSlogan.png"

import {CardUser} from "../../components/CardUser"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import  'swiper/css/navigation'
import  'swiper/css/pagination'


export function Home({ orders,...rest}){


    
    return (
        <Container {...rest}>
           <HeaderUser orders={orders}></HeaderUser>
        
           <main>
                <div className="banner">
                    <img src={bg} alt="" />

                    <div className="title">
                        <h1>
                            Sabores inigualáveis 
                        </h1>

                        <p>
                            Sinta o cuidado do preparo com ingredientes selecionados.
                        </p>

                    </div>
                </div>

                <div className="section">
                    <section>
                        <h2>
                            Pratos principais
                        </h2>

                        <Swiper className="Swiper" spaceBetween={16} slidesPerView={2}>
                            
                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>

                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>

                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>

                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>

                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>
                        </Swiper>
                    </section>

                    <section>
                        <h2>
                            Sobremesas
                        </h2>

                        <Swiper className="Swiper" spaceBetween={16} slidesPerView={2}>
                            
                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>

                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>

                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>

                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>

                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>
                        </Swiper>
                    </section>

                    <section>
                        <h2>
                            Bebidas
                        </h2>

                        <Swiper  className="Swiper" spaceBetween={16} slidesPerView={2}>
                            
                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>

                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>

                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>

                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>

                            <SwiperSlide className="Swiper-slide">
                            <CardUser>
                            </CardUser>
                            </SwiperSlide>
                        </Swiper>
                    </section>
                </div>
           </main>
           
                <Footer/>
        </Container>
    )
}