"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

import image_1 from "@/app/images/slider/sliderImg_1.jpg";
import image_2 from "@/app/images/slider/sliderImg_2.jpg";
import image_3 from "@/app/images/slider/sliderImg_3.jpg";

export default function Slider() {
  return (
    <Carousel
      autoPlay
      showArrows
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
    >
      <div>
        <Image src={image_1} alt="image-slider" />
      </div>
      <div>
        <Image src={image_2} alt="image-slider" />
      </div>
      <div>
        <Image src={image_3} alt="image-slider" />
      </div>
    </Carousel>
  );
}
