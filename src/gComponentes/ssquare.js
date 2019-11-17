import React from "react"

class Ssquare extends React.Component{

    state = {
        value: null,
    }
    render(){
        
       
        return( 
             <button
            className="square" 
            onClick = {()=>this.setState({value: "X"})}
            >
            {this.state.value}
            </button>
                       
        )
    }
}
export default Ssquare