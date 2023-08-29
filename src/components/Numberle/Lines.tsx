import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"

type Props={
    num?:number[],
    colors?:('green'|'yellow'|'gray')[]
}
export const Line=({num,colors}:Props)=>{
    const [curNum,setCurNum]=useState<number[]|undefined>()
    const [numColors,setNumColors]=useState<('green'|'yellow'|'gray')[]|undefined>()
    useEffect(()=>{
    if(!num){
        return
    }
    setCurNum(num)
},[num])

    useEffect(()=>{
    if(!colors){
        return
    }
    setNumColors(colors)
},[colors])

    return(<LineWrap>
        <Block style={numColors&&{background:numColors[0]}}><Num>{(curNum&&curNum[0])&&curNum[0]}</Num></Block>
        <Block style={numColors&&{background:numColors[1]}}><Num>{(curNum&&curNum[1])&&curNum[1]}</Num></Block>
        <Block style={numColors&&{background:numColors[2]}}><Num>{(curNum&&curNum[2])&&curNum[2]}</Num></Block>
        <Block style={numColors&&{background:numColors[3]}}><Num>{(curNum&&curNum[3])&&curNum[3]}</Num></Block>
        <Block style={numColors&&{background:numColors[4]}}><Num>{(curNum&&curNum[4])&&curNum[4]}</Num></Block>
    </LineWrap>)
}

const LineWrap=styled.div`
display:flex;
gap:0 10px;
margin:0 auto 15px;
`

const Block=styled.div`
border: 1px solid black;
border-radius:5px;
width:45px;
height:45px;
display: flex;
justify-content: center;
align-items: center;
@media (max-width:350px){
    width:38px;
height:38px;
}
`
const Num=styled.p`
font-size:40px;
font-family:Arial;
text-align:center;
margin:0;
width:100%;
height:100%;
@media (max-width:350px){
    font-size:36px;
}
`