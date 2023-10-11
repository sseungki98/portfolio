import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import RightArrow from "./Arrows/RightArrow";
import LeftArrow from "./Arrows/LeftArrow";

interface CarouselProps {
  children: React.ReactNode;
  width: number;
}

interface ArrowProps {
  className?: string;
  style?: any;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function Carousel({ children, width }: CarouselProps) {
  function SamplePrevArrow({ className, style, onClick }: ArrowProps) {
    return (
      <div className={className} style={style} onClick={onClick}>
        <i className="xi-angle-left xi-3x" style={{ color: "white" }} />
      </div>
    );
  }

  function SampleNextArrow({ className, style, onClick }: ArrowProps) {
    return (
      <div className={className} style={style} onClick={onClick}>
        <i className="xi-angle-right xi-3x" style={{ color: "white" }} />
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="next-arrow" />,
    prevArrow: <SamplePrevArrow className="prev-arrow" />,
  };
  return (
    <SlideWrapper width={width}>
      <CustomSlider {...settings}>{children}</CustomSlider>
    </SlideWrapper>
  );
}

export default Carousel;

const SlideWrapper = styled.div<CarouselProps>`
  width: ${(props) => props.width + "px"};
  height: 800px;
`;

const CustomSlider = styled(Slider)``;
