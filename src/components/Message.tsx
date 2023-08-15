import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"

type Props={
    hasWon:boolean|null;
}

export const WinMessage=({hasWon}:Props)=>{
    return(<Message>
        <MessageTitle>{hasWon?'You won!':'You lost...'}</MessageTitle>
        <MessageBtn href="/numberle">Try again</MessageBtn>
        <MessageBtn href="/">Go Back</MessageBtn>
    </Message>)
}

const Message=styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
border:2px solid #000;
border-radius:10px;
padding:20px;
background:#fff;
width:200px;
`

const MessageTitle=styled.h3`
font-size:30px;
text-align:center;
`

const MessageBtn=styled.a`
display:block;
text-align:center;
font-size:20px;
padding:5px;
border-radius:5px;
font-family: "Schoolbell";
background:#e9e9e9;
color:#000;
text-decoration:none;
margin-bottom:20px;
:hover{
    cursor:pointer;
    background:#c9c5c5;
}
`