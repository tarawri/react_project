import React from "react"

import Bborder from "./bborder"
class Ggame extends React.Component{
    render(){
        return(
     <div /*className="game" */>
        <div className="game-board">
            <Bborder />
             </div>
             <div className="game-info">
                 <div>{/* status */}</div>
                  <ol>{/* TODO */}</ol>
                  </div>
                   </div>
            
        );
    }
}


export default Ggame