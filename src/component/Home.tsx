import { Link } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <article className='maindisplay'>

            <h1>전화번호부</h1>
                <figure>
                    <img src='./phone.png' />
                </figure>

                <div className='button'>
                    <Link to='/newser'>신규등록</Link>
                    <Link to='/list'>리스트</Link>
                </div>
            </article>
        </>
    )
}

export default Home