import React, { useEffect, useState} from 'react'
import './SearchResult.css';
import { getAllHomes } from '../store/actions/homes'
import { useSelector, useDispatch } from 'react-redux';
import Map from './Map'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import image from './images/miami-mansion-1.jpg'
import Rating from './Rating'



const SearchResult = ({home, getAllHomes}) =>{


  let searchValue = localStorage.getItem('searchValue')
  useEffect(() => {
    getAllHomes();
  }, [])



  let valid = false

  if (searchValue) {
    if (searchValue.toLowerCase() === 'san francisco') valid = true
    if (searchValue.toLowerCase() === 'los angeles') valid = true
    if (searchValue.toLowerCase() === 'austin') valid = true
    if (searchValue.toLowerCase() === 'miami') valid = true
    if (searchValue.toLowerCase() === 'new york') valid = true

  }  
   if(!valid) {
     return (
      <>
       <Header/>
     <h1>Sorry not there yet..try Miami , San Francisco , Los Angeles, New York or Austin !</h1>
     </>
     )
   }
  return (
    <>
    <Header />
      <div className="search_container">
      <div className="search_results_container">
        {home.map((home) => {
          if(home.city.toLowerCase() === searchValue.toLowerCase()) {
        return (
        <div className='searchResult'>
          <Link to={`/homes/${home.id}`}>
            <img src={home.image} className="house_image" />
          </Link>
          <div className="searchResult__heart">

            <Rating homeId={home.id}/>
          </div>
            {/* <FavoriteBorderIcon className="searchResult__heart"  /> */}
        <div className='searchResult__info'>
          <div className="searchResult__infoTop">
           <p>{home.city}</p>
            <h3>{home.name}</h3>
            <p>____</p>
            <p>8 guests , 4 bedrroms , 4 baths </p>
            <p>Pool , Self check-in , Gym </p>
          </div>

          <div className="searchResult__infoBottom">
          <div className='searchResults__price'>
              <h2>{`$${home.price} per night`}</h2>
            </div>
          </div>
        </div>
       </div>)
}})}
        </div>
        <div className='map_container' >
          <Map searchValue={searchValue}/>
        </div>
      </div>
      <div className="footer__container">
   <Footer />
      </div>
   </>
  )
}

const SerachResultContainer = () => {
  const home = useSelector((state) => Object.values(state.homes))
  // const searchValue = useSelector((state) => state.searchValue)
  const dispatch = useDispatch()
  return (
    <SearchResult
      home={home}
      getAllHomes={() => dispatch(getAllHomes())}
      // searchValue={searchValue}
    />
  )
}

export default SerachResultContainer