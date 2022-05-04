import React, { Component } from 'react';

class Menu extends Component{

    constructor(props){
        super(props);
        this.state = {
            price: this.props.price
        }
    }
  
    
    render(){
        let {name, price, calories, children} = this.props;
        
        const increasePrice = ()=>{
            // this.state.price++;
            this.setState({price: this.state.price+1})
        }

        return (
            <>
                <div>
                    <h4>Item Name: {name}</h4>
                    <p>Price: ${this.state.price}</p>
                    <p>Calories: {calories}</p>
                    {children}
                    <button onClick={increasePrice}>Inflation for {name} </button>
            
                    {/* <button onClick={()=>this.setState({price: this.state.price+1})}>Inflation for {name} </button> */}
                </div>
                <hr />
            </>
        )
    }
}

export default Menu;

