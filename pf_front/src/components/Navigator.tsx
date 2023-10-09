import React from "react";
import styled from "styled-components";
import "../../src/style/font.css";

interface NavProps {
  state: number;
  setter: React.Dispatch<React.SetStateAction<number>>;
  wrapRef: React.RefObject<HTMLDivElement | null>;
}

function Navigator({ state, setter, wrapRef }: NavProps) {
  function setY(state: number) {
    if (wrapRef.current) {
      wrapRef.current.style.top = state * -100 + "vh";
    }
  }
  return (
    <NavContainer className="font_popfine">
      <p
        style={{ color: state === 0 ? "black" : "gray" }}
        onClick={() => {
          setter(0);
          setY(0);
        }}
      >
        About Me
      </p>
      <p
        style={{ color: state === 1 ? "black" : "gray" }}
        onClick={() => {
          setter(1);
          setY(1);
        }}
      >
        Works
      </p>
      <p
        style={{ color: state === 2 ? "black" : "gray" }}
        onClick={() => {
          setter(2);
          setY(2);
        }}
      >
        Contact
      </p>
    </NavContainer>
  );
}

export default Navigator;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  position: fixed;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  p {
    cursor: pointer;
    color: gray;
  }
`;
