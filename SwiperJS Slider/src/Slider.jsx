import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { gsap } from "gsap";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

const images = [
    {src: "images/Image1.png", title: "Image 1"},
    {src: "images/Image2.jpg", title: "Image 2"},
    {src: "images/Image3.jpg", title: "Image 3"},
    {src: "images/Image4.png", title: "Image 4"},
    {src: "images/Image5.jpg", title: "Image 5"},
    {src: "images/Image6.jpg", title: "Image 6"},

]

export default function Slider (){
    const swiperWrapperRef = useRef(null);

    function adjustMargin() {
        const screenWidth = window.innerWidth;

        if(swiperWrapperRef.current){
            swiperWrapperRef.current.style.marginLeft = screenWidth <= 600 ?  "-75px" : screenWidth <= 900? "-90px" : "-150px";
        }
    }
    return (
        <>
        <Swiper
            modules={[Mousewheel, Pagination]}
            grabCursor={true}
            initialSlide={1}
            centeredSlides={true}
            slidesPerView="auto"
            speed={500}
            slideToClickedSlide={true}
            pagination={{clickable: true}}
            mousewheel={{thresholdDelta: 30}}
            onSwiper={(swiper) => {
                swiperWrapperRef.current = swiper.wrapperEl;
                swiper.on("resize", adjustMargin);
            }}
            onSlideChange={(swiper) => {
                const activeSlide = swiper.slides[swiper.activeIndex];
                gsap.fromTo(activeSlide, {scale: 0} , {scale: 1, duration: 1, transition: "back.inOut"});
            }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image.src} alt={image.title} />
                </SwiperSlide>
            ))}
        </Swiper>
        </>
    )
}