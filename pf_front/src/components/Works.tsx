import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import Carousel from "./Carousel";
function Works() {
  const [isWorkClick, setIsWorkClick] = useState({
    textme: false,
    celeb: false,
    caart: false,
  });
  return (
    <Wrapper>
      {isWorkClick.textme && (
        <Overlay>
          <motion.div
            className="overlay"
            animate={{
              scale: [0, 0.4, 1],
              borderRadius: ["10%", "10%", "0%"],
            }}
            transition={{ duration: 1, times: [0, 0.5, 1] }}
          />
          <MainDiv>
            <X
              src="/img/x_icon.png"
              onClick={() => setIsWorkClick({ ...isWorkClick, textme: false })}
            />
            <TMCarousel>
              <Carousel width={350}>
                <TMImg src="img/textme/textme_1.jpg" />
                <TMImg src="img/textme/textme_2.jpg" />
                <TMImg src="img/textme/textme_3.gif" />
                <TMImg src="img/textme/textme_4.jpg" />
                <TMImg src="img/textme/textme_5.gif" />
                <TMImg src="img/textme/textme_6.jpg" />
              </Carousel>
            </TMCarousel>
            <InfoDiv left={35}>
              <Title>함께 만드는 추억 저장소, Text Me</Title>
              <SubTitle>
                연말에 사진과 메세지를 통해 친구와의 추억을 공유하고 보관할 수
                있는 서비스
              </SubTitle>
              <Title>진행기간: 2022.11 ~ 2022.12</Title>
              <Title>기여도: Frontend Developer, 50%</Title>
              <Title>기술 스택: React, TypeScript, Next 13</Title>
              <Title style={{ color: "#1cffbf" }}>
                <a
                  className="textme"
                  href="https://github.com/GIFTERZ/2023-text-me"
                  target="_blank"
                  rel="noreferrer"
                >
                  Text Me Project Github Link
                </a>
              </Title>
            </InfoDiv>
          </MainDiv>
        </Overlay>
      )}
      {isWorkClick.celeb && (
        <Overlay>
          <motion.div
            className="overlay"
            animate={{
              scale: [0, 0.4, 1],
              borderRadius: ["10%", "10%", "0%"],
            }}
            transition={{ duration: 1, times: [0, 0.5, 1] }}
          />

          <MainDiv>
            <X
              src="/img/x_icon.png"
              onClick={() => setIsWorkClick({ ...isWorkClick, celeb: false })}
            />
            <CACarousel>
              <Carousel width={700}>
                <CAImg src="img/celeb/celeb_1.png" />
                <CAImg src="img/celeb/celeb_2.png" />
                <CAImg src="img/celeb/celeb_3.png" />
                <CAImg src="img/celeb/celeb_4.png" />
                <CAImg src="img/celeb/celeb_5.png" />
                <CAImg src="img/celeb/celeb_6.png" />
                <CAImg src="img/celeb/celeb_7.png" />
                <CAImg src="img/celeb/celeb_8.png" />
                <CAImg src="img/celeb/celeb_9.png" />
                <CAImg src="img/celeb/celeb_10.png" />
                <CAImg src="img/celeb/celeb_11.png" />
                <CAImg src="img/celeb/celeb_12.png" />
              </Carousel>
            </CACarousel>
            <InfoDiv left={46}>
              <Title>축하/기념 커스터마이징 선물 주문 서비스, CELEB</Title>
              <SubTitle>
                커스터마이징 제품 판매나 구매 시 편리성 제고를 위한 축하/기념
                선물 맞춤 주문 서비스
              </SubTitle>
              <Title>진행기간: 2019.09 ~ 2019.11</Title>
              <Title>기여도: Frontend Developer, 70%</Title>
              <Title>기술 스택: JavaScript, HTML, CSS, Bootstrap</Title>
              <Title style={{ color: "#feffba" }}>
                <a
                  className="celeb"
                  href="https://github.com/sseungki98/CELEB"
                  target="_blank"
                  rel="noreferrer"
                >
                  CELEB Project Github Link
                </a>
              </Title>
            </InfoDiv>
          </MainDiv>
        </Overlay>
      )}
      {isWorkClick.caart && (
        <Overlay>
          <motion.div
            className="overlay"
            animate={{
              scale: [0, 0.4, 1],
              borderRadius: ["10%", "10%", "0%"],
            }}
            transition={{ duration: 1, times: [0, 0.5, 1] }}
          />
          <MainDiv>
            <X
              src="/img/x_icon.png"
              onClick={() => setIsWorkClick({ ...isWorkClick, caart: false })}
            />
            <CACarousel>
              <Carousel width={700}>
                <CAImg src="img/caart/caart_1.png" />
                <CAImg src="img/caart/caart_2.png" />
                <CAImg src="img/caart/caart_3.png" />
                <CAImg src="img/caart/caart_4.png" />
                <CAImg src="img/caart/caart_5.png" />
                <CAImg src="img/caart/caart_6.png" />
                <CAImg src="img/caart/caart_7.png" />
              </Carousel>
            </CACarousel>
            <InfoDiv left={46}>
              <Title>나만의 차를 커스터마이징, CaArt</Title>
              <SubTitle>
                현대자동차의 내 차 만들기 프로세스를 개선하여 사용자의 이탈율을
                낮추는 프로젝트
              </SubTitle>
              <Title>진행기간: 2023.07 ~ 2023.08</Title>
              <Title>기여도: Frontend Developer, 50%</Title>
              <Title>기술 스택: React, TypeScript</Title>
              <Title style={{ color: "#4d73ff" }}>
                <a
                  className="caart"
                  href="https://github.com/sseungki98/H6-CaArt"
                  target="_blank"
                  rel="noreferrer"
                >
                  CaArt Project Github Link
                </a>
              </Title>
            </InfoDiv>
          </MainDiv>
        </Overlay>
      )}
      <Container className="font_NotoBold">
        <ImgBox>
          <img
            src="img/textme.png"
            width={400}
            alt="textme"
            onClick={() => {
              setIsWorkClick({ ...isWorkClick, textme: true });
            }}
          />
        </ImgBox>
        <ImgBox>
          <img
            src="img/celeb.png"
            width={400}
            alt="celeb"
            onClick={() => {
              setIsWorkClick({ ...isWorkClick, celeb: true });
            }}
          />
        </ImgBox>
        <ImgBox>
          <img
            src="img/caart.png"
            width={400}
            alt="caart"
            onClick={() => {
              setIsWorkClick({ ...isWorkClick, caart: true });
            }}
          />
        </ImgBox>
        <div>
          <Info>함께 만드는 추억저장소</Info>
          <Title>Text Me</Title>
        </div>
        <div>
          <Info>축하/기념 커스터마이징 선물 주문 서비스</Info>
          <Title>CELEB</Title>
        </div>
        <div>
          <Info>나만의 자동차를 커스터마이징</Info>
          <Title>CaArt</Title>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Works;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .overlay {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 0.2fr;
  text-align: center;
  align-items: center;
  justify-items: center;
  width: 80%;
  margin-left: 100px;
  transform: translateY(40%);
`;

const ImgBox = styled.div`
  position: relative;
  width: 400px;
  overflow: hidden;
  img {
    cursor: pointer;
    display: block;
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
    &:hover {
      transform: translateY(-10px);
    }
  }
`;

const Info = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Title = styled.p`
  font-size: 40px;
  a {
    &.textme {
      &:visited {
        color: #1cffbf;
      }
    }
    &.celeb {
      &:visited {
        color: #feffba;
      }
    }
    &.caart {
      &:visited {
        color: #4d73ff;
      }
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 100vh;
  z-index: 10;
`;

const X = styled.img`
  position: absolute;
  top: 40px;
  right: 40px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const TMImg = styled.img`
  width: 100%;
  height: 600px;
  border-radius: 10px;
`;

const TMCarousel = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  left: 200px;
`;

const CAImg = styled.img`
  width: 500px;
  height: 600px;
  border-radius: 10px;
`;

const InfoDiv = styled.div<{ left: number }>`
  width: 50vw;
  height: 600px;
  position: absolute;
  top: 50%;
  transform: translateY(-53%);
  left: ${(props) => props.left + "%"};
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: "GmarketMedium";
`;

const SubTitle = styled.p`
  font-size: 25px;
`;

const show = keyframes`
  0% {
    opacity: 0;
    visibility: visible;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
`;

const MainDiv = styled.div`
  visibility: hidden;
  animation: ${show} 2s ease;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;

const CACarousel = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  left: 100px;
`;
