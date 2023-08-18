import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Line } from "./Lines"
type Props={
    isShown?:boolean;
    close:()=>void;
}

export const NumberlInfo=({isShown,close}:Props)=>{
return(<>{isShown&&<InfoWrapper>
    <div onClick={()=>close()}><StaticImage src="../images/close.svg" alt="close" width={24} height={24} style={{position:'absolute',top:'10px',right:'15px'}}></StaticImage></div>
<InfoTitle>How to play?</InfoTitle>
<Text>Guess the six-digit number in 5 tries. Each guess must contain 5 digits. Number can't start with "0". The digits in the number may be repeated.</Text>
<Text>After each guess, the color of the tiles will change to show how close your guess was to the number.</Text>
<Text style={{fontWeight:'600'}}>Examples:</Text>
<Line num={[1,2,3,4,5]} colors={['gray','green','gray','gray','gray']}></Line>
<Text>The digit '2' is in the number and in the correct spot.</Text>
<Line num={[6,7,0,9,1]} colors={['gray','gray','yellow','gray','gray']}></Line>
<Text>The digit '0' is in the number, but in the wrong spot.</Text>
<Text>Gray tiles mean, that this digit doesn't exist in any spot.</Text>
<Text style={{fontWeight:'600'}}>That's all, good luck in playing!</Text>
</InfoWrapper>}</>)
}

const InfoWrapper=styled.div`
position:absolute;
top:-1px;
left:50%;
z-index:2;
transform:translate(-50%,0);
border:2px solid #000;
border-radius:30px;
padding:40px 20px 20px;
background:#fff;
width:calc(100% - 35px);
@media (max-width:350px){
    padding:40px 15px 15px;
    width:calc(100% - 30px);
}
`
const InfoTitle=styled.h3`
font-size:30px;
text-align:center;
margin:0 0 20px;
@media (max-width:350px){
    font-size:24px;
}
`
const Text=styled.p`
font-size:16px;
`
