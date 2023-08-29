import styled from "@emotion/styled"
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { customizeCardStyles } from "../../gameFuncs/shuffleCards";

type Props={
    num:number;
    activeCount:number;
    compareCards:(imgId:number)=>void;
    matchedCards:number[];
    clearActiveCount:()=>void;
}

export const Tile=({num,activeCount,compareCards,matchedCards,clearActiveCount}:Props)=>{
    const [active,setActive]=useState<boolean>(false)
useEffect(()=>{
    if(activeCount===2&&!(matchedCards.includes(num))){
        setTimeout(()=>{
            setActive(false)
            clearActiveCount()
        },700)
        
    }
},[activeCount])
    return(<TileWrap onClick={()=>{
        if(!active&&activeCount<2){
            setActive(true)
            compareCards(num)
        }
    }} style={customizeCardStyles(active,matchedCards.includes(num))}>
    {num===1&&<StaticImage src='../../images/MemoryCards/1.png' alt='bear' style={active?{width:'50%',display:'block'}:{display:'none'}}></StaticImage>}
    {num===2&&<StaticImage src='../../images/MemoryCards/2.png' alt='fox' style={active?{width:'50%',display:'block'}:{display:'none'}}></StaticImage>}
    {num===3&&<StaticImage src='../../images/MemoryCards/3.png' alt='mouse' style={active?{width:'50%',display:'block'}:{display:'none'}}></StaticImage>}
    {num===4&&<StaticImage src='../../images/MemoryCards/4.png' alt='pig' style={active?{width:'50%',display:'block'}:{display:'none'}}></StaticImage>}
    {num===5&&<StaticImage src='../../images/MemoryCards/5.png' alt='rabbit' style={active?{width:'50%',display:'block'}:{display:'none'}}></StaticImage>}
    {num===6&&<StaticImage src='../../images/MemoryCards/6.png' alt='tiger' style={active?{width:'50%',display:'block'}:{display:'none'}}></StaticImage>}
    </TileWrap>)
}

const TileWrap=styled.div`
display:flex;
justify-content:center;
align-items:center;
width:160px;
height:130px;
border:2px solid #fff;
@media (max-width:767px){
    width:calc(25% - 15px);
}
@media (max-width:500px){
   height:50px;
}
`