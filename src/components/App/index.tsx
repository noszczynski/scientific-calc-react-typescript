import styled from "styled-components";
import Buttons from "../../containers/Buttons";
import Display from "../../containers/Display";
import { pxToRem } from "../../helpers";
import { useCalculator } from "../../hooks/useCalculator";

const App = () => {
  const calculator = useCalculator();

  return (
    <Wrapper>
      <Display />
      <Buttons />
      <Debug lang="json">{JSON.stringify(calculator, null, 4)}</Debug>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${pxToRem(8)};
`;

const Debug = styled.pre``;

export default App;
