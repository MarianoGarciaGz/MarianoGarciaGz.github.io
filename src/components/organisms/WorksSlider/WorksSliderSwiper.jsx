import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import projectsData from '@src/config/products.json';

const ContainerCards = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData.projects);

        const swiperContainer = document.querySelector('.mySwiper');

        const handleSlideChange = (e) => {
            const activeIndex = e.detail[0].activeIndex;
            changeBackgroundColor(activeIndex);
        };

        swiperContainer.addEventListener('slideChange', handleSlideChange);

        return () => {
            swiperContainer.removeEventListener('slideChange', handleSlideChange);
        };
    }, []);

    const changeBackgroundColor = (activeIndex) => {
        const backgroundColors = ['var(--bs-primary)', ...projects.map(project => project.color)];
        document.querySelector('.projects').style.backgroundColor = backgroundColors[activeIndex] || 'white';
    };

    const formatProjectName = (name) => {
        return name
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Eliminar diacríticos
            .replace(/\s+/g, ''); // Eliminar espacios
    };


    return (
        <>
            <Swiper
                className='mySwiper'
                modules={[Autoplay, Pagination]}
                spaceBetween={48}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={false}
                grabCursor={true}
                onSlideChange={(swiper) => {
                    changeBackgroundColor(swiper.activeIndex);
                }}
            >
                <SwiperSlide>
                    <div className='container-lg'>
                        <div className="row flex-row-reverse flex-wrap-reverse align-items-center g-5 py-5 text-white justify-content-center justify-content-md-between">
                            <div className="col-10 col-sm-8 col-md-5">
                                <img src="/assets/images/projects/cosaur.jpg" className="d-block mx-md-auto img-fluid rounded-5" alt="Bootstrap Themes" loading="lazy" />
                            </div>
                            <div className="col-md-7 col-xl-6">
                                <h2 className="display-5 lh-1 mb-3 text-center text-md-start">Proyectos finalizados</h2>
                                <p className="text-center text-md-start">Explora en este carousel algunos de nuestros trabajos realizados. Tenemos la experiencia para llevar tu negocio al siguiente nivel y aumentar tus ventas.</p>
                                <div className="d-flex justify-content-md-start">
                                    <a className="btn btn-secondary px-4 mx-auto m-md-0" href='/prices'>Precios</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
                        <div className='container-lg'>
                            <div className="row flex-row-reverse flex-wrap-reverse align-items-center g-5 py-5 text-white justify-content-center justify-content-md-between">
                                <div className="col-10 col-sm-8 col-md-5">
                                    <img
                                        src={`/assets/images/projects/${formatProjectName(project.name)}.jpeg`}
                                        className="project__img d-block mx-md-auto img-fluid rounded-5"
                                        alt={project.name}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="col-md-7 col-xl-6">
                                    <h3 className="fs-1 lh-1 mb-3 text-center text-md-start">{project.name}</h3>
                                    <p className="text-center text-md-start">{project.description}</p>
                                    <div className="d-flex justify-content-md-start">
                                        <a className="btn btn-secondary px-4 mx-auto m-md-0" href={project.link} target="_blank" rel="noopener noreferrer">Ir a la página</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ContainerCards;
