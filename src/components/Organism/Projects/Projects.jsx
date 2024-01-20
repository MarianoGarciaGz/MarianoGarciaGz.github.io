import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Projects.scss";
import CardProject from "@components/Molecules/CardProject";

import Panin from "@img/projects/Panindicuaro.jpeg";
import Lily from "@img/projects/Lily.jpeg";
import Codesaur from "@img/projects/Codesaur.jpeg";
import Mafer from "@img/projects/SeguridadMafer.jpeg";
import Hz from "@img/projects/hertz.jpeg";

import H2 from "@components/Atoms/H2/H2";
import Section from "@layout/Section/Section";

const Projects = () => {
  return (
    <Section container="fluid" name="projects" className="projects">
      <H2>Projects</H2>
      <Swiper
        className="mySwiper px-5 py-3"
        data-aos="fade-up"
        data-aos-delay="0"
        data-aos-duration="500"
        data-aos-once="true"
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={16}
        loop={false}
        grabCursor={false}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide className="h-100">
          <CardProject
            title="Invitación a informe de gobierno del ayuntamiento de Panindicuaro"
            info="Página web de invitación para el informe de gobierno del ayuntamiento de Panindicuaro con una cuenta regresiva."
            img={Panin}
            time="72 hrs"
            link="https://cspanindicuaro.github.io/"
          />
        </SwiperSlide>
        <SwiperSlide className="h-100">
          <CardProject
            title="Codesaur Tech"
            info="Página asombrosa, para una empresa increíble de desarrollo de páginas web, software y venta de productos de hardware de la mejor calidad ;)"
            img={Codesaur}
            time="72 hrs"
            link="https://codesaur.tech"
          />
        </SwiperSlide>
        <SwiperSlide className="h-100">
          <CardProject
            title="Seguridad Mafer"
            info="Landing page para la empresa de seguridad Seguridad Mafer, una página con buenas practicas de SEO para ser mejor posicionada en los buscadores."
            img={Mafer}
            time="72 hrs"
            link="http://www.seguridadmafer.com.mx/"
          />
        </SwiperSlide>
        <SwiperSlide className="h-100">
          <CardProject
            title="Calculadora de Hertz"
            info="Aplicación web para calcular los hertz de cada nota musical dado la frecuencia de referencia que se quiera tomar."
            img={Hz}
            time="72 hrs"
            link="https://marianogarciagz.github.io/tonal-hertz-calculator/"
          />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
};

export default Projects;
