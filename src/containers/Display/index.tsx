import React from "react";
import styled from "styled-components";
import { pxToRem } from "../../helpers";
import { useCalculator } from "../../hooks/useCalculator";

type DisplayProps = {
  //
};

const Display: React.FC<DisplayProps> = () => {
  const { displayValue } = useCalculator();

  return (
    <Container>
      <Bar>
        <button>back</button>
        <span>Ans = 0</span>
      </Bar>
      <Value>{displayValue}</Value>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: ${pxToRem(72)};

  border: 1px solid #3c4043;
  border-radius: ${pxToRem(8)};
  margin-inline: auto;
  padding: ${pxToRem(10)} ${pxToRem(14)} ${pxToRem(0)} ${pxToRem(10)};

  &:hover {
    background-color: #303134;
  }
`;

const Bar = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Value = styled.span`
  display: flex;
  margin-left: auto;
  font-size: ${pxToRem(30)};
`;

export default Display;
