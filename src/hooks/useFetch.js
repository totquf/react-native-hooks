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
                //만약 url이 정상이 아니라 fetch()가 실패했다면 catch로 가서 에러발생

                //받아온 res데이터를 json()을 사용해 이건 json타입이라고 알려주면 promise반환를 반환하는데 
                //이때의 promise는 json을 js에 맞게 가공해주는 것
                //await를 사용해 모두 변환되면 다음줄 실행
                const result = await res.json()

                //요청에 대한 응답이 없다면, 일단 요청은 존재해야하니까 fetch오류는 정상(bool값)
                if (res.ok) {
                    setData(result) //data상태 변경
                    setError(null)
                } else { //서버에서 오류가 났다면 경우를 에러로 지정해서 처리, catch문으로 이동되어 코드 계속 실행
                    throw 'url은 잘 받아왔지만 서버 내부에 오류가 있습니다'
                }

            //try에서 실행한 문장(url받아와서 json변환)에서 에러가 발생했을 경우 error상태 변경
            } catch (error) {
                setError(error.message)

            }
        }
        fetchData()
    },[])  

    return { data, error }
}