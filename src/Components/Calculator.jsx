import React, { useState } from 'react'

import "./Calculator.css";

const Calculator = ()  =>{

    const [value, setValue] = useState("");

    

    return(
        <>
        <div className="container">

        <div className="cal">
            <input type="text" id="inputBox" placeholder="0" readOnly value={value}  />
            </div>

            <div className="cal">
          
            <input type="button" value="AC" id="ac" onClick = {e => setValue("")}/>
            <input type="button" value="DEL" id="del" onClick = {e => setValue(value.slice(0, -1))}/>
            <input type="button" value="%" id="per" onClick = {e => setValue(value + e.target.value)}/>
            <input type="button" value="/" id="div" onClick = {e => setValue(value + e.target.value)}/>
            </div> 

            <div className="cal">
            <input type="button" value="7" onClick = {e => setValue(value + e.target.value)}/>
            <input type="button" value="8" onClick = {e => setValue(value + e.target.value)}/>
            <input type="button" value="9" onClick = {e => setValue(value + e.target.value)}/>
            <input type="button" value="*" id="multi" onClick = {e => setValue(value + e.target.value)}/>
          
            </div> 

            <div className="cal">
            <input type="button" value="4" onClick = {e => setValue(value + e.target.value)}/>
            <input type="button" value="5" onClick = {e => setValue(value + e.target.value)}/>
            <input type="button" value="6" onClick = {e => setValue(value + e.target.value)}/>
            <input type="button" value="-" id="sub" onClick = {e => setValue(value + e.target.value)}/>
            </div> 

            <div className="cal">
           
            <input type="button" value="1" onClick = {e => setValue(value + e.target.value)}/>
            <input type="button" value="2" onClick = {e => setValue(value + e.target.value)}/>
            <input type="button" value="3" onClick = {e => setValue(value + e.target.value)}/>
            <input type="button" value="+" id="add" onClick = {e => setValue(value + e.target.value)}/>
            </div> 

            <div className="cal">
            <input type="button" value="00" onClick = {e => setValue(value + e.target.value)}/>
            <input type="button" value="0" onClick = {e => setValue(value + e.target.value)}/>
            <input type="button" value="." onClick = {e => setValue(value + e.target.value)}/>
            <input type="button" value="=" id="eql" onClick = {e => setValue(eval(value))}/>
            </div> 
 
        </div>
        </>
    );
}

export default Calculator