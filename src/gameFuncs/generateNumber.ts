export const generateNum=()=>{
    const number=(Math.floor(Math.random() * 90000) + 10000)
    const targetArrStr=String(number).split('')
    const targetArr=targetArrStr.map((num)=>Number(num))
    return targetArr
}

export const findMatch=(userArr:number[],targetArr:(number|'empty')[])=>{
    const userNumArr=[...userArr]
    const targetNumArr=[...targetArr]
    const arrWithGreenMatches:(number|'green'|'yellow')[]=userNumArr.map((userNum,userNumInd)=>{
        const match=targetNumArr.find((targetNum,targetNumInd)=>(userNum===targetNum&&userNumInd===targetNumInd))
        if(match===undefined){
            return userNum
        }
        targetNumArr.splice(userNumInd,1,'empty')
        return 'green'
    })

    const yellowMatches=targetNumArr.map((remNum,indexRemNum)=>{
        if(remNum!=='empty'){
            const match=arrWithGreenMatches.indexOf(remNum)
            if(match!==-1){
                arrWithGreenMatches.splice(match,1,'yellow')
                targetNumArr.splice(indexRemNum,1,'empty')
            }
        }
    })

    const arrWithAllMatches=arrWithGreenMatches.map((num)=>{
        if(typeof num==='number'){
            return 'gray'
        }
        return num
    })
    return arrWithAllMatches
}
