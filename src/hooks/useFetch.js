import React, { useState, useEffect } from "react";

export const useFetch = url => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(async () => {
        try {
           
            const res = await fetch(url)

      
            const result = await res.json()

            //응답이 성공했다면(bool값)
            if (res.ok) {
                setData(result)
                setError(null)
            } else { //응답이 실패했을 경우를 에러로 지정해서 처리
                throw result
            }

          //try에서 실행한 문장(url받아와서 json변환)  
        } catch (error) {
            setError(error)
            }
        }
    )  

    return {data,error}
}