import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getOneHome} from "../store/actions/currentHome"
import { getAllUsers } from "../store/actions/users"
// import image from './images/miami-mansion-1.jpg'
import Header from './Header'
import Footer from './Footer'
import './HomeDetail.css'
import Reservations from './Reservations'
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Reviews from './Reviews'
import HomeDetailMap from './HomeDetailMap'
import Button from '@material-ui/core/Button';
import { createReview} from '../store/actions/createReviewAction'

//material ui
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // height: 500,
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

//

const HomeDetail = ({home, getOneHome, users, getAllUsers}) => {
  const {id} = useParams();
  const history = useHistory();
  const [addReview, setAddReview] = useState(false)
  const [description, setDescription] = useState('')

  const dispatch = useDispatch();

  let token = localStorage.getItem('TOKEN_KEY')
  let userId = 1
  let homeId
  if(home) {

    homeId = home.id
  }
  const updateDescription = (e) => {
      setDescription(e.target.value)
  }

  const addReviewButton = async (e) => {
    e.preventDefault()
    if (token) {
      const payload = {
       description,
       userId,
       homeId
      }
      dispatch(createReview(payload))
      setAddReview(false)

    } else {
      history.push('/login')
    }

  }

  useEffect(()=> {
    getOneHome(id)
  },[id])

  useEffect(() => {
    getAllUsers()
  }, [])
    const classes = useStyles();


  const handleClikc = () => {
    setAddReview(true)
  }
 
  if(!home) return null;


  return (
    <>
    <Header />
    <h1>{home.name}</h1>
    <p>{`${home.city}, ${home.state}`}</p>
      <div className={classes.root}>
        <GridList cellHeight={400} className={classes.gridList} cols={3}>
          <GridListTile key={1} >
            <img src={home.image} alt={home.name} className="home-image"/>
            </GridListTile>
          <GridListTile key={2}>
              <img src={home.image2} alt={home.name} className="home_image"/>
            </GridListTile>
          <GridListTile key={3} className="home_image">
              <img src={home.image3} alt={home.name} className="home_image"/>
            </GridListTile>
          <GridListTile key={4} className="home_image">
              <img src={home.image4} alt={home.name} className="home_image"/>
            </GridListTile>
          <GridListTile key={5} className="home_image">
              <img src={home.image5} alt={home.name} className="home_image" />
            </GridListTile>
        </GridList>
      </div>
    <div className="home_reservation_container">
      <div className="home_detail">
       <div className="home-detail-list">
        <div>
              <h1>Entire place hosted by Aleksandar Dordevic</h1>
          <div className="full_line"></div>
          <h3>Description:</h3>
          <p>{home.description}</p>
          <div className="full_line"></div>
          <div className="reviews-container">
            <div className="reviews-header">
              <h3>Reviews:</h3>
            </div>
            <div className="reviews-button">
                  <Button
                    onClick={handleClikc}
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                  >
                    Add Review
          </Button>
            </div>
          </div>

          <Reviews homeId={home.id}/>
          <div>
            {addReview? (
              <form onSubmit={addReviewButton}>
                <div>
                      <textarea onChange={updateDescription} className="review-input" wrap="off" cols="5" rows="5" maxlength="50"></textarea>
                </div>
                <div className="post-button">
                  <Button type="submit" variant="contained" color="secondary" 
                  >Post</Button>  
                </div>
              </form>
            ): (
              null
            )}
          </div>
          <div className="full_line"></div>
        </div>
      </div>
    </div>
    <div className="reservation_box_container">
      <Reservations home={home}/>
    </div>
  </div>
  <div>
    <HomeDetailMap newLat={home.lat} newLng={home.lng}/>
  </div>
<Footer />
</>
  )
}


const HomeDetailContainer = () => {
const home = useSelector((state) => state.homes[state.currentHome]);
const users = useSelector((state) => Object.values(state.users))
const dispatch = useDispatch()
return (
  <HomeDetail
    users={users}
    getAllUsers={() => dispatch(getAllUsers())}
    home={home}
    getOneHome={(id) => dispatch(getOneHome(id))}
  />
);
};


export default HomeDetailContainer