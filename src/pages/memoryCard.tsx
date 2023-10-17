import { type PageProps } from "gatsby"
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Tile } from "../components/MemoryCards/Tile";
import { shuffleCards } from "../gameFuncs/shuffleCards";
import { WinMessage } from "../components/Message";
import { BackButton } from "../components/BackButton";

const TilesNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const MemoryCards: React.FC<PageProps> = () => {
    const [numSequence, setNumSequence] = useState<number[]>([])
    const [activeCount, setActiveCount] = useState(0)
    const [comparedCards, setComparedCards] = useState<number[]>([])
    const [matchedCards, setMatchedCards] = useState<number[]>([])
    const [hasWon, setHasWon] = useState<boolean>(false)
    const [tries, setTries] = useState(0)

    useEffect(() => setNumSequence(shuffleCards()), [])
    useEffect(() => {
        if (comparedCards.length < 2) {
            return
        } else {
            setTries(tries + 1)
        }
        if (comparedCards[0] === comparedCards[1]) {
            setMatchedCards([...matchedCards, comparedCards[0]])
        }

    }, [comparedCards])
    useEffect(() => {
        if (matchedCards.length === 6) {
            setHasWon(true)
        }
    }, [matchedCards])

    const clearActiveCards = () => {
        setActiveCount(0)
        setComparedCards([])
    }
    const compareCards = (imgId: number) => {
        setActiveCount(activeCount + 1)
        setComparedCards([...comparedCards, imgId])
    }

    return (<PageBody>
        <BackButton />
        <Tries>{'Tries: ' + tries}</Tries>
        <GameBody>
            {hasWon && <WinMessage hasWon={hasWon} gameLink="/memoryCard" cardGameTries={tries}></WinMessage>}
            {TilesNums.map((num) => <Tile num={numSequence[num - 1]} key={num} activeCount={activeCount} compareCards={compareCards} matchedCards={matchedCards} clearActiveCount={clearActiveCards}></Tile>)}
        </GameBody>
    </PageBody>)
}

export default MemoryCards;

const PageBody = styled.div`
width:100%;
min-height:100vh;
height:100%;
padding-top:10px;
`

const GameBody = styled.div`
position:relative;
background-color:#3c1378;
max-width:700px;
border: 5px solid #2a0d55;
border-radius:30px;
margin:0px auto;
padding:40px 20px 40px;
display:flex;
flex-wrap:wrap;
gap:15px;
@media (max-width:350px){
    padding:40px 15px 40px;
}
`

const Tries = styled.h1`
font-size:40px;
text-align:center;
margin:0 0 10px;
`