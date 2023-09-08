import React, { useContext, useRef, useState } from 'react'
import { TestContext } from '../Mycontext'


// 텍스트박스에 들어갈 내용: 데이터 타입 정의 
interface ts_msg{
  [key:string]:FormDataEntryValue //폼형식 타입은 이렇게  적용해야됨 
}

type Props = {}

const Write = (props: Props) => {
  const {data} = useContext(TestContext);
  const datakey:string[] = Object.keys(data);
  const msgForm = useRef<HTMLFormElement>(null);

  const [community,setCommunity] =useState<ts_msg[]>([]); // ts_msg가 배열의 형태로 들어갈 것
  console.log(community);
  

  const insert = (e:React.FormEvent<HTMLFormElement>):void=>{
      e.preventDefault();
      if(msgForm.current){
        let formdata = new FormData(msgForm.current);
        let idx:number = Date.now();
        formdata.append('id',idx.toString());

        let obj:ts_msg = Object.fromEntries(formdata);
        setCommunity([...community, obj]);
        // console.log(Object.fromEntries(formdata));
        
      }
      
  }
  return (
    <article>
      <h2>Write</h2>
      <div>
        <form onSubmit={insert} ref={msgForm}  className='flex'>
          <select name="category">
            {
              datakey.map((obj:string,idx:number)=>(
                <option key={idx}>{obj}</option>
              ))
            }
          </select>
          <textarea name='msg'></textarea>
          <input type="submit" value ="저장"/>
        </form>
      </div>
    </article>
  )
}

export default Write