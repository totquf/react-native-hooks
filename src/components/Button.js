import React from "react";
import styled from "styled-components";

const Container = styled.TouchableOpacity`
    background-color: #3498db;
    border-radius: 15px;
    padding: 15px 20px;
    margin: 10px 0px;
    justify-content: center;
    `

const Title = styled.Text`
    font-size: 24px;
    font-weight: 600px;
    color: #fff;
    `

const Button = ({ onPress, title }) => {
    return (
        <Container onPress={onPress}>
            <Title>{title}</Title>
        </Container>
    )
}

export default Button;