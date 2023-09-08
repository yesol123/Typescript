import React from 'react'
import List from './List';

type Props = {
  title?:string
}

const Home = (props: Props) => {
  return (
    <>
    <List title= '구기종목'/>
    <List title= '육상종목'/>
    <List title= '수상종목'/>

    </>
  )
}

export default Home