import React from "react"

import Ssqure from "./ssquare"
class Bborder extends React.Component{

     renderSqure (i){
        return <Ssqure value = {i}/>
    }

    
    render(){
        const status = 'Gg Next player: X';
      
        return(
            <div>
                <div className="status">
                {status}
                </div>

                <div className="board-row">
      
                    {this.renderSqure(0)}
                    {this.renderSqure(1)}
                    {this.renderSqure(2)}
                </div>

                <div className="board-row">
                    {this.renderSqure(3)}
                    {this.renderSqure(4)}
                    {this.renderSqure(5)}
                </div>

                <div className="board-row">
                    {this.renderSqure(6)}
                    {this.renderSqure(7)}
                    {this.renderSqure(8)} 
                </div>
            
            </div>
            
        )
    }
}
export default Bborder