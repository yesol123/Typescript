import{useContext} from 'react';
import { TestContext } from '../Mycontext'
import {ts_sportsObj} from '../types';
import Item from './Item';

type Props = {
  title:string
}

const List = ({title}:Props) => {
  const {data} = useContext(TestContext);


    if(!title) return <>......</>;
  return (
   <article>
    <h2>{title}</h2>
    <ul>
     {
       data[title].map( (obj:ts_sportsObj) =>(  
        <Item key={obj.id} item={obj}/>
      ))
     }
    </ul>
   </article>
  )
}

export default List