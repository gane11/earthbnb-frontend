import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getOneHome} from "../store/actions/currentHome"

const HomeDetail = ({home, getOneHome}) => {
  const {id} = useParams();
  useEffect(()=> {
    getOneHome(id)
  },[id])



  if(!home) return null;

  return (
    <div className="house-detail">
      <div className="home-detail-list">
        <div>
          <h2>Info</h2>
          <ul>
            <li>
              <b>Name</b>{home.name}
            </li>
            <li>
              <b>City</b>{home.city}
            </li>
            <li>
              <b>State</b>{home.state}
            </li>
            <li>
              <b>Description</b>{home.description}
            </li>
            <li id="map">
              <b>MAP</b>{}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}


const HomeDetailContainer = () => {
const home = useSelector((state) => state.homes[state.currentHome]);
const dispatch = useDispatch()
return (
  <HomeDetail
    home={home}
    getOneHome={(id) => dispatch(getOneHome(id))}
  />
);
};


export default HomeDetailContainer