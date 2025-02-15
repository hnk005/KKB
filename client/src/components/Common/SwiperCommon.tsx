import { ReactElement, useState } from 'react';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface SwiperCommonProps {
    slidesPerView: number;
    children: ReactElement[];
}

const SwiperCommon = ({ slidesPerView, children }: SwiperCommonProps): ReactElement => {
    return (
        <>
            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={slidesPerView}
                navigation
            >
                {children.map((child, index) => (
                    <SwiperSlide key={index}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>

    );
};

export default SwiperCommon;