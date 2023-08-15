import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import { findMatch } from "../gameFuncs/generateNumber"

type Props={
    showAddedNum:(num:number)=>void,
    deleteNum:()=>void,
    changeLine:(num:number)=>void,
    clearNumber:()=>void,
    userNumArr:number[],
    targetNumArr:number[],
    changeLinesColors:(match:('green'|'yellow'|'gray')[])=>void
}
const primeNumArr=[1,2,3,4,5,6,7,8,9,0]

export const Keyboard=({showAddedNum,deleteNum,changeLine,clearNumber,userNumArr,targetNumArr,changeLinesColors}:Props)=>{
    const [line,setLine]=useState(1)

    useEffect(()=>{
        changeLine(line)
        clearNumber()
        changeLinesColors(findMatch(userNumArr,targetNumArr))
    },[line])

    return(<Board>
        {primeNumArr.map((num)=><NumBtn key={num} onClick={()=>showAddedNum(num)}>{num}</NumBtn>)}
        <KeyBtn onClick={()=>deleteNum()}>Back</KeyBtn>
        <KeyBtn onClick={()=>{
            if(userNumArr[0]!==0&&userNumArr.length===5){
                setLine(line+1)
            }
        }}>Enter</KeyBtn>
    </Board>)
}

const Board=styled.div`
border: 1px solid black;
border-radius:10px;
width:275px;
margin:30px auto 0px;
padding:10px;
display:flex;
gap:10px;
flex-wrap:wrap;
justify-content:space-between;
@media (max-width:320px){
    gap:5px;
}
`
const NumBtn=styled.button`
width:45px;
height:45px;
background:#c9c9c9;
border: 1px solid black;
border-radius:5px;
font-size:30px;
font-family:Arial;
:hover{
    cursor:pointer;
    background:#aaaaaa;
}
@media (max-width:320px){
    width:38px;
height:38px;
}
`
const KeyBtn=styled.button`
width:80px;
background:#c9c9c9;
border: 1px solid black;
border-radius:5px;
font-size:25px;
font-family:Arial;
:hover{
    cursor:pointer;
    background:#aaaaaa;
}
`