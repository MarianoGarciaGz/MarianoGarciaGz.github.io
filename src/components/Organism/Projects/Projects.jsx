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
            title="Invitation to the government report of the Panindicuaro city council"
            info="Website invitation for the government report of the Panindicuaro city council with a countdown."
            img={Panin}
            time="72 hrs"
            link="https://cspanindicuaro.github.io/"
          />
        </SwiperSlide>
        <SwiperSlide className="h-100">
          <CardProject
            title="Codesaur Tech"
            info="Amazing website for an incredible company specializing in web development, software, and the sale of top-quality hardware products ;)"
            img={Codesaur}
            time="72 hrs"
            link="https://codesaur.tech"
          />
        </SwiperSlide>
        <SwiperSlide className="h-100">
          <CardProject
            title="Seguridad Mafer"
            info="Landing page for the security company Seguridad Mafer, a page with good SEO practices to enhance its search engine rankings."
            img={Mafer}
            time="72 hrs"
            link="http://www.seguridadmafer.com.mx/"
          />
        </SwiperSlide>
        <SwiperSlide className="h-100">
          <CardProject
            title="Hertz Calculator"
            info="Web application to calculate the hertz of each musical note given the reference frequency you want to use."
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
