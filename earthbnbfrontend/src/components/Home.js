import React,{ useState, useEffect } from 'react' 
import {getAllHomes} from '../store/actions/homes'
import { useSelector, useDispatch } from 'react-redux';
import Footer from './Footer'
import Header from './Header'
import './Home.css'
import Banner from './Banner'
import ShowAllHomesContainer from './ShowAllHomes';


const Home = () => {

  return (
    <main>
      <Header/>
        <Banner />
        <ShowAllHomesContainer/>
        <Footer />
    </main>
  )
}

const HomeContainer = () => {
  const home = useSelector((state) => Object.values(state.homes))
  const dispatch = useDispatch()
  return (
    <Home
      home={home}
      getAllHomes={()=> dispatch(getAllHomes())}
    />
  )
}

export default HomeContainer
