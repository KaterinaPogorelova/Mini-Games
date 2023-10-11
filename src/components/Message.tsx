import styled from "@emotion/styled"
import React from "react"

type Props = {
    hasWon: boolean | null;
    gameLink: string;
    numberleTargetNum?: number[];
    cardGameTries?: number;
}

export const WinMessage = ({ hasWon, gameLink, numberleTargetNum, cardGameTries }: Props) => {
    return (<Message>

        {hasWon !== null && gameLink === '/tictactoe' && <MessageTitle>{hasWon ? 'You won!' : 'You lost...'}</MessageTitle>}
        {hasWon === null && gameLink === '/tictactoe' && <MessageTitle>{"Tie"}</MessageTitle>}
        {hasWon && gameLink === '/memoryCard' && <MessageAddInfo>{'You won in ' + cardGameTries + ' tries'}</MessageAddInfo>}
        {!hasWon && gameLink === '/numberle' && numberleTargetNum && <MessageAddInfo>{'The target number was ' + numberleTargetNum.join('')}</MessageAddInfo>}
        <MessageBtn href={gameLink}>Try again</MessageBtn>
        <MessageBtn href="/">Go Back</MessageBtn>
    </Message>)
}

const Message = styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
border:2px solid #000;
border-radius:10px;
padding:20px;
background:#fff;
width:200px;
z-index:4;
`

const MessageTitle = styled.h3`
font-size:30px;
text-align:center;
`

const MessageBtn = styled.a`
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

const MessageAddInfo = styled.p`
text-align:center;
font-size:20px;
color:#000;
margin:20px 0;
`