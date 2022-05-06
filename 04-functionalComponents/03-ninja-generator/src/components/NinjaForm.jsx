import React, {useState} from 'react';


const NinjaForm = ()=>{

    //create a state variable for each input from the form that we want to collect
    let [name, setName] = useState("");
    let [proPicUrl, setProPicUrl] = useState("");
    let [color,setColor] = useState("");

    //create state variable which is an array so that we can store all the pets that get submitted into it
    let [petList, setPetList] = useState([]);



    //create a submit handler below
    const submitPet = (e)=>{
        //the default behavior of a form when it is submitted, is to reload the page. we can prevent this from happening using preventDefault();
        e.preventDefault();

        //create a pet object (python dictionary) also called a hashmap
        let pet = {name, proPicUrl, color};
        console.log("pet looks like this-->", pet)

        //use the setPetList setter to update the petList array to have the pet object inside of it
        setPetList([...petList, pet]);

    }


    return(
        <>
            <form onSubmit={submitPet}>
                <div className="form-group">
                    <label htmlFor="">Name:</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Profile pic url</label>
                    <input onChange={(e)=>{setProPicUrl(e.target.value)}} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="">Belt color</label>
                    <input onChange={(e)=>{setColor(e.target.value)}} type="text" className="form-control" />
                </div>
                <input type="submit" value="Add Pet" className="btn btn-success mt-2" />
            </form>
            <hr />

            {/* {% for pet in petList %}
                <p>{{pet.name}}</p>
            {% endfor %} */}
            <div className="pet-list">
                {
                    petList.map((petObj,idx)=>{
                        return(
                            <div className="pet-card" style={{backgroundColor: petObj.color}}>
                                <h1>{petObj.name}</h1>
                                <p>Belt color: {petObj.color}</p>
                                <img src={petObj.proPicUrl} alt="" width="250px" height="250px" />
                            </div>
                        ) 
                    })
                }
            </div>

        </>
    )

}


export default NinjaForm;