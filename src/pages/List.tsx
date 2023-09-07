import { useContext } from "react"
import { DataContext } from '../Checkname';

function List() {
    const {data,setData} = useContext<any>(DataContext);
    const Dname = (id:any)=>{
        let deldata =data.filter((obj:any) => obj.id != id);
         setData(deldata)
    } 
    
    return (
    
    <section>
        <h2>참여인원</h2>
        <p><b>{data.length}</b>명</p>
        <ul>
            {
                data.map((item:any,k:any)=>
                <li key = {item.name}>
                    {k+1}.{item.name}
                    <button onClick={()=>{Dname(item.id)}}>삭제</button>
                </li>
                )
            }
        </ul>

    </section>
  )
}

export default List