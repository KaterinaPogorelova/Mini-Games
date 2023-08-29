export const shuffleCards=()=>{
    const newArr:number[]=[]
    let i=1
    while(i<13){
    const num=Math.floor(Math.random() * 6+1)
    const filterNum=newArr.filter((arrNum)=>arrNum===num)
    if(filterNum.length<2){
        newArr.push(num)
        i++
    }
   }
   return newArr
}

type CardStyle={
    [key:string]:any;
}

export const customizeCardStyles=(isActive:boolean,isMatched:boolean)=>{
    const style:CardStyle={transition: 'all 0.65s'}
    if (isActive){
        style.background='#fff'
        style.transform='rotateY(180deg)'
    }else{
        style.background='#6868e1'
        style.transform='rotateY(0deg)'
    }
    if(isMatched){
        style.opacity=0
    }
    return style
}