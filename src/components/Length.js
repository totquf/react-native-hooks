import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Button from "./Button";

const StyledText = styled.Text`
    font-size: 24px;
    `
//텍스트의 길이를 반환
const getLength = text => {
    console.log(`1: ${text}`);
    console.log(`1: ${text.length}`);
    return text.length;
};

const list = ['JavaScript', 'Expo', 'Expo', 'React Native']

let idx = 0;
const Length = () => {
    
    //state
    const [text, setText] = useState(list[0]);

    //버튼을 누르면
    const _onPress = () => {
        ++idx; //1증가
        //맨처음,1,2,3 < 4
        if (idx < list.length) setText(list[idx]) //문자열 교체
    }
    
    //text의 상태가 이전값과 다를 경우에만 문자열의 길이를 반환하는 getLength(text)함수를 실행해 length변수에 넣음
    const length = useMemo(() => getLength(text), [text])
    
    
    return (
        <>  
            <StyledText>Text: {text}</StyledText>
            <StyledText>Length: {length}</StyledText>
            <Button title="Get Length" onPress={_onPress}/>
        </>
    )
}

export default Length;