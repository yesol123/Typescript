import React from 'react'
import {ty_data} from './type';

type tyProps = {
    data:ty_data
};



//data의 상태
// {
//     data:[
//         {"id":1,"item":"uiux"},
//         {"id":2,"item":"mobile"},
//         {"id":3,"item":"game"}
//     ]
// }

//함수명 바로 앞에다 <>를 활용해서 타입을 지정해줄 수 있음
const Item:React.FC<tyProps> = ({data}):JSX.Element=>{
  console.log(data);
  
    return (
    <div>
        {
            data.map(obj=>(
                <p key={obj.id}>{obj.item[0].tit}</p>
            ))
        }
    </div>
  )
}

export default Item