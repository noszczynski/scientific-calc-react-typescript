import React, { useCallback, useEffect, useState } from "react";
import Button, { OperatorButton } from "../../components/Button";
import styled from "styled-components";
import { pxToRem } from "../../helpers";
import buttons from "../../constants/buttons";
import { useCalculator } from "../../hooks/useCalculator";

const Buttons: React.FC = () => {
  const { addOperation, saveButtonRefs } = useCalculator();

  const [buttonRefsCache, setButtonRefsCache] = useState<
    (HTMLButtonElement | null)[]
  >([]);

  const callback = useCallback(
    (button: OperatorButton) => () => addOperation(button),
    [addOperation]
  );

  useEffect(() => {
    if (buttonRefsCache.filter((r) => r !== null).length === buttons.length) {
      saveButtonRefs(buttonRefsCache as HTMLButtonElement[]);
    }
  }, [buttonRefsCache, saveButtonRefs]);

  return (
    <Wrapper>
      <Container>
        {buttons.map((button) => (
          <Button
            key={button.operator.toString()}
            setRef={(ref: HTMLButtonElement) => {
              setButtonRefsCache((state) => {
                if (ref !== null) {
                  state.push(ref);
                }

                return state;
              });
            }}
            onClick={callback(button)}
            {...button}
          />
        ))}
      </Container>
      <Hint>Press and hold &quot;h&quot; to show help</Hint>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Hint = styled.span`
  display: flex;
  margin-top: ${pxToRem(4)};
  font-size: ${pxToRem(8)};
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: ${pxToRem(4)};
`;

export default Buttons;
