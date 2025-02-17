import { ReactElement, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SwiperCommonProps {
    children: ReactElement[];
}

const SwiperCommon = ({ children }: SwiperCommonProps): ReactElement => {
    return (
        <Swiper
            loop={true}
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 }, 
                1024: { slidesPerView: 2 }, 
                1280: { slidesPerView: 3 },
            }}
            navigation
        >
            {children.map((child, index) => (
                <SwiperSlide key={index}>
                    {child}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperCommon;