import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/home/06.png';
import img2 from '../../assets/home/05.png';
import img3 from '../../assets/home/04.jpg';
import img4 from '../../assets/home/03.png';
import img5 from '../../assets/home/02.jpg';
import img6 from '../../assets/home/01.jpg';


const Banner = () => {
    return (
           <Carousel>
                <div>
                  <img src={img1} alt="" />
                   
                </div>
                <div>
                   <img src={img2} alt="" />
                </div>
                <div>
                   
                    <img src={img3} alt="" />
                </div>
                <div>
                     <img src={img4} alt="" />
                </div>
                <div>
                     <img src={img5} alt="" />
                </div>
                <div>
                    <img src={img6} alt="" />
                </div>
            </Carousel>
    );
};

export default Banner;