import React from "react";
import styled from "styled-components";
import { pxToRem } from "../../helpers";
import { useCalculator } from "../../hooks/useCalculator";
import { X_COLOR, Y_COLOR } from "../../constants/buttons";

const Display: React.FC = () => {
  const { display, memory, activeOperator } = useCalculator();

  return (
    <Container>
      <Bar>
        <span />
        <span style={{ color: X_COLOR }}>{memory ?? ""}</span>
      </Bar>
      <Bar>
        <span />
        <span>{activeOperator?.display}</span>
      </Bar>
      <Value data-cy="display" style={{ color: memory ? Y_COLOR : X_COLOR }}>
        {display}
      </Value>
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
  font-size: ${pxToRem(12)};

  span {
    font-size: inherit;
  }
`;

const Value = styled.span`
  display: flex;
  margin-left: auto;
  font-size: ${pxToRem(32)};
`;

export default Display;
