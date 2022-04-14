import React from "react";
import Button, { ButtonAppearance } from "../Button";
import { useCalculator } from "../../hooks/useCalculator";
import { Mode } from "../../providers/CalculatorProvider";

export const RadianDegreesSwitch: React.FC = () => {
  const { currentMode, handleSetCurrentMode } = useCalculator();

  return (
    <>
      <Button
        appearance={ButtonAppearance.Light}
        disabled={currentMode === Mode.Rad}
        label={Mode.Rad}
        onClick={() => handleSetCurrentMode(Mode.Rad)}
      />
      <Button
        appearance={ButtonAppearance.Light}
        disabled={currentMode === Mode.Deg}
        label={Mode.Deg}
        onClick={() => handleSetCurrentMode(Mode.Deg)}
      />
    </>
  );
};
