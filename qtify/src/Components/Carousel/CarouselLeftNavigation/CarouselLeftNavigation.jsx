import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../../Assets/LeftArrow.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegin, setIsBegin] = useState(swiper.isBeginning)

  useEffect(() => {
    swiper.on('slideChange', () => {
      setIsBegin(swiper.isBeginning)
    })
  }, [swiper])

  return (
    <div className={styles.leftNavigation}>
      {!isBegin && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  ) 
};

export default CarouselLeftNavigation;
