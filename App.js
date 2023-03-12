import React, {useState} from "react";
import styled from "styled-components";
import Form from "./src/components/Form";
import Button from "./src/components/Button";
import Length from "./src/components/Length";

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  `
const App = () => {
  
  const [isVisible, setIsVisible] = useState(true)

  return (
    <Container>
      <Length/>
    </Container>
  )
}

export default App;