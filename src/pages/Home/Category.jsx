import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import img1 from '../../assets/home/slide1.jpg';
import img2 from '../../assets/home/slide2.jpg';
import img3 from '../../assets/home/slide3.jpg';
import img4 from '../../assets/home/slide4.jpg';
import img5 from '../../assets/home/slide5.jpg';




const Category = () => {
    return (
          <Swiper className='mb-20 mt-20'
      spaceBetween={20}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={img1} alt="" /><h1 className='text-3xl text-center -mt-20'>Salad</h1></SwiperSlide>
      <SwiperSlide><img src={img2} alt="" /><h1 className='text-3xl text-center -mt-20'>Pizza</h1></SwiperSlide>
      <SwiperSlide><img src={img3} alt="" /><h1 className='text-3xl text-center -mt-20'>Soup</h1></SwiperSlide>
      <SwiperSlide><img src={img4} alt="" /><h1 className='text-3xl text-center -mt-20'>Dessert</h1></SwiperSlide>
       <SwiperSlide><img src={img5} alt="" /><h1 className='text-3xl text-center -mt-20'>Salad</h1></SwiperSlide>
      ...
    </Swiper>
    );
};

export default Category;