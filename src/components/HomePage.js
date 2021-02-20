import React from 'react';
import GoogleLogin from 'react-google-login'

const HomePage = () => {

    const login = (response) => {
         console.log(response)
     }

    return (
        <div className="home__page">
            <div className="login__message">
                <h2>📗</h2>
                <h1>A Readers Favourite Place!</h1>
                <p>We provide high quality online resources from reading blogs. Just sign up and start reading some quality blogs.</p>
                <GoogleLogin
                    clientId="1050567203637-l366h5nnoigeo44vu4htlr23ve28kath.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className="login__button"
                        >
                            Login with Google
                        </button>
                    )}
                    onSuccess={login}
                    onFailure={login}
                    isSignedIn={true}
                    cookiePolicy={"single_host_origin"}
                />
            </div>
        </div>
    )
}

export default HomePage
