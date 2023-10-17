import { type PageProps } from "gatsby"
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Line } from "../components/Numberle/Lines";
import { Keyboard } from "../components/Numberle/Keyboard";
import { generateNum } from "../gameFuncs/generateNumber";
import { WinMessage } from "../components/Message";
import { StaticImage } from "gatsby-plugin-image";
import { NumberlInfo } from "../components/Numberle/NumberlInfo";
import { BackButton } from "../components/BackButton";

const Numberle: React.FC<PageProps> = () => {
    const [userNum, setUserNum] = useState<number[]>([])
    const [lineNum, setLineNum] = useState(0)
    const [targetNum, setTargetNum] = useState<number[]>([])
    const [matches, setMatches] = useState<('green' | 'yellow' | 'gray')[]>([])
    const [hasWon, setHasWon] = useState<boolean | null>(null)
    const [infoShown, setInfoShown] = useState<boolean>(false)

    useEffect(() => setTargetNum(generateNum()), [])
    useEffect(() => {
        if (matches.join() === 'green,green,green,green,green') {
            setHasWon(true)
        } else if (lineNum === 6) {
            setHasWon(false)
        }
    }, [matches])

    const addNumber = (num: number) => {
        if (userNum.length === 5) {
            return
        }
        setUserNum([...userNum, num])
    }

    const deleteNumber = () => {
        if (userNum.length === 0) {
            return
        }
        const newArr = userNum.slice(0, -1)
        setUserNum(newArr)
    }

    return (<PageBody>
        <BackButton />
        <GameBody>
            {hasWon !== null && <WinMessage hasWon={hasWon} gameLink="/numberle" numberleTargetNum={targetNum}></WinMessage>}
            <NumberlInfo isShown={infoShown} close={() => setInfoShown(false)}></NumberlInfo>
            <InfoBtn onClick={() => setInfoShown(true)}><StaticImage src="../images/numberInfo.svg" alt="info" width={24} height={24}
            ></StaticImage></InfoBtn>
            <LinesWrapper>
                <Line num={(lineNum === 1) ? userNum : undefined} colors={(lineNum === 2) ? matches : undefined}></Line>
                <Line num={(lineNum === 2) ? userNum : undefined} colors={(lineNum === 3) ? matches : undefined}></Line>
                <Line num={(lineNum === 3) ? userNum : undefined} colors={(lineNum === 4) ? matches : undefined}></Line>
                <Line num={(lineNum === 4) ? userNum : undefined} colors={(lineNum === 5) ? matches : undefined}></Line>
                <Line num={(lineNum === 5) ? userNum : undefined} colors={(lineNum === 6) ? matches : undefined}></Line>
            </LinesWrapper>
            <Keyboard showAddedNum={addNumber} deleteNum={deleteNumber} changeLine={(num: number) => setLineNum(num)} clearNumber={() => setUserNum([])} userNumArr={userNum} targetNumArr={targetNum} changeLinesColors={(match: ('green' | 'yellow' | 'gray')[]) => setMatches(match)}></Keyboard>
        </GameBody>
    </PageBody >)
}

export default Numberle;
const PageBody = styled.div`
width:100%;
min-height:100vh;
height:100%;
padding-top:30px;
`
const GameBody = styled.div`
position:relative;
max-width:400px;
border: 3px solid #000;
border-radius:30px;
margin:0px auto;
padding:40px 20px 20px;
background: #5ebc9c;
display:flex;
flex-wrap:wrap;
@media (max-width:350px){
    padding:40px 15px 15px;
}
`
const InfoBtn = styled.button`
border:none;
background:red;
position:absolute;
border-radius:50%;
padding:10px;
top:10px;
right:15px;
box-shadow: 2px 2px 0px rgb(0, 0, 0);
:hover{
    cursor:pointer;
    background:#952d2d;
}
:active{
    box-shadow: 0px 0px 0px rgb(0, 0, 0);
    transform:translate(2px,2px);
}
@media (max-width:450px){
    padding:0px;
}
`
const LinesWrapper = styled.div`
margin:0 auto;
border:2px solid #000;
border-radius:20px;
background:#d7fff1;
padding:20px;
@media (max-width:375px){
    padding:15px;
}
`