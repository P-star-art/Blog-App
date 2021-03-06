import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSignedIn,
    selectUserData,
    setSignedIn,
    setUserData,
    setSearchInput
} from "../features/userSlice";
import '../styles/navbar.css';


const Navbar = () => {
    const [inputValue, setInputValue] = useState("tech");
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    };

    const clickHandler = (e) => {
        e.preventDefault();
        dispatch(setSearchInput(inputValue));
    };

    return (
        <div className="navbar">
            <h1 className="navbar__header">BlogMania 💬</h1>
            {isSignedIn && (
                <div className="blog__search">
                    <input
                        className="search"
                        placeholder="Search for a blog"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={clickHandler} className="submit">
                        Search
          </button>
                </div>
            )}

            {isSignedIn ? (
                <div className="navbar__user__data">
                    <Avatar
                        className="user"
                        src={userData?.imageUrl}
                        alt={userData?.name}
                    />
                    <h1 className="signedIn">{userData?.givenName}</h1>
                    <GoogleLogout
                        clientId="57529085775-fk8rn8hren1q8o5ja2idq4m7hug5aong.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="logout__button"
                            >
                                Logout 😦
                            </button>
                        )}
                        onLogoutSuccess={logout}
                    />
                </div>
            ) : (
                    <h1 className="notSignedIn">User not available 😞</h1>
                )}
        </div>
    );
};

export default Navbar;