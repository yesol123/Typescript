import React, { useRef } from 'react'
import { ts_sportsObj } from '../types';


type Props = {
  item:ts_sportsObj
}



const Item = ({item}: Props) => {
  const ele = useRef<HTMLLIElement | null>(null); //li를 지정해줄 시
  //HTMLParagraphElement 태그랑 맞춰서 지정해줘야함 

  const view=(id:number)=>{

    let str = `<div>${id}</div>`

    console.log(ele);
    if(ele.current){
      ele.current.innerHTML = str;
      ele.current.style.cssText= 'color:red; font-size:16px'
    }
    
  }
  return (

    <>
     <li ref={ele} onClick={()=>{view(item.id)}}>{item.title}</li>
    </>
  )
}

export default Item