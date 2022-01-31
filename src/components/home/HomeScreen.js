import React, { useContext } from 'react';
import { ThemeContext } from '../../context/themeContext';
import MEIcon from '../../assets/ic_magic_eden.png';
import { WalletBtn } from '../ui/buttons/WalletBtn';

export const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);

  const handleConnectWallet = () => {
    console.log('click');
  }

  return (
    <div className={ theme.theme }>

    <div className="pt-3 text-center">
      <img className="logo rounded-circle" src="https://random.imagecdn.app/256/256" alt="" width="256" height="256" />
      <div className="mb-3"></div>
      {/* <button 
        className="wallet-adapter-button wallet-adapter-button-trigger" 
        tabIndex="0" 
        onClick={ handleConnectWallet }
        style={{ justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
        Connect Wallet
      </button> */}
      <WalletBtn handleClick={handleConnectWallet} />
    </div>

      <h3 className="text-center mt-2">Recent Plays</h3>
      <div className="container">
        <div className="play-list">
          <ul className="list-group">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className={`d-flex list-group-item list-group-item-action ${ theme.theme === 'dark' ? 'dark-list-item' : ''}` }>
              <div className="profile-picture">
                <img className="image rounded-circle" src="https://i.imgur.com/E3aJ7TP.jpg" alt="" />
              </div>
              <div className="title mb-auto ms-2">Wallet (4D9a) played 0.5 and <span style={{ color: "mediumseagreen" }}> doubled.</span></div>
              <small className="ms-auto mt-auto time-in-row">6 seconds ago</small>
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className={`d-flex list-group-item list-group-item-action ${ theme.theme === 'dark' ? 'dark-list-item' : ''}` }>
              <div className="profile-picture">
                <img className="image rounded-circle" src="https://i.imgur.com/E3aJ7TP.jpg" alt="" />
              </div>
              <div className="title mb-auto ms-2">Wallet (4D9a) played 1 and got rugged.</div>
              <small className="ms-auto mt-auto time-in-row">6 seconds ago</small>
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className={`d-flex list-group-item list-group-item-action ${ theme.theme === 'dark' ? 'dark-list-item' : ''}` }>
              <div className="profile-picture">
                <img className="image rounded-circle" src="https://i.imgur.com/E3aJ7TP.jpg" alt="" />
              </div>
              <div className="title mb-auto ms-2">Wallet (4D9a) played 0.5 and <span style={{ color: "mediumseagreen" }}> doubled.</span></div>
              <small className="ms-auto mt-auto time-in-row">6 seconds ago</small>
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className={`d-flex list-group-item list-group-item-action ${ theme.theme === 'dark' ? 'dark-list-item' : ''}` }>
              <div className="profile-picture">
                <img className="image rounded-circle" src="https://i.imgur.com/E3aJ7TP.jpg" alt="" />
              </div>
              <div className="title mb-auto ms-2">Wallet (4D9a) played 0.5 and <span style={{ color: "mediumseagreen" }}> doubled.</span></div>
              <small className="ms-auto mt-auto time-in-row">6 seconds ago</small>
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className={`d-flex list-group-item list-group-item-action ${ theme.theme === 'dark' ? 'dark-list-item' : ''}` }>
              <div className="profile-picture">
                <img className="image rounded-circle" src="https://i.imgur.com/E3aJ7TP.jpg" alt="" />
              </div>
              <div className="title mb-auto ms-2">Wallet (4D9a) played 0.5 and <span style={{ color: "mediumseagreen" }}> doubled.</span></div>
              <small className="ms-auto mt-auto time-in-row">6 seconds ago</small>
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className={`d-flex list-group-item list-group-item-action ${ theme.theme === 'dark' ? 'dark-list-item' : ''}` }>
              <div className="profile-picture">
                <img className="image rounded-circle" src="https://i.imgur.com/E3aJ7TP.jpg" alt="" />
              </div>
              <div className="title mb-auto ms-2">Wallet (4D9a) played 0.5 and <span style={{ color: "mediumseagreen" }}> doubled.</span></div>
              <small className="ms-auto mt-auto time-in-row">6 seconds ago</small>
            </a>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" className={`d-flex list-group-item list-group-item-action ${ theme.theme === 'dark' ? 'dark-list-item' : ''}` }>
              <div className="profile-picture">
                <img className="image rounded-circle" src="https://i.imgur.com/E3aJ7TP.jpg" alt="" />
              </div>
              <div className="title mb-auto ms-2">Wallet (4D9a) played 0.5 and <span style={{ color: "mediumseagreen" }}> doubled.</span></div>
              <small className="ms-auto mt-auto time-in-row">6 seconds ago</small>
            </a>
          </ul>
        </div>       

      </div>
      <div className={`social-icons d-flex flex-row justify-content-center py-4 ${theme.theme}`}>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <img className="rounded mt-1 me-2" src={MEIcon} style={{ width: '36px', heigh: '36px' }} alt="Magic Eden Marketplace" />
          </a>
          <a href="https://www.google.com" className="twitter-icon me-2" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-2x fa-twitter"></i>
          </a>
          <a href="https://www.google.com" className="discord-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-2x fa-discord"></i>
          </a>
        </div>
    </div>
  );
};
