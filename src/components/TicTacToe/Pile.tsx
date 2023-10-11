import React, { useEffect, useState } from "react"
import styled from "@emotion/styled";

type Props = {
    id: number;
    setPileValue: (id: number, value: 'X' | 'O') => void,
    isMyTurn: boolean,
    endMyTurn: () => void,
    aIMoveId: number | null
}

export const Pile = ({ setPileValue, id, endMyTurn, isMyTurn, aIMoveId }: Props) => {
    const [value, setValue] = useState<(null | 'X' | 'O')>(null)

    useEffect(() => {
        if (aIMoveId !== null && aIMoveId === id) {
            setValue('O')
        }
    }, [aIMoveId])

    return (<Block onClick={() => {
        if (isMyTurn && value === null) {
            setValue('X')
            setPileValue(id, 'X')
            endMyTurn()
        }
    }}>
        <Symbol>{value}</Symbol>
    </Block>)
}


const Block = styled.div`
border:2px solid #000;
display:flex;
justify-content:center;
align-items:center;
`
const Symbol = styled.p`
font-size:72px;
margin:0;
@media (max-width:500px){
    font-size:42px;
}
`