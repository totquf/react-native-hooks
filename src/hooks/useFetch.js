import React, { useState, useEffect } from "react";

export const useFetch = url => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                //fetch()함수의 결과값(promise데이터 타입)을 res변수에 넣음
                //fetch()로 받아오는 response는 header만 포함된것이기 때문에 await(.then과 동일)를 사용해 모두 받아올때까지 기다림
                const res = await fetch(url)

                //받아온 res데이터를 json()을 사용해 이건 json타입이라고 알려주면 promise반환를 반환하는데 
                //이때의 promise는 json을 js에 맞게 가공해주는 것
                //await를 사용해 모두 변환되면 다음줄 실행
                const result = await res.json()

                //응답이 성공했다면(bool값)
                if (res.ok) {
                    setData(result) //data상태 변경
                    setError(null)
                } else { //응답이 실패했을 경우를 에러로 지정해서 처리
                    throw result
                }

            //try에서 실행한 문장(url받아와서 json변환)에서 에러가 발생했을 경우 error상태 변경
            } catch (error) {
                setError(error)
            }
        }
    },[])  

    return {data,error}
}