import React, { useEffect } from 'react'
import './SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { getAllHomes } from '../store/actions/homes'
import { useSelector, useDispatch } from 'react-redux';
import Map from './Map'
import Header from './Header'
import Footer from './Footer'
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import image from './images/miami-mansion-1.jpg'

const SearchResult = ({home, getAllHomes}) =>{
  const { searchValue } = useParams()
  useEffect(() => {
    getAllHomes();
  }, [])


//   if (searchValue.toLowerCase() !== 'miami beach' || searchValue.toLowerCase() !== 'new york') {
//         return (
//             <>
//             <h1>Sorry not there yet, try Miami , San Francisco , Los Angeles or Austin !</h1>
//             </>
//         )

// }


  
  return (
    <>
    <Header />
      <div className="search_container">
      <div className="search_results_container">
        {home.map((home) => {
          console.log(home.city.toLowerCase())
          if(home.city.toLowerCase() === searchValue.toLowerCase()) {
        return (
        <div className='searchResult'>
          <Link to={`/homes/${home.id}`}>
            <img src={home.image} className="house_image" />
          </Link>
        <FavoriteBorderIcon className="searchResult__heart" />

        <div className='searchResult__info'>
          <div className="searchResult__infoTop">
           <p>{home.city}</p>
            <h3>{home.name}</h3>
            <p>____</p>
            <p>8 guests , 4 bedrroms , 4 baths </p>
            <p>Pool , Self check-in , Gym </p>
          </div>

          <div className="searchResult__infoBottom">
            <div className="searchResult__stars">
              <StarIcon className="searchResult__star" />
              <p>
                <strong>4.5</strong>
              </p>
            </div>
          < div className='searchResults__price'>
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
   <Footer />
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