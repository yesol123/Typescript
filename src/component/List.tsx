import React, { useContext, useRef } from 'react'
import { DataContext } from '../Saveme';
import { useParams } from 'react-router-dom';


type Props = {}

const List = (props: Props) => {
  const li = useRef<HTMLLIElement | null>(null); 
  const {data,setData} =useContext<any>(DataContext);

  

  return (
    <article className='list'>
    <div className='textbox'>
    <p></p>
    <p></p>
    </div>

    <section>
        <p>전화번호가 저장된 연락처 {data.length}개</p>

        <ul className='numberList' >
          {
            data.map((save:any ,k:any)=>
            <li>
              <a href='#'>{save.name}</a>
              <a  href='#'>{save.phone}</a>
              <a  href='#'><img src = './phone1.png'/></a>
            </li>
            )
          }
        </ul>
    </section>
    </article>
  )
}

export default List