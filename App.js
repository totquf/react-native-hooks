import React, {useState} from "react";
import styled from "styled-components";
import Form from "./src/components/Form";
import Button from "./src/components/Button";
import Length from "./src/components/Length";
import Dog from "./src/components/Dog";

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
      <Dog/>
    </Container>
  )
}

export default App;