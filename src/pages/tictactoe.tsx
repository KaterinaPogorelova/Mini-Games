import { type PageProps } from "gatsby"
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Pile } from "../components/TicTacToe/Pile";
import { makeMoveForNoughts, checkForWinner } from "../gameFuncs/AItictactoe";
import { WinMessage } from "../components/Message";
import { BackButton } from "../components/BackButton";

const TicTacToe: React.FC<PageProps> = () => {
    const [values, setValues] = useState<(null | 'X' | 'O')[]>([null, null, null, null, null, null, null, null, null])
    const [isMyTurn, setIsMyTurn] = useState(true)
    const [aIMoveId, setAIMoveId] = useState<null | number>(null)
    const [winner, setWinner] = useState<'X' | 'O' | 'Tie' | null>(null)

    useEffect(() => {
        if (checkForWinner(values)) {
            setTimeout((() => {
                setWinner(checkForWinner(values))
            }), 500)
            return
        }
        if (!isMyTurn) {
            setTimeout((() => {
                setAIMoveId(makeMoveForNoughts(values))
            }), 500)
        }
    }, [isMyTurn])

    useEffect(() => {
        if (aIMoveId !== null) {
            setPileValue(aIMoveId, 'O')
        }
        if (!checkForWinner(values)) {
            setIsMyTurn(true)
        } else {
            setTimeout((() => {
                setWinner(checkForWinner(values))
            }), 500)
        }
    }, [aIMoveId])

    const setPileValue = (id: number, value: 'X' | 'O') => {
        values.splice(id, 1, value)
        console.log(values)
        setValues(values)
    }
    const checkHasUserWon = (winner: 'X' | 'O' | 'Tie' | null) => {
        if (winner === 'X') return true
        if (winner === 'O') return false
        return null
    }
    return (<PageBody>
        <BackButton />
        <GameBody>
            <Field>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((num) => <Pile key={num} id={num} setPileValue={setPileValue} isMyTurn={isMyTurn} endMyTurn={() => setIsMyTurn(false)} aIMoveId={aIMoveId}></Pile>)}
                {winner && <WinMessage hasWon={checkHasUserWon(winner)} gameLink="/tictactoe"></WinMessage>}
            </Field>
        </GameBody>
    </PageBody>)
}
export default TicTacToe;

const PageBody = styled.div`
width:100%;
min-height:100vh;
height:100%;
padding-top:50px;
`
const GameBody = styled.div`
position:relative;
max-width:400px;
border: 1px solid black;
border-radius:30px;
background:#fbebf7;
margin:0px auto;
padding:40px;
display:flex;
justify-content:center;
align-items:center;
`
const Field = styled.div`
display:grid;
border: 2px solid #000;
width:350px;
height:350px;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
@media (max-width:500px){
    width:200px;
    height:200px;
}
`