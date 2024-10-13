import React, { useState } from 'react'
import Container from '../Container'
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/image/extracurricular1.png'
import img2 from '../../assets/image/extracurricular2.png'
import img3 from '../../assets/image/extracurricular3.png'

import './slide.css'

import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

type Props = {}

const extracurricularOptions = [
    {
        id: 1,
        title: 'BEN TRE 2024',
    },
    {
        id: 2,
        title: 'BEN TRE 2023',

    },
    {
        id: 3,
        title: 'DANCE PERFORMANCE',

    },
]

const Extracurricular = (props: Props) => {
    const [selectOption, setSelectOption] = useState(1)

    return (
        <Container>
            <div className='py-20 lg:py-36 space-y-12'>
                <h1 className='text-5xl text-primary-500 font-semibold text-center'>
                    Extracurricular
                </h1>
                {/* List Button */}
                <div className='flex flex-row flex-wrap gap-4 justify-center'>
                    {extracurricularOptions.map((option) => (
                        <div key={option.id}
                            className={`cursor-pointer px-6 py-2 rounded-xl text-lg font-semibold transition-colors duration-300
                                ${selectOption === option.id
                                    ? 'bg-primary-500 text-white'
                                    : 'bg-primary-100 text-gray-800'
                                }`}
                            onClick={() => setSelectOption(option.id)} // Set selected option on click
                        >
                            <span className='font-semibold text-base'>
                                {option.title}
                            </span>
                        </div>
                    ))}
                </div>
                <div>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide className=''>
                            <img src={img1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} alt="" />
                        </SwiperSlide>      <SwiperSlide>
                            <img src={img3} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </Container>
    )
}

export default Extracurricular