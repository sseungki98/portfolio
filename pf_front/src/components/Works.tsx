import React from "react";
import styled from "styled-components";
function Works() {
  return (
    <Wrapper>
      <Container className="font_NotoBold">
        <ImgBox>
          <img src="img/textme.png" width={400} alt="textme"/>
        </ImgBox>
        <ImgBox>
          <img src="img/celeb.png" width={400} alt="celeb"/>
        </ImgBox>
        <ImgBox>
          <img src="img/caart.png" width={400} alt="caart"/>
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
`;
