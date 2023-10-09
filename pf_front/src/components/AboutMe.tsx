import React from "react";
import styled from "styled-components";

function AboutMe() {
  return (
    <Box>
      <Title className="font_popfine">Hello, I'm Software Developer!</Title>
      <Wrapper>
        <img src="img\my_pic.jpg" width={300} height={400} alt="my_pic"/>
        <Container className="font_NotoBold">
          <p>이승현</p>
          <p>Dankook Univ SW dept.</p>
          <p>26 years old</p>
          <p>
            Tech Stack: <br />
            JavaScript, Typescript, React, Django, Vue, HTML, CSS
          </p>
          <p>Focus In Web FrontEnd</p>
          <p>No Pain, No Gain</p>
          <p>Interested in Cloud, CI/CD</p>
        </Container>
      </Wrapper>
    </Box>
  );
}

export default AboutMe;

const Wrapper = styled.div`
  display: grid;
  padding: 40px;
  gap: 30px;
  grid-template-columns: 300px 1fr;
  position: absolute;
  align-items: center;
  transform: translateY(50%);
  left: 10%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 30px;
`;

const Title = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100px;
  z-index: 5;
  font-size: 80px;
`;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    45deg,
    #ff9a9e 0%,
    #fad0c4 99%,
    #fad0c4 100%
  );
`;
