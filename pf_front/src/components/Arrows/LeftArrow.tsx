import React from "react";
import styled from "styled-components";

function LeftArrow() {
  return <LArrow className="xi-angle-left xi-3x" style={{ color: "white" }} />;
}

export default LeftArrow;

const LArrow = styled.i`
  
  position: absolute;
  left: -60px;
  top:50%;
  transform: translateY(-50%);
  z-index: 99;
  text-align: left;
  line-height: 30px;
  cursor: pointer;
`;
