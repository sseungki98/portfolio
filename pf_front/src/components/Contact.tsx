import React from "react";
import styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <Container className="font_popfine">
        <div>
          <ImgBox>
            <img
              src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
              width={300}
              onClick={() => window.open("https://github.com/sseungki98")}
              alt="github"
            />
          </ImgBox>
          <br />
          Github
        </div>
        <div>
          <ImgBox>
            <img
              src="https://i.namu.wiki/i/Jz0MFNR7_7LHx1Yda0Hy6929g3BD5fWmaARdUMMFPkFIAVC_ewY7BEcoIGhepmTKRBKmSxRSUBjI7pklIZLaAA.svg"
              width={300}
              onClick={() => window.open("https://seunghyunfe.tistory.com/")}
              alt="tstory"
            />
          </ImgBox>
          <br />
          TStory
        </div>
        <div>
          <ImgBox>
            <img
              className="mail"
              src="https://play-lh.googleusercontent.com/KSuaRLiI_FlDP8cM4MzJ23ml3og5Hxb9AapaGTMZ2GgR103mvJ3AAnoOFz1yheeQBBI"
              width={300}
              onClick={() => window.open("https://google.com")}
              alt="gmail"
            />
          </ImgBox>
          <br />
          sysh9498@gmail.com
        </div>
      </Container>
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    to top,
    #ff9a9e 0%,
    #fecfef 99%,
    #fecfef 100%
  );
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    text-align: center;
  }
  position: absolute;
  transform: translateY(70%);
  margin-left: 20rem;
  gap: 100px;
  .mail {
    border-radius: 50%;
  }
  img {
    cursor: pointer;
  }
`;

const ImgBox = styled.div`
  position: relative;
  width: 300px;
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
