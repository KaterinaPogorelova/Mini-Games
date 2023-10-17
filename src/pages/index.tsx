import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"
import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image"
import "../gatsby.css";
const pageStyles = {
  padding: 15
}


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Title>Choose your game:</Title>
      <Wrapper>
        <Game to="/numberle">
          <StaticImage src='../images/numberle.jpg' alt="numberle" width={150} height={150}></StaticImage>
          <GameTitle>Numberle</GameTitle>
        </Game>
        <Game to="/memoryCard">
          <StaticImage src='../images/memory-game.png' alt="memoryCards" width={150} height={150}></StaticImage>
          <GameTitle>Memory Card</GameTitle>
        </Game>
        <Game to="/tictactoe">
          <StaticImage src='../images/tictactoe.svg' alt="memoryCards" width={150} height={150}></StaticImage>
          <GameTitle>Tic Tac Toe</GameTitle>
        </Game>
      </Wrapper>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

const Title = styled.h1`
margin-top:20px;
font-size:40px;
text-align:center;
color:#8c00ff;
`
const Wrapper = styled.div`
max-width:780px;
border: 1px solid #ccc;
border-radius:30px;
background:#fbebf7;
margin:50px auto;
padding:20px;
display:flex;
gap:15px;
flex-wrap:wrap;
@media (max-width:466px){
  justify-content:center;
}
`
const Game = styled(Link)`
text-decoration: none;
width:150px;
border: 1px solid #ccc;
border-radius:30px;
padding:15px;
:hover{
  transform: scale(1.05);
}
`
const GameTitle = styled.h3`
font-size:20px;
text-align:center;
color:#6e447a;
`