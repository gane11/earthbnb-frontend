import React, { useState, } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import { uploadNewAlbum } from '../../store/actions/uploadAlbumAction'
import { uploadNewTrack } from '../../store/actions/uploadTrackAction'


Modal.setAppElement('#root');


const UploadAlbum = ({ user }) => {
    let newAlbumId

    const history = useHistory();
    const dispatch = useDispatch();
    const single = true;
    const [title, setTitle] = useState("");
    const [newAlbumCover, setNewAlbumCover] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);
    //track
    const [trackTitle, setTrackTitle] = useState("");
    const [lyrics, setLyrics] = useState("");
    const [newTrackUrl, setNewTrackUrl] = useState("");
    const [modalIsOpen2, setIsOpen2] = useState("");


    const updateTitle = (e) => {
        setTitle(e.target.value);
    };

    const updateNewAlbumCover = (e) => {
        setNewAlbumCover(e.target.files[0]);
    };
    const updateTrackTitle = (e) => {
        setTrackTitle(e.target.value);
    };
    const updateLyrics = (e) => {
        setLyrics(e.target.value);
    };

    const updateNewTrackUrl = (e) => {
        setNewTrackUrl(e.target.files[0]);
    };

    const onUpload = async (e) => {
        e.preventDefault();
        if (user) {
            let album = new FormData();
            album.append('title', title);
            album.append('newAlbumCover', newAlbumCover);
            album.append('single', single);
            album.append('artistId', user.id)

            album = await dispatch(uploadNewAlbum(album));
            newAlbumId = user.id + 10
            setIsOpen(false);

            // history.push("/home")

        }
    };
    ///track upload
    const onUpload2 = async (e) => {
        e.preventDefault();
        if (user) {
            let track = new FormData();
            track.append('trackTitle', trackTitle);
            track.append('lyrics', lyrics);
            track.append('newTrackUrl', newTrackUrl);
            track.append('albumId', newAlbumId);
            track.append('artistId', user.id)

            track = await dispatch(uploadNewTrack(track));
            setIsOpen2(false)
        }
    }

    return (
        <>
            <button className="signup__btn" onClick={() => setIsOpen(true)}>Upload Album</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setIsOpen(false)}
                contentLabel="Signup Modal"
                className="signup-modal"
                overlayClassName="overlay"
                shouldCloseOnOverlayClick={true}
            >
                <div className="login-header">
                    <h2>Upload Album</h2>
                    <button className="close-btn" onClick={() => setIsOpen(false)}>X</button>
                </div>

                <form onSubmit={onUpload}>

                    <div className="login-content">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            onChange={updateTitle}
                            value={title}
                        ></input>
                    </div>
                    <div className="login-content">
                        <label>Album Cover</label>
                        <input
                            type="file"
                            name="album_cover"
                            onChange={updateNewAlbumCover}
                        ></input>
                    </div>
                    <div className="login-content">
                        <button className="login-btn" type="submit" onClick={() => setIsOpen2(true)}>Next</button>
                    </div>
                </form>
            </Modal>
            <Modal
                isOpen={modalIsOpen2}
                onRequestClose={() => setIsOpen2(false)}
                contentLabel="Signup Modal"
                className="signup-modal"
                overlayClassName="overlay"
                shouldCloseOnOverlayClick={true}
            >
                <div className="login-header">
                    <h2>Upload Song</h2>
                    <button className="close-btn" onClick={() => setIsOpen2(false)}>X</button>
                </div>

                <form onSubmit={onUpload2}>

                    <div className="login-content">
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            onChange={updateTrackTitle}
                            value={trackTitle}
                        ></input>
                    </div>
                    <div className="login-content">
                        <label>Lyrics</label>
                        <input
                            type="text"
                            name="lyrics"
                            onChange={updateLyrics}
                            value={lyrics}
                        ></input>
                    </div>
                    <div className="login-content">
                        <label>Choose Song</label>
                        <input
                            type="file"
                            name="song_url"
                            onChange={updateNewTrackUrl}
                        ></input>
                    </div>
                    <div className="login-content">
                        <button className="login-btn" type="submit">Upload</button>
                    </div>
                </form>
            </Modal>
        </>
    )
}


export default UploadAlbum;












////navbar vertugo 

import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';


///material UI

import InputBase from '@material-ui/core/InputBase';
// import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
import vertugologo from './images/alexbnblogo.png'

const useStyles = makeStyles((theme) => ({

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));


//material UI

const NavBar = ({ setAuthenticated, user }) => {
    const [searchValue, setSearchValue] = useState('')

    const updateSearch = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <nav className="navbar">
            <div className="navbar__contents">
                <NavLink to="/" exact={true} activeClassName="active">
                    <div className="navbar__logo">
                        <div className="navbar__logo-image"></div>
                        <div className="navbar__logo-title">Busker</div>
                    </div>
                </NavLink>
                <ul className="navbar__links">
                    <li>
                        {user.id ? (
                            <LogoutButton setAuthenticated={setAuthenticated} />
                        ) : (
                                <li>
                                    <NavLink to="/login" exact={true} activeClassName="active">
                                        Login
            </NavLink>
                                    <NavLink to="/sign-up" exact={true} activeClassName="active">
                                        Sign Up
            </NavLink>
                                </li>
                            )}
                    </li>
                    <li>
                        <NavLink to="/users" exact={true} activeClassName="active">
                            Users
          </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

const NavBarContainer = ({ setAuthenticated }) => {
    const user = useSelector(state => state.user)
    return (
        <NavBar setAuthenticated={setAuthenticated} user={user} />
    )
}

export default NavBarContainer;