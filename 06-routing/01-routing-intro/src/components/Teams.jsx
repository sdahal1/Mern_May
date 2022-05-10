import React from 'react';
import { useParams } from "react-router";

const Teams = ()=>{

    const { id, color } = useParams();
    console.log("id and color are-->", id, color)
    //if the id is a number, show "team # is", if the id is not a number, show "team name is":
    return (
        <>
        <h3>Teams component. Teams below</h3>
        <ol>
            <li>Lakers</li>
            <li>Wizards</li>
            <li>Mavs</li>
            <li>Suns</li>
            <li>Knicks</li>
        </ol>
        <hr />
        <div style = {{backgroundColor: color}}>
            {
                id === undefined?
                <p>What is your favorite team?</p>:

                isNaN(id)?
                    id == "celtics"? <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Boston_Celtics.svg/1200px-Boston_Celtics.svg.png" width = "200px" alt="" />:
                    <h4>Displaying information team name is: {id} </h4> :
                    <h4>Displaying information team # is: {id} </h4>
            }

        </div>
        </>
    )
}


export default Teams;