import React from "react";
import styled from "styled-components";

function RightArrow() {
  return <RArrow className="xi-angle-right xi-3x" style={{ color: "white" }} />;
}

export default RightArrow;

const RArrow = styled.div`
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
  cursor: pointer;
`;
