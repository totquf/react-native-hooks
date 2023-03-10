import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const StyledTextInput = styled.TextInput.attrs({
    autoCapitalize: 'none', //텍스트 자동 대문자x
    autoCorrect: false, //오탈자 자동 수정x
})`
    border: 1px solid #757575;
    padding: 10px;
    margin: 10px;
    width: 200px;
    font-size: 20px;
    `

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
    `
const Form = () => {

    //state
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const refName = useRef(null)
    const refEmail = useRef(null)

    useEffect(() => {
        console.log('컴포넌트 마운트 됨')
        //컴포넌트가 마운트될때 refName컴포넌트를 포커스
        refName.current.focus()
        return () => console.log('컴포넌트 언마운트 됨')
    },[])

    return (
        <>
            <StyledText>Name: {name}</StyledText>
            <StyledText>Email: {email}</StyledText>

            <StyledTextInput
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="이름을 입력하세요"

                ref={refName}
                returnKeyType="next" //키보드 버튼이름 다음으로 변경
                //입력이 완료되면 refEmail컴포넌트를 포커스
                onEndEditing={() => refEmail.current.focus()}
            />

            <StyledTextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="이메일을 입력하세요"

                ref={refEmail}
                returnKeyType="done" //키보드 버튼이름 다음으로 변경
            />
        </>
    )
}

export default Form;
