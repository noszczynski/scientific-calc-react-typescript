import React, { useCallback } from "react";
import Button from "../../components/Button";
import styled from "styled-components";
import { pxToRem } from "../../helpers";
import buttons from "../../constants/buttons";
import { useCalculator } from "../../hooks/useCalculator";
import { RadianDegreesSwitch } from "../../components/RadianDegreesSwitch";
import { Operator } from "../../constants/Operators";

type ButtonsProps = {
  //
};

const Buttons: React.FC<ButtonsProps> = () => {
  const { addOperation } = useCalculator();

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
