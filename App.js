import React from "react";
import styled from "styled-components";
import Counter from "./src/components/Counter";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  `
const App = () => {
  return (
    <Container>
      <Counter />
    </Container>
  )
}

export default App;