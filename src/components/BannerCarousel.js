import React from 'react'
import { Box, Typography } from "@mui/material";
import imgurl from '../assets/images/imgurl';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";


function BannerCarousel() {
    const banners = [
        { img: imgurl.carouselimg1, text: "Latest Trends" },
        { img: imgurl.carouselimg2, text: "Exclusive Offers" },
        { img: imgurl.carouselimg3, text: "New Arrivals" },
    ];
    return (
        <div className='bannerCarousel'>
            <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto" }}>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    // autoplay={{ delay: 3000 }}
                    // loop
                    autoplay={false} loop
                >
                    {banners.map((banner, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                component="img"
                                src={banner.img}
                                alt={banner.text}
                                sx={{ width: "100%", height: "400px", objectFit: "cover" }}
                            />
                            <Typography
                                variant="h5"
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    background: "rgba(0, 0, 0, 0.6)",
                                    color: "white",
                                    fontWeight: "bold",
                                    padding: "10px 20px",
                                    borderRadius: "8px",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px"
                                }}
                            >
                                {banner.text}
                            </Typography>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </div>
    )
}



export default BannerCarousel
