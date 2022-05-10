import React, {useState, useEffect} from 'react';
import axios from 'axios';


const CoinsWithAxiosAndUseEffect = ()=>{
    console.log("first line of code in the component")
    //create a variable to store all the coins in that we get back
    let [coinList, setCoinList] = useState([])

    let [count, setCount] = useState(0)


    useEffect(()=>{
        console.log("inside the use effect!!");

        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        .then( response=>{
            console.log("got the response--> ", response) 
            setCoinList(response.data)
        })
        .catch(err=>{
            console.log("something went wrong",err)
        })
    },[count])

       
    

    console.log("doing other stufff while wating for the api results to come back")



    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Get new prices</button>
            <h3>I have checked the prices {count} times</h3>
            {
                coinList.map((coin, idx)=>{
                    return(
                        <div key={idx}>
                            <h3>{coin.name}</h3>
                            <p>Price: ${coin.current_price}</p>
                            <img src={coin.image} alt="" width= "200px" />
                        </div>
                    )
                })
            }
        </div>
    )
}



export default CoinsWithAxiosAndUseEffect;
