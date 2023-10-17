import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"


export const BackButton = () => {
    return (<BackLink to='/'>
        Back to Main
    </BackLink>)
}

const BackLink = styled(Link)`
    display:block;
    width:150px;
    text-align:center;
    border:1px solid #000;
    border-radius:10px;
    background:#8c00ff;
    font-size:20px;
    margin:0 auto 20px;
    padding:10px 0;
    color:#000;
    text-decoration:none;
    :hover{
        background:#fbebf7;
    }
`