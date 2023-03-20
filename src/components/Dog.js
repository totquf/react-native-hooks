import React from "react";
import styled from "styled-components";
import { useFetch } from "../hooks/useFetch";

const StyledImage = styled.Image`
    background-color: #7fc8d;
    width: 300px;
    height: 300px;
    `
const ErrorMessage = styled.Text`
    font-size: 18px;
    color: #e74c3c;
    `
const LoadingMessage = styled.Text`
    font-size: 18px;
    color: #2ecc71;
    `
const URL = "http://dog.ceo/api/breeds/image/random";
const Dog = () => {
    const { data, error, inProgress } = useFetch(URL);

    return (
        <>  
            {inProgress && ( //inProgress값이 true상태이면 LoadingMessage컴포넌트 출력
                <LoadingMessage>API 요청이 진행 중입니다</LoadingMessage>
            )}
            <StyledImage source={data?.message ? { url: data.message } : null} />
            <ErrorMessage>{error?.message}</ErrorMessage>
        </>
    )
}

export default Dog;