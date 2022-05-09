import React, {useState} from 'react';


const Coins = ()=>{

    //create a variable to store all the coins in that we get back
    let [coinList, setCoinList] = useState([])



    const getCoins = ()=>{
        //fetch gives back a promise. a promise is a set of code that is asynchronous (it doest does not go from line to line) where the response time is not exact so we can allow it to perform some task or run some code while it is waiting to get back the response. When it gets back the response, we can tell it what to do in the .then()
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(response =>{ //.then means whenever the api is done getting back the data
                return response.json() //convert the response to json that our application can read
            })
            .then( convertedResponse=>{
                console.log("got the response--> ", convertedResponse) //when the dog gets back the response 
                setCoinList(convertedResponse)
            })
            .catch(err=>{ //.catch is for if there is any issue in getting the data
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



export default Coins;
