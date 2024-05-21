import { FC } from 'react'
import Slider from "react-slick";
import { worksImages } from './workImagesArray/worksArray';
import { useMediaQuery } from 'react-responsive'


const Works: FC = () => {
    const desktop = useMediaQuery({ query: '(min-width: 1200px)' })
    const phone = useMediaQuery({ query: '(max-width: 768px)' })

    const settings = {
        arrows: false,
        infinite: true,
        slidesToShow: desktop ? 4 : phone ? 1 : 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };

    return (
        <section className='ayelet_works'>
            <h2>כמה מהעבודות שלי:</h2>
            <div className="slider-container">
                <Slider {...settings}>
                    {worksImages.map((wrk, idx) => (
                        <div key={idx} className='ayelet_works__image'>
                            <div>
                                <img src={wrk.img} alt={wrk.alt} width={phone ? 320 : 410} height={phone ? 320 : 410} />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Works