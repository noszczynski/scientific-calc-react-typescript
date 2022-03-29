import React from "react";
import styled from "styled-components";
import Buttons from "../../containers/Buttons";
import Display from "../../containers/Display";
import {pxToRem} from "../../helpers";

const App = () => {
    return (
        <Wrapper>
            <Display />
            <Buttons />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${pxToRem(8)};
`;

export default App;
