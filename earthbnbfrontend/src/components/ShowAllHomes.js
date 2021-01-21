
import React, { useEffect } from 'react'
import { getAllHomes } from '../store/actions/homes'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from './Card'
import { makeStyles } from '@material-ui/core/styles';
import './ShowAllHomes.css'

////material ui

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  // avatar: {
  //   backgroundColor: red[500],
  // },
}));

let popularHomes = [1,3,8,10,13,15,19,22]
let sanFran = []
///

const ShowAllHomes = ({getAllHomes, home }) => {
  const classes = useStyles();

  useEffect(() => {
    getAllHomes();
  }, [])
  const { id } = useParams();
  const homeId = Number.parseInt(id);



  if (!home) return null
  return (
   <div>
     <h1 className="popular-homes">Popular Homes</h1>
      <div className='home__section'>
        {home.map((home) => {
          if(popularHomes.includes(home.id)) return(<Card home={home}/>)
        })}
      </div>
      <h1 className="popular-homes">Visit San Francisco</h1>
      <div className='home__section'>
      {home.map((home) => {
        if (home.id > 24) return (<Card home={home} />)
      })}
      </div>
  </div>
  );
}

const ShowAllHomesContainer = () => {
  const home = useSelector((state) => Object.values(state.homes))
  const dispatch = useDispatch()
  return (
    <ShowAllHomes
      home={home}
      getAllHomes={() => dispatch(getAllHomes())}
    />
  )
}

export default ShowAllHomesContainer;