import { Link, type PageProps } from "gatsby"
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Line } from "../components/Lines";
import { Keyboard } from "../components/Keyboard";
import { generateNum } from "../gameFuncs/generateNumber";
import { WinMessage } from "../components/Message";
import { match } from "assert";

const Numberle: React.FC<PageProps> = () => {
    const [userNum,setUserNum]=useState<number[]>([])
    const [lineNum,setLineNum]=useState(0)
    const [targetNum,setTargetNum]=useState<number[]>([])
    const [matches,setMatches]=useState<('green'|'yellow'|'gray')[]>([])
    const [hasWon,setHasWon]=useState<boolean|null>(null)
    
    useEffect(()=>setTargetNum(generateNum()),[])
    useEffect(()=>{
        if(matches.join()==='green,green,green,green,green'){
            setHasWon(true)
        }else if(lineNum===6){
            setHasWon(false)
        }
    },[matches])

    const addNumber=(num:number)=>{
       if(userNum.length===5){
        return
       }
       setUserNum([...userNum,num])
    }
    
    const deleteNumber=()=>{
        if(userNum.length===0){
            return
        }
        const newArr=userNum.slice(0, -1)
        setUserNum(newArr)
    }

    const changeLine=(num:number)=>{
        setLineNum(num)
    }

    const clearNumber=()=>{
        setUserNum([])
    }

    const changeLineColor=(match:('green'|'yellow'|'gray')[])=>{
        setMatches(match)
    }

    return(<PageBody>
    <GameBody>
        {hasWon!==null&&<WinMessage hasWon={hasWon}></WinMessage>}
        <Line num={(lineNum===1)?userNum:undefined} colors={(lineNum===2)?matches:undefined}></Line>
        <Line num={(lineNum===2)?userNum:undefined} colors={(lineNum===3)?matches:undefined}></Line>
        <Line num={(lineNum===3)?userNum:undefined} colors={(lineNum===4)?matches:undefined}></Line>
        <Line num={(lineNum===4)?userNum:undefined} colors={(lineNum===5)?matches:undefined}></Line>
        <Line num={(lineNum===5)?userNum:undefined} colors={(lineNum===6)?matches:undefined}></Line>
        <Keyboard showAddedNum={addNumber} deleteNum={deleteNumber} changeLine={changeLine} clearNumber={clearNumber} userNumArr={userNum} targetNumArr={targetNum} changeLinesColors={changeLineColor}></Keyboard>
    </GameBody>
</PageBody>)
}

export default Numberle;
const PageBody=styled.div`
width:100%;
min-height:100vh;
height:100%;
`
const GameBody=styled.div`
position:relative;
max-width:400px;
border: 1px solid black;
border-radius:30px;
margin:30px auto;
padding:20px;
display:flex;
flex-wrap:wrap;
@media (max-width:350px){
    padding:15px;
}
`