import React, { useCallback } from "react";
import Button from "../../components/Button";
import styled from "styled-components";
import { pxToRem } from "../../helpers";
import { Operator } from "../../providers/CalculatorProvider";
import buttons from "../../constants/buttons";
import { useCalculator } from "../../hooks/useCalculator";
import { RadianDegreesSwitch } from "../../components/RadianDegreesSwitch";

type ButtonsProps = {
  //
};

const Buttons: React.FC<ButtonsProps> = () => {
  const { addOperation, can } = useCalculator();

  const callback = useCallback(
    (operator: Operator) => () => addOperation(operator),
    [addOperation]
  );

  return (
    <Container>
      <RadianDegreesSwitch />
      {buttons.map((button) => (
        <Button
          key={button.label.toString()}
          disabled={!can.has(button.operator)}
          onClick={callback(button.operator)}
          {...button}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: ${pxToRem(4)};
`;

export default Buttons;
