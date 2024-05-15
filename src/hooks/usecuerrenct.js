import { useState, useEffect } from "react";

function useCurrency(currency){
    const [data, setdata] = useState({})
    useEffect(() => {
        async function fetchcurrency(){
            const curr = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            const res = await curr.json();
            setdata(res[currency])
        }
        fetchcurrency();
    }, [currency])
    return data
}

export default useCurrency;