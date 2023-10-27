// Dont use jsx as extension is these self created hooks its always a good practise to
// use .js as its extension

import { useEffect,useState } from "react";

function useCurrencyInfo(currency){

    const [data,setdata]=useState({}) //initial manlo ek empty object ara hai fir use udate karte rahege

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        ).then((res)=>{res.json}  // kuki data toh string ki form mei ata hai API se mostly We need to convert it to JSON
        ).then((res)=>{setdata(res[currency])})

    },[currency])

    return data;
}

export default useCurrencyInfo