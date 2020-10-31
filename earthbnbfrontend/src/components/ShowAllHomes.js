
import React, { useEffect } from 'react'
import { getAllHomes } from '../store/actions/homes'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink, Switch } from 'react-router-dom';
// import HomeDetail from './HomeDetail'
import Card from './Card'
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
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
      <div className='home__section'>
        {home.map((home) => {
          return(
          <Card home={home}/>
          )
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