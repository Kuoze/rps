import React from 'react';

import MEIcon from '../../../assets/ic_magic_eden.png';

export const NavbarMobile = ({ theme, handleThemeChange }) => {

    return (
        <nav className={`navbar ${ theme === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container-fluid">
                <div className="d-flex justify-content-center align-center">
                    <button 
                        type="button" 
                        className={`btn btn-transparent ${ theme === 'dark' ? 'text-white' : ''}`}
                        title={ theme === 'light' ? 'Dark Theme' : 'Light Theme'} 
                        onClick={ handleThemeChange }>
                            { theme === "light" ? "DARK " : "LIGHT "}<i className={`${ theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun" }` }></i>
                    </button>                    
                </div>
                <a className="navbar-brand" href="/">Rock Paper Scissors</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`offcanvas offcanvas-end ${ theme === 'dark' ? 'bg-dark text-white' : '' }`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Rock Paper Scissors</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    
                    <div className="offcanvas-body text-center">
                        <ul className="navbar-nav flex-grow-1 pe-3">
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
                                <a className="nav-link" href="./leaderboard">Leaderboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./">How To Play</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./">FAQ</a>
                            </li>                            
                        </ul>    

                        <div className="d-flex flex-row flex-sm-column gap-2 justify-content-center mt-3">
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <img className="rounded mt-1" src={ MEIcon } style={{ width: '36px', heigh: '36px'}} alt="Magic Eden Marketplace" />
                            </a>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-2x fa-twitter"></i>
                            </a>
                            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-2x fa-discord"></i>
                            </a>
                        </div>                        

                    </div>
                </div>
            </div>
        </nav>
    )
};
