import React, { useCallback } from "react";
import Button, { OperatorButton } from "../../components/Button";
import styled from "styled-components";
import { pxToRem } from "../../helpers";
import buttons from "../../constants/buttons";
import { useCalculator } from "../../hooks/useCalculator";
import { RadianDegreesSwitch } from "../../components/RadianDegreesSwitch";

const Buttons: React.FC = () => {
  const { addOperation } = useCalculator();

  const callback = useCallback(
    (button: OperatorButton) => () => addOperation(button),
    [addOperation]
  );

  return (
    <Container>
      <RadianDegreesSwitch />
      {buttons.map((button) => (
        <Button
          key={button.label.toString()}
          onClick={callback(button)}
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
