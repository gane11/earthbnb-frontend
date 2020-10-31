import React, { useEffect } from 'react'
import './SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { getAllHomes } from '../store/actions/homes'
import { useSelector, useDispatch } from 'react-redux';
import Map from './Map'
import Header from './Header'
import Footer from './Footer'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import image from './images/miami-mansion-1.jpg'

const SearchResult = ({home, getAllHomes, searchValue}) =>{
  useEffect(() => {
    getAllHomes();
  }, [])

  console.log(searchValue)


  return (
    <>
    <Header />
      <div className="search_container">
      <div className="search_results_container">
        {home.map((home) => {
        return (
        <div className='searchResult'>
          <Link to={`/homes/${home.id}`}>
            <img src={image} className="house_image" />
          </Link>
        <FavoriteBorderIcon className="searchResult__heart" />

        <div className='searchResult__info'>
          <div className="searchResult__infoTop">
           <p>{home.city}</p>
            <h3>{home.name}</h3>
            <p>____</p>
            <p>{home.description}</p>
          </div>

          <div className="searchResult__infoBottom">
            <div className="searchResult__stars">
              <StarIcon className="searchResult__star" />
              <p>
                <strong>4.5</strong>
              </p>
            </div>
          < div className='searchResults__price'>
              <h2>{`${home.price} per night`}</h2>
            </div>
          </div>
        </div>
       </div>)
      })}
        </div>
        <div className='map_container' >
          <Map />
        </div>
      </div>
   <Footer />
   </>
  )
}

const SerachResultContainer = () => {
  const home = useSelector((state) => Object.values(state.homes))
  const searchValue = useSelector((state) => state.searchValue)
  const dispatch = useDispatch()
  return (
    <SearchResult
      home={home}
      getAllHomes={() => dispatch(getAllHomes())}
      searchValue={searchValue}
    />
  )
}

export default SerachResultContainer