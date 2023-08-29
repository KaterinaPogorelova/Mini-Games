import { type PageProps } from "gatsby"
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Line } from "../components/Numberle/Lines";
import { Keyboard } from "../components/Numberle/Keyboard";
import { generateNum } from "../gameFuncs/generateNumber";
import { WinMessage } from "../components/Message";
import { StaticImage } from "gatsby-plugin-image";
import { NumberlInfo } from "../components/Numberle/NumberlInfo";

const Numberle: React.FC<PageProps> = () => {
    const [userNum,setUserNum]=useState<number[]>([])
    const [lineNum,setLineNum]=useState(0)
    const [targetNum,setTargetNum]=useState<number[]>([])
    const [matches,setMatches]=useState<('green'|'yellow'|'gray')[]>([])
    const [hasWon,setHasWon]=useState<boolean|null>(null)
    const [infoShown,setInfoShown]=useState<boolean>(false)

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

    return(<PageBody>
    <GameBody>
        {hasWon!==null&&<WinMessage hasWon={hasWon} gameLink="/numberle" numberleTargetNum={targetNum}></WinMessage>}
        <NumberlInfo isShown={infoShown} close={()=>setInfoShown(false)}></NumberlInfo>
        <InfoBtn onClick={()=>setInfoShown(true)}><StaticImage src="../images/numberInfo.svg" alt="info" width={24} height={24}
        ></StaticImage></InfoBtn>
        <Line num={(lineNum===1)?userNum:undefined} colors={(lineNum===2)?matches:undefined}></Line>
        <Line num={(lineNum===2)?userNum:undefined} colors={(lineNum===3)?matches:undefined}></Line>
        <Line num={(lineNum===3)?userNum:undefined} colors={(lineNum===4)?matches:undefined}></Line>
        <Line num={(lineNum===4)?userNum:undefined} colors={(lineNum===5)?matches:undefined}></Line>
        <Line num={(lineNum===5)?userNum:undefined} colors={(lineNum===6)?matches:undefined}></Line>
        <Keyboard showAddedNum={addNumber} deleteNum={deleteNumber} changeLine={(num:number)=>setLineNum(num)} clearNumber={()=>setUserNum([])} userNumArr={userNum} targetNumArr={targetNum} changeLinesColors={(match:('green'|'yellow'|'gray')[])=>setMatches(match)}></Keyboard>
    </GameBody>
</PageBody>)
}

export default Numberle;
const PageBody=styled.div`
width:100%;
min-height:100vh;
height:100%;
padding-top:30px;
`
const GameBody=styled.div`
position:relative;
max-width:400px;
border: 1px solid black;
border-radius:30px;
margin:0px auto;
padding:40px 20px 20px;
display:flex;
flex-wrap:wrap;
@media (max-width:350px){
    padding:40px 15px 15px;
}
`
const InfoBtn=styled.button`
border:none;
background:none;
position:absolute;
top:10px;
right:15px;
`