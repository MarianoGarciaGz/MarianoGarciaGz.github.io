import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PlansSwiper = ({ plans }) => {
    return (
        <Swiper
            className='mySwiper'
            modules={[Pagination, Navigation]}
            navigation={true}
            grabCursor={true}
            spaceBetween={48}
            pagination={{ clickable: true }}
            slidesPerView={3}
            breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
            }}
        >
            {plans.map((plan, index) => (
                <SwiperSlide key={index}>
                    <div className='card mb-4 rounded-3 text-center'>
                        <div className='card-header py-3'>
                            <h3 className='fs-2 my-0 fw-normal'>{plan.name}</h3>
                        </div>
                        <div className='card-body'>
                            <p className='Prices-price h6 display-5 m-0'>{plan.price}</p>
                            <p className='Prices-price h6 fs-3 m-0'>
                                <del>{plan.originalPrice}</del>
                            </p>
                            <div className='mb-4'>
                                <p className='badge bg-primary m-0'>Ahorra un {plan.discount}</p>
                            </div>
                            <p className='mt-3 mb-4'>{plan.description}</p>
                            <a type='button' className='w-100 btn btn-lg btn-primary'>Contratar</a>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PlansSwiper;
