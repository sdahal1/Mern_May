import React, {useState} from 'react';
import axios from 'axios';


const CoinsWithAxios = ()=>{

    //create a variable to store all the coins in that we get back
    let [coinList, setCoinList] = useState([])



    const getCoins = ()=>{
       
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then( convertedResponse=>{
                console.log("got the response--> ", convertedResponse) 
                setCoinList(convertedResponse.data)
            })
            .catch(err=>{
                console.log("something went wrong",err)
            })

        console.log("doing other stufff while wating for the api results to come back")

    }


    return (
        <div>
            <button onClick = {getCoins}>Click me to get the latest coin info</button>
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



export default CoinsWithAxios;
