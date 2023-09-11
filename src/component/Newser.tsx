import {useContext, useState} from 'react';
import { DataContext } from '../Saveme';
import {useNavigate} from 'react-router-dom'; 



type Props = {}

const Newser = () => {

    const navigate = useNavigate();

    const {data,setData} = useContext(DataContext);
    let insert = (e:React.BaseSyntheticEvent)=>{
        e.preventDefault();

        let v = e.target;
        if(v.name.value ==''){
            alert('저장할 친구 이름을 입력해주세요!')
        }else{
           
            let save = {
                id:Date.now(),
                name:v.name.value,
                phone:v.phone.value
            }
            setData([...data,save]);
        
            
        }

        navigate('/list'); // 저장 후 /List 경로로 이동
    }
console.log(data);


  return (
    <>
        <article className='Newser'>
            <div className='textbox'>
                <p></p>
                <p></p>
            </div>

            <section className='new'>
                <p className=''>새로운 친구들을 등록해주세요!</p>
                <form onSubmit={insert}>
                    <input type='text' name='name' placeholder='이름'></input>
                    <input type='tel' name='phone' placeholder='010-0000-0000'></input>
                    <input type='submit' value='저장'></input>
                </form>
            </section>
        </article>
    </>
  )
}

export default Newser