import Circle from "./Circle"
import React from "react";
import Parallelogram from "./Parallelogram";
import Rhombus from "./Rhombus";
import Square from "./Square";
import Triangle from "./Traingle";
class Shapes extends React.Component{
    render(){
        return(
            <div>
            <Circle r='6'/>
            <br/>
            <Parallelogram b='2' h='3'/>
            <br/>
            <Rhombus p='2' q='3'/>
            <br/>
            <Square s='3'/>
            <br/>
            <Triangle b='6' h='5'/>
            </div>
        )
    }
}

export default Shapes;