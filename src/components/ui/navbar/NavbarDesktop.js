import React from 'react';

export const NavbarDesktop = ({ theme, handleThemeChange }) => {
    return (
        <nav className={`navbar navbar-expand-lg ${ theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light' }`}>
            <div className="container-fluid">
                <div className="d-flex justify-content-center align-center">
                    <button 
                        type="button" 
                        className={`btn ${ theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}
                        title={ theme === 'light' ? 'Dark Theme' : 'Light Theme'} 
                        onClick={ handleThemeChange }>
                            { theme === "light" ? "DARK " : "LIGHT "}<i className={`${ theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun" }` }></i>
                    </button>                    
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="./">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./timeline">Timeline</a>
                        </li>                       
                        <li className="nav-item">
                            <a className="nav-link" href="./">How To Play</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./">FAQ</a>
                        </li>    
                    </ul>                    
                </div>
                <a href="/leaderboard" className="btn btn-outline-info">LeaderBoard</a>
            </div>
        </nav>
    );
};
